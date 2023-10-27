import Image from "next/image";
export default function Options({src,desc}) {
  return (
    <div
      className={
        "scale duration-300 transition-all flex items-center w-[75] lg:w-[150px] text-center justify-center text-[14px] leading-5 my-8 mx-10 hover:bg-white hover:shadow-lg rounded-2xl px-6 py-1"
      }
    >
   <div className={"flex flex-col justify-center items-center "}>
       <Image src={src} alt={""}/>
       <span className={"mt-3 w-full"}>{desc}</span>
   </div>
    </div>
  );
}
