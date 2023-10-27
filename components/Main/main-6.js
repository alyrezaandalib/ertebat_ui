import TaskManagement from '../../public/task_manager.svg'
import Image from "next/image";
import Charts from "../..//public/charts.svg";

export default function Main6() {
    return (
        <section className={"pl-12 pr-12 pt-12 pb-12 flex flex-row items-center justify-center w-full bg-base-content/5"}>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <Image src={Charts} alt={'مدیریت تیم فروش'}/>
                    <h2 className={"card-title"}>
                         گزارش دهی دقیق از فروش و پیشرفت آن
                    </h2>
                    <article className={"mt-10"} style={{lineHeight: 2}}>
                        روی چیزی که بیشتر اهمیت دارد تمرکز کنید، کسب و کارتان! ارتباط بقیه را مدیریت می کند.<br/>با CRM ارتباط به اطلاعات مشتریان و تیم های فروش خود در هر نقطه ای از جهان دسترسی داشته باشید.<br/>همین حالا برای دریافت نسخه آزمایشی رایگان ما ثبت نام کنید.
                    </article>
                    <div className={"flex flex-row items-center justify-center"}>
                    </div>
                </span>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <Image src={TaskManagement} alt={'مدیریت آسان وظایف و مسئولیت ها'}/>
                    <h2 className={"card-title"}>
                        مدیریت کار و تخصیص وظایف
                    </h2>
                    <article className={"mt-10"} style={{lineHeight: 2}}>
                        روی چیزی که بیشتر اهمیت دارد تمرکز کنید، کسب و کارتان! ارتباط بقیه را مدیریت می کند.<br/>با CRM ارتباط به اطلاعات مشتریان و تیم های فروش خود در هر نقطه ای از جهان دسترسی داشته باشید.<br/>همین حالا برای دریافت نسخه آزمایشی رایگان ما ثبت نام کنید.
                    </article>
                    <div className={"flex flex-row items-center justify-center"}>
                    </div>
                </span>
            </div>

        </section>
    )
}