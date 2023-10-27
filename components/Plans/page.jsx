import React, { useState } from "react";
import Package from "./packageItem";
import ComparisonTable from "@/components/Plans/comparisonTable";
import MTabs from "@/components/Plans/m-tabs";
import BasicItem from "@/public/plans-01.svg";
import ProItem from "@/public/plans-02.svg";
import EnterpriseItem from "@/public/plans-03.svg";
import MComparisonTable from "@/components/Plans/m-comparisonTable";
import { plan_Items } from "@/json/planItems";

const planItems = plan_Items;

// for prices ...
const BasicItems = {
  img: BasicItem,
  title: "پایه",
  items: [
    "تعداد پیامک در ماه: ۱۲۰۰ عدد",
    " فضای ذخیره سازی اولیه: ۲ گیگابایت",
    "حداکثر تعداد مشتریان: ۱۵۰۰",
    "حداکثر تعداد سازمان‌ها: ۸۰۰",
    "حداکثر تعداد معاملات: نامحدود",
  ],
  price: ["270", "550", "780"],
};
const ProItems = {
  img: ProItem,
  title: "حرفه‌ای",
  items: [
    "قابلیت های پایه",
    "+ امکان تعریف تیم: ۴ عدد",
    "فضای ذخیره سازی اولیه: ۸ گیگ",
    "امکان ایجاد الگو اختصاصی پیامک ",
    "کارت ویزیت الکترونیکی",
  ],
  price: ["499", "699", "1290"],
};
const EnterItems = {
  img: EnterpriseItem,
  title: "سازمانی",
  items: [
    "تعداد تیم",
    "تعداد پیامک در ماه ",
    "فضای ذخیره افراد هر تیم",
    "امکان ایجاد الگو اختصاصی پیامک ",
    "کارت ویزیت الکترونیکی",
  ],
  price: ["599", "1150", "2170"],
};

// for tables ...
export default function BasePlan() {
  const [month, setMonth] = useState("0");

  return (
    <div className={"w-[90%] mx-auto mt-5"}>
      <MTabs setMonth={setMonth} />
      <div className="mt-5 lg:mt-0 block lg:flex items-center justify-center mb-10 w-full lg:w-[85%] mx-auto">
        <div className={"indicator mx-auto flex justify-center"}>
          <Package details={BasicItems} Month={month} />
        </div>
        <div className="indicator my-12 border-2 border-error rounded-2xl mx-auto flex justify-center lg:block lg:mx-6 relative">
          <span className="indicator-item badge px-2 py-3 bg-red-500 text-white absolute top-[-10px] right-[-10px] text-xs">
            پیشنهادی
          </span>
          <div>
            <Package details={ProItems} Month={month} />
          </div>
        </div>
        <div className={"mb-10 lg:mb-0 indicator mx-auto flex justify-center"}>
          <Package details={EnterItems} Month={month} />
        </div>
      </div>
      <div className={"block lg:hidden w-[100%] mx-auto mb-16"}>
        <MComparisonTable label={"ویژگی های پلن پایه"} planItems={planItems} img={BasicItem} id={1}/>
        <MComparisonTable label={"ویژگی های پلن حرفه ای"} planItems={planItems} img={ProItem} id={2}/>
        <MComparisonTable label={"ویژگی های پلن سازمانی"} planItems={planItems} img={EnterpriseItem} id={3}/>
      </div>
      <div className={"hidden lg:block w-[100%] mx-auto mb-16"}>
        <ComparisonTable />
      </div>
    </div>
  );
}
