export default function Description2({ label, desc }) {
  return (
    <div className={"mb-16 mt-7"}>
      <div className={"w-[75%] sm:w-[80%] mx-auto text-center"}>
        <h1 style={{ fontSize: 19, fontWeight: 500 }}>{label}</h1>
        <p className={"mt-5 text-[15px] md:text-sm md:leading-9 text-neutral/80 leading-7"}>{desc}</p>
      </div>
    </div>
  );
}
