import React from "react";
import BahrLogoComp from "../../Common/BahrLogoComp";
import Button from "../../Common/Button/Button";
import { RxDashboard } from "react-icons/rx";
const RightSection = () => {
  return (
    <div className=" ">
      <div className="flex flex-row justify-start items-start self-start  mb-16  ">
        <BahrLogoComp />
      </div>
      <ul className="flex gap-3 flex-col">
        <span>hi</span>
        <li>
          <Button
            phoneStyle=" h-[53px] w-[228px] flex gap-3  !justify-start text-xl"
            Icon={RxDashboard}
            text="داشبورد"
          />
        </li>
        <li>
          {" "}
          <Button
            phoneStyle=" h-[53px] w-[228px] flex gap-3  !justify-start text-xl"
            Icon={RxDashboard}
            text="داشبورد"
          />
        </li>
        <li>
          {" "}
          <Button
            phoneStyle=" h-[53px] w-[228px] flex gap-3  !justify-start text-xl"
            Icon={RxDashboard}
            text="داشبورد"
          />
        </li>
        <li>
          {" "}
          <Button
            phoneStyle=" h-[53px] w-[228px] flex gap-3  !justify-start text-xl"
            Icon={RxDashboard}
            text="داشبورد"
          />
        </li>
        <li>
          {" "}
          <Button
            phoneStyle=" h-[53px] w-[228px] flex gap-3  !justify-start text-xl"
            Icon={RxDashboard}
            text="داشبورد"
          />
        </li>
        <li>
          {" "}
          <Button
            phoneStyle=" h-[53px] w-[228px] flex gap-3  !justify-start text-xl"
            Icon={RxDashboard}
            text="داشبورد"
          />
        </li>
      </ul>
    </div>
  );
};

export default RightSection;
