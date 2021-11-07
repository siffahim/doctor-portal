import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationFirebase from "../Pages/Login/Firebase/firebase.init";

authenticationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
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
                setUser(result.user);
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
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    //singOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).finally(() => {
                setIsLoading(false)
            })
    }

    return {
        user,
        error,
        register,
        loginUser,
        googleSignIn,
        isLoading,
        logOut
    }
}

export default useFirebase;