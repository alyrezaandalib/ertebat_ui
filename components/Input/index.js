import { ErrorMessage, Field } from "formik";
import * as React from "react";

export default function Input({ name, placeholder, type = "text" , onInput , as  }) {
  return (
    <div className={"flex flex-col justify-center"}>
      <Field
        placeholder={placeholder}
        as={as}
        className={`input text-sm lg:text-sm rounded-lg my-1 w-full min-h-[58px]`}
        style={{ border: "1px solid #999"}}
        type={!as && type}
        id={name}
        name={name}
        onInput={onInput}
      />
      <ErrorMessage
        name={name}
        component={"div"}
        className={"text-error text-[12px] lg:text-[12px] mb-1 mr-0.5"}
      />
      {/* Toast message for errors */}
    </div>
  );
}
