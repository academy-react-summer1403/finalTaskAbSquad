import React from "react";
import Title from "./Title";
import Rank from "./Rank";
import Button from "../../Common/Button/Button";
import TeacherDesc from "./TeacherDesc";

const TeacherSection = ({ rank, score }) => {
  return (
    <>
      <div
        className={
          rank == "🥇"
            ? "flex flex-col border-4 rounded-main border-solid border-primaryBlue w-full relative px-6 pb-4 gap-5 sm:w-[427px] "
            : "flex flex-col grayBox w-full relative px-6 pb-4 gap-5 sm:transform sm:scale-75 sm:w-[427px] "
        }
      >
        {/* Profile Pic */}
        <div
          className={
            rank == "🥇"
              ? "border-4 rounded-blueButton border-solid border-primaryBlue absolute  right-[40%] -top-9 bg-fontGray w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] sm:right-[40%] sm:-top-11 "
              : " rounded-blueButton absolute  right-[40%] -top-9 bg-fontGray w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] sm:right-[40%] sm:-top-11 "
          }
          //   absolute  right-[40%] -top-11 bg-fontGray w-[88px] h-[88px] rounded-full
        ></div>
        {/* Name and Rank */}
        <Title />
        <Rank rank={rank} score={score} />
        <TeacherDesc text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد." />
        <div className="h-10 ">
          <Button text="صفحه استاد" phoneStyle="w-full text-base py-[18px]" />
        </div>
      </div>
    </>
  );
};

export default TeacherSection;
