"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { PiThumbsUp } from "react-icons/pi";
import Icons from "components/Icons";
import {HiDocument} from "react-icons/hi2";
import {Button} from "@material-tailwind/react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {TbMessageCircle} from "react-icons/tb";

const customerComments = [
  {
    id : 1 ,
    name: "مهدی",
    email: "alireza.andalib.1400@gmail.com",
    comment:
      "سایت CRM برای کسب و کار ما یک ابزار حیاتی است. این سیستم به ما کمک کرده تا مشتریان خود را به بهترین شکل مدیریت کنیم و روابط مثبت با آنها برقرار کنیم. از قابلیت‌های گزارش‌دهی و پیگیری تاریخچه تعاملات خیلی استفاده می‌کنیم.",
  },
  {
    id : 2 ,
    name: "علیرضا",
    email: "alireza.andalib.1400@gmail.com",
    comment:
      "سایت CRM دقیقاً به اندازه‌ای که نیاز داشتیم ساده و کارآمد است. از طراحی ساده و آسان برای استفاده تا امکانات پیشرفته گزارش‌دهی و تحلیل، این سیستم برای ما ارزش بسیاری دارد",
  },
  {
    id : 3 ,
    name: "صالح",
    email: "alireza.andalib.1400@gmail.com",
    comment:
      "استفاده از سایت CRM برای ما تبدیل به یک نیاز واجب شده است. برقراری ارتباط با مشتریان و ارائه خدمات بهتر از رقبا، از مزایای این سیستم است. ما از امکانات اتوماسیون و تبادل اطلاعات با دیگر اپلیکیشن‌های ما نیز استفاده می‌کنیم.",
  },
  {
    id : 4 ,
    name: "عاطفه",
    email: "alireza.andalib.1400@gmail.com",
    comment:
      "سایت CRM ما را در مدیریت پروژه‌ها و تیم‌های متعدد کمک بسیاری کرده است. امکان اشتراک اطلاعات و کارها، برنامه‌ریزی بهتر و هماهنگی میان تیم‌ها را بهبود داده است.",
  },
  {
    id : 5 ,
    name: "عاطفه",
    email: "alireza.andalib.1400@gmail.com",
    comment:
      "یکی از بهترین ویژگی‌های سایت CRM، قابلیت سفارشی‌سازی قوی آن است. ما توانستیم این سیستم را به شکلی سازگار با نیازهای خاص کسب و کارمان تنظیم کنیم و از امکانات متعددش بهره‌برداری کنیم.",
  },
];

export default function CommentSlider() {
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
      spaceBetween: 30,
    },
  };

  return (
      <div className={"lg:flex items-center w-[90%] mx-auto"}>

        {/*// ** title */}

        <div className={"w-[90%] mx-auto lg:w-[40%] lg:p-10"}>
          <div className={"flex items-center font-bold"}>
            <Icons>
              <div className={"text-lg"}><TbMessageCircle /></div>
            </Icons>
            <div
                className={"text-neutral/80 my-10 lg:text-lg"}
                style={{fontWeight: 700}}
            >
              نظرات کاربران
            </div>
          </div>
          <div className={"mt-3 text-neutral/60 leading-8 text-sm"}>
            ما همیشه به نظرات و بازخوردهای شما، مشتریان گرامی‌امان ارزش می‌دهیم واز آنها بهره‌مند می‌شویم.
          </div>
          <div className={"flex items-center my-7 lg:justify-center"}>
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
                    activeIndex === customerComments.length - 1 && "bg-[#eee] text-[#aaa]"
                }`}
            >
              <IoIosArrowBack />
            </Button>
          </div>
        </div>

        {/*// ** slider*/}

        <Swiper
            className={"w-full lg:w-[60%]"}
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
        {customerComments.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={
                "w-[95%] mx-auto lg:w-[350px] h-[350px] lg:min-h-[500px] rounded-xl shadow-xl my-10 relative bg-white"
              }
            >
              {/*//header*/}
              <div
                className={
                  "w-[90%] h-[50px] flex items-center text-xs p-3 mt-5 absolute top-0 leading-7 bg-white"
                }
              >
                <div
                  className={"w-full h-full text-green-500 flex items-center"}
                  style={{ fontSize: 19, fontWeight: 500 }}
                >
                  <PiThumbsUp className={"ml-1 text-lg"} />
                  پیشنهاد میکنم
                </div>
              </div>
              {/*//body*/}
              <div
                className={
                  "p-10 w-[95%] mx-auto h-[180px] lg:min-h-[260px] overflow-y-auto text-xs leading-7 my-5 absolute top-8 lg:top-16"
                }
              >
                <div>{item.comment}</div>
              </div>
              {/*//footer*/}
              <div
                className={
                  "w-[90%] h-[100px] flex items-center text-xs p-3 mt-5 border-t border-accent/50 absolute bottom-0 leading-7 bg-white rounded-b-xl"
                }
              >
                <div
                  className={
                    "w-10 h-10 rounded-full ml-3 bg-accent/90 shadow-primary/50 shadow-lg flex justify-center items-center text-white border-2 border-base"
                  }
                  style={{ fontSize: 18, fontWeight: 700 }}
                >
                  {item.name[0]}
                </div>
                <div className={""}>
                  <div style={{ fontSize: 20, fontWeight: 500 }}>
                    {item.name}
                  </div>
                  <div className={"text-neutral/30"}>{item.email}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}