import TeamWork from '../../public/team_work.svg'
import Image from "next/image";

export default function Main4() {
    return (
        <section className={"pl-12 pr-12 pt-12 pb-12 flex flex-row items-center justify-center w-full bg-base-content/5"}>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <Image src={TeamWork} alt={'مدیریت تیم فروش'}/>
                </span>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <h2 className={"card-title"}>
                        مدیریت همزمان چند تیم فروش و بررسی نحوه عملکرد آنها
                    </h2>
                    <article className={"mt-10 mb-20"} style={{lineHeight: 2}}>
                        روی چیزی که بیشتر اهمیت دارد تمرکز کنید، کسب و کارتان! ارتباط بقیه را مدیریت می کند.<br/>با CRM ارتباط به اطلاعات مشتریان و تیم های فروش خود در هر نقطه ای از جهان دسترسی داشته باشید.<br/>همین حالا برای دریافت نسخه آزمایشی رایگان ما ثبت نام کنید.
                    </article>
                </span>
            </div>
        </section>
    )
}