import React from "react";
import VerificationInput from "react-verification-input";

const VerificationCode = () => {
  return (
    <div>
      <VerificationInput
        classNames={{
          container: "container",
          character: "input",
        }}
        placeholder={""}
        validChars="0-9"
      />
    </div>
  );
};

export default VerificationCode;
