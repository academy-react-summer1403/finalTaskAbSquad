import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import ProfileComp from "../../Common/ProfileComp";
import FontGraySmallText from "../../Common/FontGraySmallText";
import TeacherProfSection from "./TeacherProfSection";
import DetailDesc from "./DetailDesc";
import RateSection from "./RateSection";
import CommentSection from "./CommentSection";

const LeftSide = ({ courseDetail }) => {
  return (
    <>
      <div className="basis-3/5 flex flex-col items-start justify-start gap-5">
        <ImageContainer image={courseDetail.imageAddress} />
        <div className="flex flex-col gap-3 w-full ">
          <FontGraySmallText text="مدرس" style="" />
          <TeacherProfSection courseDetail={courseDetail} />
        </div>
        <FontGraySmallText text="توضیحات" style="" />
        <div className="w-full">
          <DetailDesc
            title={courseDetail.miniDescribe}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laboriosam numquam nihil facere est vel asperiores dolore culpa cupiditate. Maiores tempore molestias tenetur voluptates! Natus officia eius ipsam nesciunt, pariatur commodi nostrum incidunt excepturi enim odio ea repellat nulla non, sed rerum maxime in vero nihil ex, sint totam! Ratione consequuntur, officiis numquam ullam quaerat obcaecati, et repellendus nisi quas consectetur distinctio molestiae tenetur saepe. Eum, corrupti unde officia distinctio eligendi mollitia et minus voluptates explicabo dolore asperiores rerum numquam nostrum blanditiis delectus, error ipsam sequi debitis sapiente molestiae magnam natus fugiat iste expedita. Illum asperiores voluptatum sequi sed modi?"
            }
          />
        </div>
        <RateSection />

        <CommentSection />
      </div>
    </>
  );
};

export default LeftSide;
