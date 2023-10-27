"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import img from "@/public/Creative writing-cuate.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Icons from "components/Icons";
import { HiDocument } from "react-icons/hi2";

const blogs = [
  {
    id: 1,
    title: "نقش CRM در تحولات نوین تجارت: راهنمایی برای کسب‌وکارها",
    desc: "این مقاله به بررسی نحوه استفاده از سیستم مدیریت ارتباط با مشتری (CRM) در تطابق با تغییرات نوین تجارت و مشتری‌پذیری می‌پردازد.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 2,
    title:
      "استفاده از CRM برای افزایش وفاداری مشتریان: راهکارها و مطالب آموزشی",
    desc: "این مقاله به توصیه‌ها و راهکارهایی می‌پردازد که شرکت‌ها می‌توانند از طریق سیستم CRM به افزایش وفاداری مشتریان خود دست یابند.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 3,
    title: "چگونه CRM به بهبود تعاملات مشتریان در شبکه‌های اجتماعی کمک می‌کند",
    desc: "این مقاله نشان می‌دهد که چگونه استفاده از CRM در مدیریت تعاملات مشتریان در شبکه‌های اجتماعی می‌تواند به توسعه کسب‌وکار کمک کند.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 4,
    title: "امنیت داده و CRM: چگونه اطلاعات مشتریان را محافظت کنیم",
    desc: "این مقاله به اصول و تکنیک‌های امنیت داده در سیستم‌های CRM می‌پردازد و نشان می‌دهد که چگونه می‌توان اطلاعات مشتریان را محافظت کرد.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 5,
    title:
      "تجزیه و تحلیل داده‌های CRM برای بهبود فرآیندهای تصمیم‌گیری کسب‌وکار",
    desc: "این مقاله به روش‌ها و ابزاری می‌پردازد که با استفاده از داده‌های CRM، می‌توان به بهبود فرآیندهای تصمیم‌گیری در سازمان‌ها کمک کرد.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 6,
    title: "CRM و تجربه مشتری: کلید موفقیت در دنیای رقابتی امروزی",
    desc: "این مقاله به اهمیت تجربه مشتری در جلب و نگه‌داشتن مشتریان می‌پردازد و نشان می‌دهد که چگونه CRM می‌تواند در بهبود تجربه مشتریان موثر باشد.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 7,
    title: "نقش CRM در توسعه بازاریابی تعاملی: ارتباطات تعاملی با مشتریان",
    desc: "این مقاله به نقش CRM در توسعه استراتژی بازاریابی تعاملی و ارتباطات فعال با مشتریان می‌پردازد.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 8,
    title: "مقایسه CRM‌های معروف: انتخاب بهترین سیستم مدیریت ارتباط با مشتری",
    desc: "این مقاله به مقایسه و بررسی انواع مختلف سیستم‌های CRM معروف و راهنمای انتخاب بهترین CRM برای نیازهای کسب‌وکار می‌پردازد.",
    img: img,
    time: "1402/5/23",
  },
  {
    id: 9,
    title: "CRM در صنعت خدمات مالی: بهبود رابطه با مشتریان در بانکداری و بیمه",
    desc: "این مقاله به نقش CRM در بهبود ارتباطات و رابطه با مشتریان در صنعت خدمات مالی می‌پردازد.",
    img: img,
    time: "1402/5/23",
  },
];

export default function BlogSlider({ slider }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  };

  return (
    <div
      className={
        "lg:flex lg:bg-blue-gray-100/50 items-center w-[90%] mx-auto rounded-xl my-10"
      }
    >
      {/*// ** title */}

      <div className={"w-[90%] mx-auto lg:w-[40%] lg:p-10"}>
        <div className={"flex items-center font-bold"}>
          <Icons>
            <div className={"text-lg"}>
              <HiDocument />
            </div>
          </Icons>
          <div
            className={"text-neutral/80 my-10 lg:text-lg"}
            style={{ fontWeight: 700 }}
          >
            آخرین مقالات
          </div>
        </div>
        <div className={"mt-3 text-neutral/60 leading-8 text-sm"}>
          آخرین و بروز ترین اطلاعات تکنولوژی و دنیای برنامه نویسی را با ما تجربه
          کنید.
        </div>
        <div className={"flex items-center my-10 lg:justify-center"}>
          <Button
            variant={"text"}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`rounded-full p-3 text-lg bg-white shadow-xl ml-2 text-neutral ${
              activeIndex === 0 && "bg-[#eee] text-[#aaa]"
            }`}
          >
            <IoIosArrowForward className={""} />
          </Button>
          <Button
            variant={"text"}
            onClick={() => swiperRef.current?.slideNext()}
            className={`rounded-full p-3 text-lg bg-white shadow-xl mr-2 text-neutral ${
              activeIndex === blogs.length - 1 && "bg-[#eee] text-[#aaa]"
            }`}
          >
            <IoIosArrowBack />
          </Button>
        </div>
      </div>

      {/*// ** slider*/}

      <Swiper
        className={"w-full lg:w-[50%]"}
        centeredSlides={true}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={sliderSettings}
        onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {blogs.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={
                "w-[95%] mx-auto md:w-[300px] lg:w-[350px] h-[350px] lg:min-h-[400spx] rounded-xl shadow-xl my-10 relative bg-white flex justify-center items-center flex-col lg:scale duration-300 transition-all cursor-pointer"
              }
            >
              {/*img*/}
              <div className={"absolute top-0 w-full flex justify-center"}>
                <Image src={item.img} alt={""} className={"w-[50%]"} />
              </div>
              <div
                className={
                  "w-full h-fit flex justify-center items-center bg-[#F0D342]/10 z-10 p-5 text-xs text-neutral absolute top-10 leading-6"
                }
                style={{ fontWeight: 700 }}
              >
                {item.title}
              </div>
              <div className={"mt-28 p-5"}>
                {/*description */}
                <div className={"text-[14px] leading-6 text-neutral/80"}>
                  {item.desc}
                </div>
              </div>
              {/*timer*/}
              <div
                className={
                  "text-[13px] text-neutral/50 absolute bottom-3 left-3"
                }
              >
                {item.time}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
