"use client";
import { Button, Input, Textarea } from "@material-tailwind/react";
import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

const loginValidationSchema = Yup.object({
  name: Yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  phone_number: Yup.string()
    .required("لطفا شماره همراه خود را وارد کنید")
    .matches(/^0\d{10}$/, "لطفا یک شماره معتبر وارد کنید"),
  message: Yup.string().required("لطفا پیشنهادات خود را وارد کنید"),
}).required();

export default function ContactForm() {
  const loginInitialValues = {
    phone_number: "", // First value
    name: "",
    message: "",
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target;
    // Remove non-numeric characters from the input
    input.value = input.value.replace(/\D/g, "");
  };

  const loginHandleSubmit = (value) => {
    // console.log(value);
    const formatted_phone_number = "98" + value.phone_number.slice(1);
    const res = "";
    res.then().catch();
  };

  return (
    <div
      className={"rounded-lg p-8 w-[330px] md:w-[450px] h-fit bg-accent/30"}
    >
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={loginHandleSubmit}
      >
        <Form>
          <div className={"flex flex-col justify-center"}>
            <Field
              placeholder={"نام و نام خانوادگی"}
              className={"input rounded-lg my-3 w-full"}
              style={{ border: "1px solid #999" }}
              type={"text"}
              id={"name"}
              name={"name"}
            />
            <ErrorMessage
              name={"name"}
              component={"div"}
              className={"text-error text-xs mb-2 mr-0.5"}
            />
          </div>
          <div className={"flex flex-col justify-center"}>
            <Field
              placeholder={"شماره موبایل"}
              className={"input rounded-lg my-3 w-full"}
              style={{ border: "1px solid #999" }}
              type={"text"}
              id={"phone_number"}
              name={"phone_number"}
              onInput={handlePhoneNumberChange}
            />
            <ErrorMessage
              name={"phone_number"}
              component={"div"}
              className={"text-error text-xs mb-2 mr-0.5"}
            />
          </div>
          <div className={"flex flex-col justify-center"}>
            <Field
              as={"textarea"}
              placeholder={"نظرات و پیشنهادات شما ..."}
              className={"input rounded-lg my-3 w-full p-5"}
              style={{ border: "1px solid #999", minHeight: 150 }}
              id={"message"}
              name={"message"}
            />
            <ErrorMessage
              name={"message"}
              component={"div"}
              className={"text-error text-xs mb-2 mr-0.5"}
            />
          </div>
          <Button
            className={"bg-primary w-full mt-3"}
            size={"lg"}
            type={"submit"}
          >
            ارسال نظر
          </Button>{" "}
        </Form>
      </Formik>
    </div>
  );
}
