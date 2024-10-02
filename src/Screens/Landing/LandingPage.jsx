import React from "react";
import Introduction from "../../components/Landing/Introduction";
import Button from "../../components/Common/Button/Button";
import QuickAccess from "../../components/Landing/QuickAccess";
const LandingPage = () => {
  return (
    <div className="my-10">
      <Introduction />
      <Button
        text="شروع یادگیری"
        phoneStyle="py-2 m-auto mt-5 max-lg:text-base"
      />
      <QuickAccess />
    </div>
  );
};

export default LandingPage;
