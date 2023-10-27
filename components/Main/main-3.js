import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
export default function Main3() {
    return (
        <section className={"pl-12 pr-12 pt-12 pb-12 flex flex-row items-center justify-center w-full"}>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <SmsTwoToneIcon sx={{width:40,height:40,marginBottom:1}}/>
                <h4 style={{textAlign:"center"}}>ارسال پیامک و<br/>ایمیل گروهی</h4>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <BadgeTwoToneIcon sx={{width:40,height:40,marginBottom:1}}/>
                <h4 style={{textAlign:"center"}}>ساخت کارت ویزیت<br/>الکترونیکی</h4>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <NotificationsActiveTwoToneIcon sx={{width:40,height:40,marginBottom:1}}/>
                <h4 style={{textAlign:"center"}}>امکان ایجاد یادآور</h4>
            </div>
            <div className={"flex flex-1 justify-center items-center flex-col"}>
                <SupportTwoToneIcon sx={{width:40,height:40,marginBottom:1}}/>
                <h4 style={{textAlign:"center"}}>پشتیبانی ۲۴ ساعته<br/>و پاسخگو</h4>
            </div>
        </section>
    )
}