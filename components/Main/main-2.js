import Image from 'next/image'
import FileManager from "../../public/filemanager_for_customer.svg"
import PowerfulDesign from "../../public/design_powerful.svg"

export default function Main2() {
    return (
        <section id={'page2'}
            className={"pl-12 pr-12 pt-12 pb-12 flex flex-row items-center justify-center w-full bg-base-content/5"}>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <Image src={FileManager} alt={'نگهداری اطلاعات و فایل مشتریان'}/>
                    <h2 className={"card-title"}>
                        فضای ذخیره سازی ابری اختصاصی برای هر مشتری
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
                    <Image src={PowerfulDesign} alt={'طراحی قدرتمند در عین حال ساده و روان'}/>
                    <h2 className={"card-title"}>
                        رابط کاربری ساده ولی قدرتمند
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