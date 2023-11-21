import { BrowserRouter, Routes ,Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import Welcome from "./Pages/Welcome";
import LoginPage from "./Pages/LoginPage";
export default function App(){
  return(<>
  <div>
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Welcome/>}/>
    <Route  path="/LOgIn" element={<LoginPage/>}/>
    <Route  path="/SignUp" element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  </>)
}