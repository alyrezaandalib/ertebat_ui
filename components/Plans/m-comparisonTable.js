import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function MComparisonTable({ label, img, planItems, id }) {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === id}
        icon={<Icon id={id} open={open} />}
        animate={CUSTOM_ANIMATION}
      >
        <AccordionHeader onClick={() => handleOpen(id)}>
          <div className={"flex items-center text-sm"}>
            <Image src={img} alt={""} width={35} />
            <div className={"mr-1"}>{label}</div>
          </div>
        </AccordionHeader>
        <AccordionBody>
          {planItems.map((item, index) => (
            <div
              key={index}
              className={
                "flex items-center justify-between px-6 text-[13px] leading-6 even:bg-blue-gray-100 rounded"
              }
            >
              <div>{item.name}</div>
              {id === 1 ? (
                <div>{item.basic}</div>
              ) : id === 2 ? (
                <div>{item.pro}</div>
              ) : (
                <div>{item.enterprise}</div>
              )}
            </div>
          ))}
        </AccordionBody>
      </Accordion>
    </>
  );
}
