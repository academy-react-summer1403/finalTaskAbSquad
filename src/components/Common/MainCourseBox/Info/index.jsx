import React from "react";

const Info = ({ course }) => {
  return (
    <>
      <div className="flex flex-col grow px-2">
        {/* Title */}
        <div>
          <h1 className="text-xl">ری‌اکت جی‌اس</h1>
        </div>
        {/* Description */}
        <h3 className="text-fontGray text-sm">
          آموزش صفر تا صد کتابخانه پرطرفدار جی‌اس یعنی ری‌اکت همراه تسک های م...
        </h3>
      </div>
    </>
  );
};

export default Info;
