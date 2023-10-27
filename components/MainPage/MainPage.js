"use client";
import Image from "next/image";
import say_hello from "@/public/says_hello-02 1.svg";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Description from "@/components/MainPage/Description";
import Description2 from "@/components/MainPage/Discription2";
import teamImg from "@/public/team 1.svg";
import statisticsImg from "@/public/statistics 1.svg";
import badgeImg from "@/public/badge 1.svg";
import skyscraperImg from "@/public/skyscraper 1.svg";
import fileImg from "@/public/file 1.svg";
import phoneImg from "@/public/phone 1.svg";
import Options from "@/components/MainPage/Options";
import Counseling from "@/components/MainPage/Counseling";
import { HiDocument } from "react-icons/hi2";
import { TbMessageCircle } from "react-icons/tb";
import BlogSlider from "@/components/Sliders/BlogSlider";
import CommentSlider from "@/components/Sliders/CommentSlider";

const descriptions = [
  {
    label: "ارتباط با مشتریان مهم است؟",
    desc:
      " ما باور داریم که موفقیت یک کسب و کار نه تنها به کیفیت محصولات و\n" +
      "خدمات آن, بلکه به نحوه ی ارتباط با مشتریانش نیز وابسته است .",
  },
  {
    label: "ارتباط چیست؟",
    desc:
      " ارتباط یک ایزار قدرتمند و کامل برای مدیریت ارتباط با مشتریان است.\n" +
      "این نرم افزار به شما امکان میدهد تا تمامی اطلاعات و تعاملات با\n" +
      "مشتریان خود را به یک سامانه مرکزی و یک پارچه منتقل کنید و به راحتی\n" +
      "                    به آنها دسترسی داشته باشید.",
  },
  {
    label: "گزارش‌گیری",
    desc:
      " یکی از ویژگی‌های برنامه‌ی مدیریت ارتباط با مشتریان ارتباط، قابلیت\n" +
      "گزارش‌گیری از تیم‌های فروش شماست. با این قابلیت، شما می‌توانید به\n" +
      "راحتی عملکرد تیم‌های فروش را زیر نظر بگیرید، اطلاعات دقیقی از\n" +
      "فروش‌ها و عملکرد هر عضو تیم دریافت کنید و به تصمیم‌گیری‌های\n" +
      "استراتژیک برای بهبود کسب و کارتان دست پیدا کنید.",
  },
  {
    label: "فضای اختصاصی ذخیره برای هر مشتری؟",
    desc:
      "برنامه‌ی ما از قابلیت ذخیره‌سازی فایل پشتیبانی می‌کند. شما می‌توانید\n" +
      "تمامی فایل‌های مورد نیاز برای کسب و کار خود را در این نرم افزار\n" +
      "ذخیره کنید. این قابلیت به شما امکان می‌دهد تا به راحتی اطلاعات مهم،\n" +
      "اسناد، تصاویر و فایل‌های مرتبط با مشتریان را مدیریت کرده و به راحتی\n" +
      "در هرکجا به آن‌ها دسترسی داشته باشید.",
  },
  {
    label: "ارتباط در مرکز کسب و کار شما",
    desc:
      "برنامه مدیریت ارتباط با مشتریان ما یک سیستم کامل با ویژگی های بی\n" +
      "نظیر است. با این یرنامه، شما میتوانید تیم های کاری را بسازید و مدیریت\n" +
      "کنید. این قابلیت به شما امکان میدهد که تعداد نامحدودی اعضا به تیم های\n" +
      "خود اضافه کنید و همچنین سطوح دسترسی یرای هر کدام از اعضا را تعیین\n" +
      "          کنید.",
  },
  {
    label: "آیا نیاز به مشاوره دارید؟",
    desc:
      "ما همیشه در دسترسیم تا به شما کمک کنیم. اگر نیاز به مشاوره دارید\n" +
      "یا سوالی در مورد محصول و خدمات ما ما دارید، لطفا با تماس بگیرید یا فرم\n" +
      "زیر را پر کنید کنید و ما در اسرع وقت با شما تماس میگیریم. اعتماد شما\n" +
      "به ما بسیار ارزشمند است. ما به دلیل تعهدمان به ارانه خدمات عالی به\n" +
      "مشتریان، افتخار میکنیم و تا حد امکان به تمامه سوالات و نیازهای شما\n" +
      "          رسیدگی میکنیم.",
  },
];
const options = [
  {
    src: statisticsImg,
    desc: "گزارش گیری سریع و جامع",
  },
  {
    src: teamImg,
    desc: "امکان ایجاد تیم های فروش",
  },
  {
    src: skyscraperImg,
    desc: "مدیریت چند کسب و کار همزمان",
  },
  {
    src: fileImg,
    desc: "پشتیبانی از ذخیره فایل",
  },
  {
    src: badgeImg,
    desc: "کارت ویزیت الکترونیک",
  },
  {
    src: phoneImg,
    desc: "ارسال پیامک خودکار",
  },
];
export default function MainPage() {
  return (
    <>
      {/*mobile responsive ...  /////////////////////////////////////////////////////////*/}

      <div className={"block md:hidden"}>
        <div
          className={
            "flex justify-center items-center flex-col w-full h-screen"
          }
        >
          <Image src={say_hello} alt={""} className={"w-[48%]"} />
          <div
            style={{ fontWeight: 400 }}
            className={"text-xs mt-6 lg:text-sm"}
          >
            مشتریان را بهتر بشناسید، بهتر خدمت کنید
          </div>
          <div
            style={{ fontWeight: 600 }}
            className={"mt-5 text-xs lg:text-sm"}
          >
            بهترین تصمیمات را بگیری، داده + ارتباط = موفقیت !
          </div>
          <Link href={"/login"}>
            <Button className={"bg-secondary my-6"}>دریافت نسخه رایگان</Button>
          </Link>
          <Link href={"/education"}>
            <div className={"text-[12px] text-primary mb-16"}>
              crm چیست ؟ چه طور میتونه فروش من را چند برابر کند ؟
            </div>
          </Link>
        </div>
        <div>
          <Description
            label={descriptions[0].label}
            desc={descriptions[0].desc}
          />
          <Description
            label={descriptions[1].label}
            desc={descriptions[1].desc}
          />
        </div>

        {/*latest blogs ////////////////////*/}

        <BlogSlider />
        <div
          className={
            "text-center w-full mx-auto h-fit flex justify-between items-center flex-col my-20"
          }
        >
          <h1 className={"text-lg"} style={{ fontWeight: 500 }}>
            ویژگی های ارتباط
          </h1>
          <div className={"mt-12 grid grid-cols-2 w-full"}>
            {options.map((item, index) => (
              <Options key={index} src={item.src} desc={item.desc} />
            ))}
          </div>
        </div>
        <Description2
          label={descriptions[2].label}
          desc={descriptions[2].desc}
        />

        {/*customer comments ////////////////////*/}
        <CommentSlider />

        <div className={"mt-20"}>
          <Description2
            label={descriptions[5].label}
            desc={descriptions[5].desc}
          />
          <div className={"flex justify-center mb-10"}>
            <Counseling />
          </div>
        </div>
      </div>

      {/*desktop responsive ...  /////////////////////////////////////////////////////////*/}

      <div className={"hidden md:block"}>
        <div
          className={"flex justify-center items-center w-[80%] mx-auto my-20"}
        >
          <div className={"w-[50%] text-center leading-10"}>
            <div style={{ fontSize: 20, fontWeight: 400 }} className={"mb-6"}>
              مشتریان را بهتر بشناسید، بهتر خدمت کنید
            </div>
            <div style={{ fontSize: 24, fontWeight: 600 }} className={"my-6"}>
              بهترین تصمیمات را بگیری، داده + ارتباط = موفقیت !
            </div>
            <Link href={"/login"}>
              <Button className={"bg-secondary my-10"}>
                دریافت نسخه رایگان !
              </Button>
            </Link>
            <Link href={"/education"}>
              <div className={"text-xs hover:text-primary"}>
                crm چیست ؟ چه طور میتونه فروش من را چند برابر کند ؟
              </div>
            </Link>
          </div>
          <div className={"w-[50%] flex justify-center items-center"}>
            <Image
              src={say_hello}
              alt={""}
              className={"w-[500px] lg:w-[400px] my-0 mx-10"}
            />
          </div>
        </div>
        <div className={"lg:flex items-start justify-start mr-3"}>
          <Description
            label={descriptions[0].label}
            desc={descriptions[0].desc}
          />
          <Description
            label={descriptions[1].label}
            desc={descriptions[1].desc}
          />
        </div>

        {/*latest blogs ////////////////////*/}

        <BlogSlider />

        <div
          className={
            "text-center w-full mx-auto h-fit flex justify-between items-center flex-col my-24"
          }
        >
          <div className={"text-lg"} style={{ fontWeight: 500 }}>
            ویژگی های ارتباط
          </div>
          <div className={"mt-12 grid sm:grid-cols-3 lg:grid-cols-6"}>
            {options.map((item, index) => (
              <Options key={index} src={item.src} desc={item.desc} />
            ))}
          </div>
        </div>

        <div className={"flex flex-col items-center justify-center"}>
          <div className={"hidden lg:flex items-start justify-between"}>
            <Description2
              label={descriptions[2].label}
              desc={descriptions[2].desc}
            />
            <Description2
              label={descriptions[3].label}
              desc={descriptions[3].desc}
            />
          </div>

          {/*customer comments ////////////////////*/}
          <CommentSlider />
          <div className={"block md:flex items-center justify-between my-16"}>
            <div className={"w-[60%]"}>
              <Description2
                label={descriptions[5].label}
                desc={descriptions[5].desc}
              />
            </div>
            <div className={" w-[30%] lg:ml-16"}>
              <Counseling />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
