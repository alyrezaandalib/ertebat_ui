import Link from "next/link";
import PCErtebat from '../../public/ertebat_pc_intro.svg'
import Image from "next/image";

export default function Main1() {
    return (
        <section className={"pl-12 pr-12 flex flex-row items-center justify-center w-full page_hero"}>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <h1 className={"card-title"}>
                        سامانه ابری مدیریت مشتریان ارتباط
                    </h1>
                    <article className={"mt-10 mb-20"} style={{lineHeight: 2}}>
                        روی چیزی که بیشتر اهمیت دارد تمرکز کنید، کسب و کارتان! ارتباط بقیه را مدیریت می کند.<br/>با CRM ارتباط به اطلاعات مشتریان و تیم های فروش خود در هر نقطه ای از جهان دسترسی داشته باشید.<br/>همین حالا برای دریافت نسخه آزمایشی رایگان ما ثبت نام کنید.
                    </article>
                    <div className={"flex flex-row items-center justify-center"}>
                        <Link href={'login'}>
                            <button className="btn text-white"
                                    style={{backgroundColor: '#22b573'}}>ثبت نام در سایت</button>
                        </Link>
                        <p className={"mr-5"}
                           style={{fontSize: '.9rem', color: '#555'}}>نسخه آزمایشی (۱۴ روز رایگان)</p>
                    </div>
                </span>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <Image src={PCErtebat} alt={'CRM ارتباط روی وب'} height={600}/>
                </span>
            </div>
            <div className='icon-scroll'></div>
        </section>
    )
}