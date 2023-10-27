"use client";
import img from "@/public/Creative writing-cuate.svg";
import Image from "next/image";
import React from "react";

const blogs = [
//   {
//     id: 1,
//     title: "نقش CRM در تحولات نوین تجارت: راهنمایی برای کسب‌وکارها",
//     desc: "این مقاله به بررسی نحوه استفاده از سیستم مدیریت ارتباط با مشتری (CRM) در تطابق با تغییرات نوین تجارت و مشتری‌پذیری می‌پردازد.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 2,
//     title:
//       "استفاده از CRM برای افزایش وفاداری مشتریان: راهکارها و مطالب آموزشی",
//     desc: "این مقاله به توصیه‌ها و راهکارهایی می‌پردازد که شرکت‌ها می‌توانند از طریق سیستم CRM به افزایش وفاداری مشتریان خود دست یابند.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 3,
//     title: "چگونه CRM به بهبود تعاملات مشتریان در شبکه‌های اجتماعی کمک می‌کند",
//     desc: "این مقاله نشان می‌دهد که چگونه استفاده از CRM در مدیریت تعاملات مشتریان در شبکه‌های اجتماعی می‌تواند به توسعه کسب‌وکار کمک کند.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 4,
//     title: "امنیت داده و CRM: چگونه اطلاعات مشتریان را محافظت کنیم",
//     desc: "این مقاله به اصول و تکنیک‌های امنیت داده در سیستم‌های CRM می‌پردازد و نشان می‌دهد که چگونه می‌توان اطلاعات مشتریان را محافظت کرد.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 5,
//     title:
//       "تجزیه و تحلیل داده‌های CRM برای بهبود فرآیندهای تصمیم‌گیری کسب‌وکار",
//     desc: "این مقاله به روش‌ها و ابزاری می‌پردازد که با استفاده از داده‌های CRM، می‌توان به بهبود فرآیندهای تصمیم‌گیری در سازمان‌ها کمک کرد.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 6,
//     title: "CRM و تجربه مشتری: کلید موفقیت در دنیای رقابتی امروزی",
//     desc: "این مقاله به اهمیت تجربه مشتری در جلب و نگه‌داشتن مشتریان می‌پردازد و نشان می‌دهد که چگونه CRM می‌تواند در بهبود تجربه مشتریان موثر باشد.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 7,
//     title: "نقش CRM در توسعه بازاریابی تعاملی: ارتباطات تعاملی با مشتریان",
//     desc: "این مقاله به نقش CRM در توسعه استراتژی بازاریابی تعاملی و ارتباطات فعال با مشتریان می‌پردازد.",
//     img: img,
//     time: "1402/5/23",
//   },
//   {
//     id: 8,
//     title: "مقایسه CRM‌های معروف: انتخاب بهترین سیستم مدیریت ارتباط با مشتری",
//     desc: "این مقاله به مقایسه و بررسی انواع مختلف سیستم‌های CRM معروف و راهنمای انتخاب بهترین CRM برای نیازهای کسب‌وکار می‌پردازد.",
//     img: img,
//     time: "1402/5/23",
//   },
];

export default function Blog() {
  return (
    <div
      className={
        "w-[90%] mr-5 sm:mx-auto inline-block sm:w-[95%] sm:flex justify-between items-center flex-wrap"
      }
    >
      {blogs.map((item, index) => (
        <div
          key={index}
          className={
            "w-full sm:w-[350px] h-[350px] lg:min-h-[400spx] rounded-xl shadow-lg my-10  overflow-y-hidden relative bg-white flex justify-center items-center flex-col duration-300 transition-all cursor-pointer hover:z-10 hover:shadow-2xl"
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
            className={"text-[13px] text-neutral/50 absolute bottom-3 left-3"}
          >
            {item.time}
          </div>
        </div>
      ))}
    </div>
  );
}
