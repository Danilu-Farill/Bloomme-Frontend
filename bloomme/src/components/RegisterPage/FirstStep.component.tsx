import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import countryList from 'react-select-country-list';
import { useMemo, useState } from 'react';
import Select from 'react-select';
import { RegisterData } from "../../models/Register.model";

type FirstStepProps = {
  setData: React.Dispatch<React.SetStateAction<RegisterData>>;
};

function FirstStep({ setData }: FirstStepProps) {
  const options = useMemo(() => countryList().getData(), []);
  const [country, setCountry] = useState('');

  const changeHandler = (value: { label: string; value: string } | null) => {
    setCountry(value ? value.label : '');
  };

  const validateForm = (data: RegisterData) => {
    if (data.username === "") {
      return [false, "Username is required"];
    }

    if (data.email === undefined) {
      return [false, "Email is required"];
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return [false, "Email is not valid"];
    }

    if (data.age === "") {
      return [false, "Age is required"];
    }

    if (data.country === "") {
      return [false, "Country is required"];
    }

    if (data.password === "") {
      return [false, "Password is required"];
    }
    return [true, ""];
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data: RegisterData = {
      username: formData.get("username") as string || "",
      email: formData.get("email") as string || "",
      age: formData.get("age") as string || "",
      country: country,
      password: formData.get("password") as string || "",
    };

    const validate = validateForm(data as RegisterData);

    if (!validate[0]) {
      Swal.fire({
        title: "Error!",
        text: validate[1] as string,
        icon: "error",
        confirmButtonText: "Ok",
      });

      return;
    }

    setData(data);
  };

  return (
    <>
      <h1 className="text-4xl text-white">Sign Up</h1>
      <h3 className="text-slate-500">Already have an account? <Link to={'/login'} >Sign in</Link> </h3>
      <div className="flex gap-10 text-white">
        <FaGoogle size={24} />
        <FaFacebookF size={24} />
        <GrInstagram size={24} />
      </div>
      <div className="py-10 w-full">
        <form
          id="form"
          onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col gap-3 items-center"
        >
          <div className="relative mb-4 w-full">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="username"
              type="text"
              placeholder="username"
              autoComplete="off"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="relative mb-4 w-full">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="email"
              autoComplete="off"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="relative mb-4 w-full">
            <FaBirthdayCake className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="age"
              type="number"
              placeholder="age"
              autoComplete="off"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <Select
            options={options}
            className="mb-4 w-full"
            onChange={changeHandler}
          />
          <div className="relative mb-4 w-full">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="password"
              autoComplete="off"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            className="register-button-submit mt-10 max-w-56"
            type="submit"
          >
            next
          </button>
        </form>
      </div>
    </>
  );
}

export default FirstStep;
