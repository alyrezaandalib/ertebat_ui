import Link from "next/link";
import styles from "./nav-style.module.css"

export default function NavLink({active, href, label}) {
    if (active) return (<Link className={`text-neutral/70 hover:text-neutral ${styles.class}`} href={href}>
        {label}
    </Link>);
    return (<Link className={`text-neutral/70 hover:text-neutral ${styles.class}`} href={href}>
        {label}
    </Link>);
}
