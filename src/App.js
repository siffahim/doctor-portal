import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import AdminRoute from "./Pages/AdminRoute/AdminRoute";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/home' element={<Home />} />
            <Route path='/appointment' element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            } />

            <Route path='/dashboard' element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route exact path='/dashboard' element={<DashboardHome />} />
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>

              </Route>

              <Route path={`/dashboard/makeadmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} />

              <Route path={`/dashboard/addDoctor`} element={<AdminRoute> <AddDoctor /></AdminRoute>} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
