export default function Description({ label, desc }) {
  return (
    <div className={"w-[70%] mx-auto my-12 lg:w-[37%]"}>
      <div className={"flex items-center relative"}>
        <div
          className={
            "w-4 h-4 bg-secondary rounded-2xl absolute right-[-35px]"
          }
        ></div>
        <h1 style={{ fontSize: 19, fontWeight: 500 }}>{label}</h1>
      </div>
      <p
        className={
          "mt-3 text-[15px] md:text-sm md:leading-9 text-neutral/80 leading-8"
        }
      >
        {desc}
      </p>
    </div>
  );
}
