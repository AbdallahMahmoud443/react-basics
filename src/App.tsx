import './App.css'
import Navbar from './components/Navbar/Navbar' // change name with anyvalue import NavbarApp from './components/Navbar'
import { useState } from "react";
import FormComponent from './components/Form';
import Heading from './components/UserDetials';
import { IuserData } from './interfaces';
function App() {
  const companyLogo ="Elnoby Group";
  const aboutText = "About Us";
  const [isLogin,setIsLogin] = useState(false); // "Login" is initial state
  const [UserData,setUserData] = useState<IuserData>({
    userName:"",
    Email:"",
    Password:"",
    Address:"" ,
 
});
  return (
    <>
    <Navbar logo ={companyLogo} aboutText ={aboutText} isLogin ={isLogin} setIsLogin= {setIsLogin}/>
    {isLogin ? <Heading user ={UserData}/> : <FormComponent setIsLogin={setIsLogin} UserData ={UserData} setUserData={setUserData}/>}
   
    </>
  )
}

export default App
