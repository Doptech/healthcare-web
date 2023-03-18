import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserDob from "./pages/UserDob";
import UserName from "./pages/UserName";
import { Route, Routes } from "react-router-dom";
import UserGender from "./pages/UserGender";
import UserDetails from "./pages/UserDetails";
import UserAllergy from "./pages/UserAllergy";
import Test from "./pages/Test";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import PatientDetails from "./components/PatientDetails";
import Transaction from "./pages/Transaction";
import AddNewPatient from "./pages/AddNewPatient";
import Chats from "./pages/Chats";
import UserSignin from './pages/UserSignin'
import UserSignup from './pages/UserSignup'
function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/name" element={<UserName />} />
          <Route path="/usersignup" element={<UserSignup/>}/>
          <Route path="/dob" element={<UserDob />} />
          <Route path="/gender" element={<UserGender />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/allergy" element={<UserAllergy />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/list" element={<PatientList />} />
          <Route path="/dashboard/list/details" element={<PatientDetails />} />
          <Route path="/dashboard/transaction" element={<Transaction />} />
          <Route path="/dashboard/newpatient" element={<AddNewPatient />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
