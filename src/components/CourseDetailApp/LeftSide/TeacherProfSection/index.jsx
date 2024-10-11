import React from "react";
import ProfileComp from "../../../Common/ProfileComp";

const TeacherProfSection = ({ courseDetail }) => {
  return (
    <>
      <div className="flex flex-row justify-start">
        <ProfileComp courseDetail={courseDetail} />
      </div>
    </>
  );
};

export default TeacherProfSection;
