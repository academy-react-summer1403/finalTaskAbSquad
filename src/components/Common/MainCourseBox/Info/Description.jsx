import React from "react";

const Description = ({ desc, type }) => {
  return (
    <h3
      className={
        type !== "LandingNews"
          ? "text-fontGray text-sm sm:text-base"
          : "text-fontGray text-sm sm:text-base h-20"
      }
    >
      آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های م...
    </h3>
  );
};

export default Description;
