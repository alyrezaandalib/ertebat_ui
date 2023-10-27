import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Package = ({ details, Month }) => {
  const { img, title, items, price } = details;
  const [open, setOpen] = useState(false);
  let SubscriptionTime = "";
  {
    Month === "0"
      ? (SubscriptionTime = 1)
      : Month === "1"
      ? (SubscriptionTime = 3)
      : (SubscriptionTime = 6);
  }
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" place-items-center shadow-lg rounded-2xl">
      <div className="stats stats-vertical shadow plan-cards w-[300px] sm:w-[320px] lg:w-[340px]">
        <div className="stat">
          <div className="flex flex-col justify-center items-center">
            <div
              className="flex flex-col justify-center items-center"
              style={{ fontWeight: 500 }}
            >
              <Image src={img} alt={`پلن ${title} ارتباط`} width={120} />
              <h2>{title}</h2>
            </div>
          </div>
        </div>
        <div className="stat text-xs leading-6 text-center">
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="stat flex justify-center flex-col items-center">
          <h2 style={{ fontWeight: 800, fontSize: 28 }}>{price[Month]}</h2>
          <h2 className="mb-5" style={{ fontWeight: 400 }}>
            هزار تومان
          </h2>
          <Button
            onClick={handleOpen}
            className="btn text-white bg-primary hover:bg-secondary w-full"
          >
            خرید اشتراک
          </Button>
          <Dialog
            size={"sm"}
            open={open}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader className={"text-lg mt-1"}>
              تایید و تکمیل سفارش:
            </DialogHeader>
            <DialogBody divider>
              <div className={"leading-8 text-neutral/80"}>
                <div>پلن : {title}</div>
                <div>مدت اشتراک : {SubscriptionTime} ماهه</div>
                <div>مبلغ قابل پرداخت : {price[Month]} هزار تومان</div>
                <div>تخفیف : {"___"}</div>
                <div>مبلغ کل : {price[Month]} هزار تومان</div>
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="ml-2"
              >
                <span>لغو</span>
              </Button>
              <Button
                variant="gradient"
                className={"bg-primary"}
                onClick={handleOpen}
              >
                <span>ادامه فرایند خرید</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Package;
