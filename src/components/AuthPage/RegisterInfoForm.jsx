import React, { useState } from "react";
import TextField from "../Common/Fields/TextField";
import { FaHouse } from "react-icons/fa6";
import { MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
const RegisterInfoForm = (setEmail, setPassword) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xl">ایمیل</span>
        <TextField
          placeholder="ایمیل خود را وارد کنید"
          icon={LuClipboardEdit}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <span className="text-xl">رمزعبور</span>
        <TextField
          placeholder="رمزعبور خود را وارد کنید"
          type={showPassword ? "text" : "password"}
          icon={MdLockOutline}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute left-4 top-12"
        >
          {showPassword ? (
            <MdVisibilityOff size={24} />
          ) : (
            <MdVisibility size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default RegisterInfoForm;
