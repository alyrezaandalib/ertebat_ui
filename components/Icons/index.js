import { BiMessageSquareDetail } from "react-icons/bi";

export default function Icons({children}) {
  return (
    <div
      className={
        "w-12 h-12 flex items-center justify-center rounded-2xl ml-3 bg-accent/80 text-white shadow-primary shadow-2xl"
      }
    >{children}</div>
  );
}
