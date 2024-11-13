import "../styles/RegisterPage/Register.style.css";
import FirstStep from "../components/RegisterPage/FirstStep.component";
import SecondStep from "../components/RegisterPage/SecondStep.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPost } from "../services/Register.service";
import girlRegister from '../assets/RegisterPage/girl-register.png';
import { RegisterData } from "../models/Register.model";

function Register() {
  const [data, setData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
    age: "",
    country: "",
    assistant_id: null,
    assistant_name: "",
  });
  const navigate = useNavigate();

  const handleRegisterApi = async() => {
    if (!data.username) {
      alert("Username is required");
      return;
    }
    await registerPost(data);
    navigate("/login");
  };

  return (
    <main className="min-h-screen grid grid-cols-12">
      <div className="hidden sm:col-span-7 sm:block">
        <img
          className='absolute max-h-[40rem] bottom-0 left-[5%] 2xl:max-h-[55rem] 2xl:left-[8%]'
          src={girlRegister}
          alt="girl"
        />
      </div>
      <div className="bg-[#f29fb3] col-span-12 sm:col-span-5 flex flex-col px-16 py-20 items-center gap-3 main-content">
        {!data.assistant_id ? (
          <FirstStep setData={setData} />
        ) : (
          <SecondStep setData={setData} handleRegisterApi={handleRegisterApi} />
        )}
      </div>
    </main>
  );
}

export default Register;