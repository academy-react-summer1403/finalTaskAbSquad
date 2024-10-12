import React from "react";
import ProfileComp from "../ProfileComp";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { SlEmotsmile } from "react-icons/sl";
import { Field, Form, Formik } from "formik";
const AddCommentSection = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      {/* Profile Pic */}
      <div className="flex justify-start w-full">
        <ProfileComp name={"Marcus Wrench"} skill={"Goddamn Wrenched"} />
      </div>

      {/* Sending Section And FORM */}
      <Formik initialValues={{ commentTitle: "", mainComment: "" }}>
        <Form className="w-full">
          <div className="flex flex-row w-full justify-start items-end mt-3 h-28 gap-4">
            {/* Send Button */}
            <button
              type="submit"
              className="group bg-primaryBlue p-4 rounded-full cursor-pointer hover:bg-primaryViolet  "
            >
              <PiPaperPlaneTiltLight className=" w-full h-full" size="32px" />
            </button>

            {/* Inputs Container */}
            <div className="border basis-10/12 h-full rounded-[40px] flex flex-col overflow-hidden px-5">
              <div className="border-b basis-1/2 flex justify-start items-center">
                <Field
                  name="commentTitle"
                  className="bg-primaryWhite dark:bg-primaryBlack outline-none w-full"
                  type="text"
                  placeholder={"عنوان نظر خود را وارد کنید"}
                />
              </div>
              <div className="basis-1/2 flex justify-start items-center">
                <Field
                  name="mainComment"
                  className="bg-primaryWhite dark:bg-primaryBlack outline-none w-full"
                  type="text"
                  placeholder={"متن نظر خود را وارد کنید"}
                />
              </div>
            </div>

            {/* Emojies */}
            <div className="border border-primaryGray p-4 rounded-full">
              <SlEmotsmile size={"32px"} />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCommentSection;
