"use client";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import { useState } from "react";
import Image from "next/image";
import map from "@/public/map.svg";
import ContactForm from "@/components/ContactUs/ContactForm";
import Icons from "components/Icons";

const locationOne = {
  key: 1,
  contacts: "شعبه اصلی (یزد)",
  city: "یزد",
  address: "خیابان امام شرکت ابر گستر رادین",
  phone: "32348585 - (035)",
  email: "radinCloud@gmail.com",
};
const locationTwo = {
  key: 0,
  contacts: "شعبه تهران",
  city: "تهران",
  address: "جردن _ شرکت ابر گستر رادین",
  phone: "32348585 - (021)",
  email: "radinCloud@gmail.com",
};

export default function ContactUs() {
  const [slider, setSlider] = useState(true);

  return (
    <div>
      <div
        className={
          "flex justify-center w-full lg:bg-accent/30 rounded-lg h-[555px] lg:h-[555px] lg:mb-10 relative overflow-clip"
        }
      >
        <Image
          src={map}
          alt={""}
          className={
            "hidden lg:block w-full opacity-20 absolute top-[-500px] left-0"
          }
          style={{ height: "300%" }}
        />
        <div className={"absolute top-[9%] lg:right-[4%]"}>
          <ContactInfo
            slider={slider}
            setSlider={setSlider}
            location={slider ? locationOne : locationTwo}
          />
        </div>
      </div>
      <div
        className={
          "flex flex-col lg:flex-row justify-center w-full h-fit mb-10 relative lg:justify-between items-center lg:p-12 lg:bg-secondary/10 rounded-lg"
        }
      >
        <div className={"w-full mb-16 text-sm lg:mb-0 lg:w-[45%]"}>
          <div style={{ fontWeight: 700}} className={"text-lg lg:tex-[27px]"}>
            نظر شما ارزشمند است!
          </div>
          <div className={"text-xs lg:text-sm leading-6 mt-8 lg:leading-10 w-full"}>
            ما به بهبود رابطه ما با شما و بهبود خدماتمان افتخار می‌کنیم. لطفاً
            چند لحظه وقت بگذارید تا ما را با بازخوردها و نظرات خود بهبود بخشید.
            این اطلاعات به ما کمک می‌کند تا به نیازها و انتظارات شما پاسخ دهیم.
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
