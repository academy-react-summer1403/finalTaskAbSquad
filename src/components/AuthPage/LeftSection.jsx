import Button from "../Common/Button/Button";
import React from "react";

const LeftSection = ({ text, desc }) => {
  return (
    <div>
      <h2>{text}</h2>
      <p>{desc}</p>
      <div>main</div>
      <Button phoneStyle="h-[40px] w-[538px]" text="ورود یا ثبت نام" />
      <span></span>
    </div>
  );
};

export default LeftSection;
