import "react-multi-date-picker/styles/layouts/mobile.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from "react";

export default function JalaliDatePicker({ birthday, setBirthday }) {
  const handleChang = (e) => {
    const { year, month, day } = e;
    const date = new Date(year, month.number, day);
    console.log(date);
    // console.log(birthday);
  };

  return (
    <DatePicker
      required
      placeholder={"تولد **/**/13"}
      style={{
        width: "140px",
        height: "58px",
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
        border: "1px solid #999",
        color: "#777",
        fontSize: "18px",
        textAlign: "center",
      }}
      monthYearSeparator="|"
      minDate={"1300"}
      maxDate={"1384"}
      calendar={persian}
      locale={persian_fa}
      className="rmdp-mobile"
      value={birthday}
      onChange={handleChang}
    />
  );
}
