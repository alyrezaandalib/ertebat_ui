import { RiCheckLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const check = <RiCheckLine className={"text-green-500 text-sm lg:text-lg mx-auto"} />;
const notCheck = <IoClose className={"text-red-500 text-sm lg:text-lg mx-auto"} />;

export const plan_Items = [
    {
        name: "فضای ذخیره سازی",
        basic: check,
        pro: check,
        enterprise: check,
    },
    {
        name: "ایجاد تیم",
        basic: notCheck,
        pro: check,
        enterprise: notCheck,
    },
    {
        name: "گزارش گیری از تیم",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "تعداد مشتریان",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "تعداد سازمان ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "اتوماسیون رویداد ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "ارسال پیامک گروهی",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "کارت ویزیت الکترونیکی",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "یاداور جلسات و رویداد ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "مدیریت وظایف",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "امکان تعیین دسترسی برای تیم ها و همکاران",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "ارسال پیامک تخصیص وظیفه",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "خروجی API",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "اتصال به VoIP",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "ذخیره تاریخچه مکالمات(درصورت فعال بودن VoIP)",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "تایم لاین اختصاصی هر مشتری",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "اطلاع رسانی فعالیت ها به مدیریت",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "ارسال پیامک و ایمیل به مدیریت",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "فشرده سازی فایل ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "پشیبان گیری فایل ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "خروجی pdf, اکسل گزارش ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "پنل مدیریت فایل ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "جستجوی پیشرفته فایل ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "امکان محدود کردن دسترسی به فایل ها",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "امکان تعیین سطح دسترسی سفارشی",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
    {
        name: "مخفی کردن شماره مشتریان هنگام تماس (درصورت فعال بودن VoIP)",
        basic: notCheck,
        pro: check,
        enterprise: check,
    },
];