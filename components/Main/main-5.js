import TaskManagement from '../../public/task_manager.svg'
import Image from "next/image";
import Charts from "../..//public/charts.svg";

export default function Main6() {
    return (
        <section className={"pl-12 pr-12 pt-32 pb-32 flex flex-row items-start justify-center w-full"}
                 style={{lineHeight: 2.2}}>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <h2 className={"card-title mb-6"}>
                        (Customer Relationship Management) CRM یا سیستم مدیریت ارتباط مشتریان چیست؟
                    </h2>

                <p>
                    سیستم مدیریت ارتباط مشتریان یک نرم افزار یا فن آوری است که کسب و کار ها را قادر می سازد تا با فروش و مشتری بیش تر متمرکز شوند. سرنخ ها (مشتریان احتمالی) را به مشتریان دائمی خود تبدیل کنند و مشتریان فعلی را حفظ نمایند.
                    در واقع هدف اصلی CRM حفظ ارتباط با مشتریان، افزایش وفاداری مشتریان و بالا بردن سود کسب و کار است.
                    سامانه CRM ارتباط مشتریان به شرکت ها این اجازه را می دهد تا روند کاری مرتبط با مشتری را خودکار کرده و از راحتی و کارآمدی این روند مطمئن شوند. نرم افزار CRM ارتباط مشتریان به راحتی قادر به ذخیره اطلاعات مشتریان بوده و آن ها را مدیریت و پردازش می کند و راهکار های چشم اندازی روشن و دقیق از کسب و کارتان به شما ارايه می‌دهد.
                </p>
                </span>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col border-r-2"}>
                <span className={"flex flex-1 w-5/6 flex-col"}>
                    <h2 className={"card-title mb-6"}>
                        چه کسانی از CRM استفاده می‌کنند؟
                    </h2>

                <p>
                    هر کسب و‌کاری که قصد بهبود عملکرد خود و یا مدیریت عملکرد فعلی خود را داشته باشد می تواند از این نرم
                    افزار استفاده نماید.
                    شرکت های تجاری مطرح دنیا از CRM برای هماهنگ سازی روند جذب مشتری و نظارت بر عملکرد مدیران فروش خود
                    استفاده می کنند. با نرم افزار ابری مدیریت مشتریان ارتباط می توانید به راحتی تیم های فروش خود را
                    مدیریت کرده و فروش، بازاریابی، انجام خدمات مشتریان را بهبود بخشیده و کسب و کارتان را توسعه دهید.
                </p>
                </span>
            </div>
        </section>
    )
}