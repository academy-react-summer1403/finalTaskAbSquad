import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
<<<<<<< HEAD
import ProfileComp from "../../Common/ProfileComp";
=======
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
import FontGraySmallText from "../../Common/FontGraySmallText";
import TeacherProfSection from "./TeacherProfSection";
import DetailDesc from "./DetailDesc";
import RateSection from "./RateSection";
import CommentSection from "./CommentSection";

<<<<<<< HEAD
const LeftSide = ({ courseDetail }) => {
=======
const LeftSide = ({ courseDetail, setCommentModalOpen }) => {
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
  return (
    <>
      <div className="basis-3/5 flex flex-col items-start justify-start gap-5">
        <ImageContainer image={courseDetail.imageAddress} />
        <div className="flex flex-col gap-3 w-full ">
<<<<<<< HEAD
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
=======
          <FontGraySmallText text="مدرس" />
          <TeacherProfSection courseDetail={courseDetail} />
        </div>
        <FontGraySmallText text="توضیحات" />
        <div className="w-full">
          <DetailDesc
            title={courseDetail.miniDescribe}
            desc={courseDetail.describe}
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
          />
        </div>
        <RateSection />

<<<<<<< HEAD
        <CommentSection />
=======
        <CommentSection setCommentModalOpen={setCommentModalOpen} />
>>>>>>> 4c3f6f9410ee01083c33ee54c3ffa62b79a84eee
      </div>
    </>
  );
};

export default LeftSide;
