"use client";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { slider } from "@material-tailwind/react";

export default function ContactInfo({ slider, setSlider, location }) {
  return (
    <div
      className={
        "bg-primary text-white/90 p-6 rounded-lg shadow-lg text-sm w-[330px] md:w-[450px] h-fit"
      }
    >
      <div className={"flex items-center"}>
        <div className={"text-lg"}>{location.contacts}</div>
      </div>
      <div className={"my-4 mt-5 relative"}>
        <div>
          <div className={"text-white/50 mb-1"}>شهر :</div>
          <div>{location.city}</div>
        </div>
        <div
          className={
            "flex items-center bg-white/80 text-primary px-5 py-2 justify-between rounded-r-2xl text-xl absolute top-0 left-[-30px]"
          }
        >
          <IoIosArrowForward
            className={"ml-4 cursor-pointer"}
            onClick={() => setSlider(!slider)}
          />
          <IoIosArrowBack
            className={"cursor-pointer"}
            onClick={() => setSlider(!slider)}
          />
        </div>
      </div>
      <div className={"my-4"}>
        <div className={"text-white/50 mb-1"}>آدرس :</div>
        <div>{location.address}</div>
      </div>
      <div className={"my-4"}>
        <div className={"text-white/50 mb-1"}>شماره تماس :</div>
        <div>{location.phone}</div>
      </div>
      <div className={"my-4"}>
        <div className={"text-white/50 mb-1"}>ایمیل :</div>
        <div>{location.email}</div>
      </div>
      <div className={"flex items-center mt-6 text-lg"}>
        <Link href={"/"}>
          <FaTelegramPlane className={"hover:text-blue-800 ml-3"} />
        </Link>
        <Link href={"/"}>
          <FaWhatsapp className={"hover:text-green-500 ml-3"} />
        </Link>
        <Link href={"/"}>
          <FaInstagram className={"hover:text-red-500"} />
        </Link>
      </div>
    </div>
  );
}
