"use client";
import * as React from "react";
import * as Yup from "yup";
import Image from "next/image";
import ErtebatLogo from "../../../public/Ertebat logo final 1.svg";
import {useFormik} from "formik";
import {checkPhoneNumber} from "@/serivices/client/check-phoneNumber";
import {toast} from "react-toastify";
import Link from "next/link";
import Button from "@mui/material/Button";
import {Typography} from "@material-tailwind/react";
import {TextField} from "@mui/material";
import {useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';


const phoneNumberSchema = Yup.object({
    phoneNumber: Yup.string()
        .matches(/^0\d{10}$/, "شماره موبایل نادرست است")
        .required("لطفا شماره موبایل خود را وارد کنید"),
}).required();


export default function GetPhoneNumber({setUserState, userState}) {
    const [loginButton, setLoginButton] = useState({
        button: "ورود به حساب کاربری"
    });

    const formik = useFormik({
        validationSchema: phoneNumberSchema,
        initialValues: {
            phoneNumber: ""
        },
        onSubmit: (value) => {
            loginButton.button =
                <span className={'flex justify-center items-center'}><CircularProgress color="inherit" size={26}
                                                                                       className={'mx-3'}/>ورود به حساب کاربری</span>
            setLoginButton({...loginButton})
            const formattedPhoneNumber = "98" + value.phoneNumber.slice(1);
            const res = checkPhoneNumber(formattedPhoneNumber);
            res
                .then((res) => {
                    if (res.status === 200) {
                        const response = res.data
                        // console.log(response)
                        toast.success("کد با موفقیت ارسال شد");
                        setUserState({
                            phoneNumber: formattedPhoneNumber,
                            statusCode: res.status,
                            hasAccount: response.has_account,
                            remainingTime: response.left_time,
                            sessionToken: response.session_token,
                        });
                    }
                    if (res.status === 400) {
                        toast.error('کد تایید قبلا ارسال شده است');
                    }
                })
                .catch((res) => {
                    toast.error('اتصال اینترنت را بررسی کنید');
                });
        }
    })

    const HandlePhoneNumberChanges = (values) => {
        values.target.value = values.target.value.replace(/\D/g, '')
        formik.handleChange(values)

    }


    return (
        <div
            className={
                "border border-Tertiary rounded-lg p-10 py-14 shadow-text-Tertiary w-[340px] md:w-[400px] bg-white"
            }
            style={{boxShadow: "0 2px 10px 0 #e0e0e0"}}
        >
            <div className={"w-full flex justify-center"}>
                <Link href={"/"} className={"w-[60%] lg:w-[80%] py-3"}>
                    <Image
                        src={ErtebatLogo}
                        alt={"radin Cloud logo"}
                        className={"w-full h-auto"}
                    />
                </Link>
            </div>
            <div>
                <h1 className={"font-bold mt-5"}>ورود | ثبت‌نام</h1>
                <p className={"text-xs text-Tertiary mt-3"}>سلام!</p>
                <p className={"text-Tertiary text-xs mt-1"}>
                    لطفا شماره موبایل خود را وارد کنید
                </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    dir={'ltr'}
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    margin={"normal"}
                    value={formik.values.phoneNumber}
                    onChange={HandlePhoneNumberChanges}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    FormHelperTextProps={{
                        sx: {textAlign: 'right', marginTop: 1, marginRight: 0 , fontSize:'13px'}
                    }}
                    key={123123}
                    type={'text'}
                    size="small"
                />
                <Button fullWidth type={"submit"} variant="contained" size="large"
                        style={{backgroundColor: '#8183BF', marginTop: 18, marginBottom: 16}}>
                    {loginButton.button}
                </Button>
                <Typography style={{fontSize: '.70rem', fontWeight: 300, textAlign: 'center'}}>ورود شما
                    به معنای پذیرش <Link href={''} style={{color: '#5659A9'}}>شرایط
                        وقوانین ارتباط</Link> است</Typography>
            </form>
        </div>
    );
}
