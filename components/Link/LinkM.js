import Link from "next/link";

export default function NavLinkM({ icon, label, href, active }) {
  if (active)
    return (
      <Link href={href} className={"flex"}>
        <div className={"flex items-center my-2 text-secondary font-bold w-full"}>
          <span></span>
          <div className={"ml-3 text-xl mr-3"}>{icon}</div>
          <div>{label}</div>
        </div>
      </Link>
    );
  return (
    <Link href={href}>
      <div className={"flex items-center my-2 w-full"}>
        <div className={"ml-3 text-xl mr-3"}>{icon}</div>
        <div className={"text-lg"}>{label}</div>
      </div>
    </Link>
  );
}
