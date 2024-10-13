import React from "react";
import TextField from "../Common/Fields/TextField";
import { FaHouse } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
const RegisterInfoForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 ">
        <span className="text-xl ">ایمیل</span>
        <TextField
          placeholder="ایمیل خود را وارد کنید"
          icon={LuClipboardEdit}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xl ">رمزعبور</span>
        <TextField
          placeholder="رمزعبور خود را وارد کنید"
          icon={MdLockOutline}
        />
      </div>
    </div>
  );
};

export default RegisterInfoForm;
