
import UserSignin from "./pages/UserSignin";
import {Routes , Route} from 'react-router-dom'
import UserSignup from "./pages/UserSignup";
import Test from "./pages/Test";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import Transaction from "./pages/Alert";
import { Alert, ChakraProvider } from "@chakra-ui/react";
import AddNewPatient from "./pages/AddNewPatient";
import { AuthContextProvider } from "./context/AuthContext";
import Chats from "./pages/Chats";
// const userSignedIn
function App() {
  return (
    <>
      <div className="">
        <AuthContextProvider>
          <ChakraProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/usersignup" element={<UserSignup/>}/>
            <Route path="/usersignin" element={<UserSignin/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/list" element={<PatientList/>}/>
            <Route path="/dashboard/alert" element={<Alert/>}/>
            <Route path="/dashboard/newpatient" element={<AddNewPatient/>}/>
            <Route path="/chats" element={<Chats/>}/>
            {/* <Route path="/test" element={<Test/>}/> */}
          </Routes>
          </ChakraProvider>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
