import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationFirebase from "../Pages/Login/Firebase/firebase.init";

authenticationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();


    //register
    const register = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, disPlayName: name }
                setUser(newUser)

                //send to firebase 
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setError('')
                    })
                    .catch(err => setError(err.message))
                saveToDb(email, name, 'POST')
                setError('');
                history.replace('/')
            })
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false)
            })
    }

    //login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                const uri = location?.state?.from || '/';
                history.push(uri)
                setError('')
            })
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false)
            })
    }

    //google signin method
    const googleSignIn = (location, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                saveToDb(user.email, user.displayName, 'PUT')
                setUser(user);
                const uri = location?.state?.from || '/';
                history.push(uri)
                setError('');
            })
            .catch(err => setError(err.message))
            .finally(() => {
                setIsLoading(false)
            })
    }

    //user track
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])


    //singOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).finally(() => {
                setIsLoading(false)
            })
    }
    //save on mongodb 
    const saveToDb = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(() => {

        })
    }

    return {
        user,
        error,
        admin,
        token,
        register,
        loginUser,
        googleSignIn,
        isLoading,
        logOut
    }
}

export default useFirebase;