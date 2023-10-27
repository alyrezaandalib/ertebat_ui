"use client";
import * as React from "react";
import * as Yup from "yup";
import Image from "next/image";
import ErtebatLogo from "../../../public/Ertebat logo final 1.svg";
import {Formik, Form, ErrorMessage} from "formik";
import {useState} from "react";
import OtpInput from "react-otp-input";
import {AiOutlineArrowRight} from "react-icons/ai";
import {sendOTP} from "@/serivices/server/send-otp";
import {toast} from "react-toastify";
import {checkPhoneNumber} from "@/serivices/client/check-phoneNumber";
import {useRouter} from "next/navigation";
import {setCookie} from "cookies-next";
import Timer from "@/components/login/Counter/Counter";
import Button from "@mui/material/Button";

const loginValidationSchema = Yup.object({
    SMS_password: Yup.string().length(5, "لطفا کد یکبار‌مصرف را وارد کنید"),
});

export default function GetOTP({setUserState, userState}) {
    const [isFormDirty, setIsFormDirty] = useState(false); // for dirty form
    const [resendSMS, setResendSMS] = useState();
    const [otp, setOtp] = useState({value: ""});
    const router = useRouter();
    const loginInitialValues = {
        SMS_password: "", // First value
    };

    const loginHandleSubmit = async () => {
        const OTP = Number(otp.value);

        const data = {
            sessionToken: userState.sessionToken,
            OTP: OTP,
        };

        const res = await sendOTP(data);
        const jsonify_res = await res.json()

        let expireTime = new Date();
        expireTime.setHours(expireTime.getHours() + 24);

        if (res.status === 200) {
            const token = "RadinCloud" + " " + jsonify_res.token;
            // setCookie("token", token, {domain: 'ertebat.app'});
            console.log(token)
            setIsFormDirty(false);
            router.push("https://dash.ertebat.app");
        } else if (res.status === 403) {
            const token = "RadinCloud" + " " + jsonify_res['token'];
            // console.log(token)
            // setCookie("token", token, {domain: 'ertebat.app'});
            setCookie("token", token);
            setIsFormDirty(false);
            router.push("/login/complete");
        } else {
            toast.error("کد یک بار مصرف اشتباه است");
        }
    };

    const handleInputChange = (event) => {
        if (event.key === "Backspace") {
            if (otp.value !== "") {
                otp.value = otp.value.substring(0, otp.value.length - 1);
                setOtp({...otp});
            }
        } else {
            otp.value = otp.value + event.target.value;
            setOtp({...otp});
        }
        if (otp.value.length === 5) {
            loginHandleSubmit().then(r => {
            });
        }
        setIsFormDirty(true);
    };

    // resend sms ..////////////////////////////////////

    const handleResendSMS = () => {
        setResendSMS(null);
        setOtp({value: ""});
        const PHONE_NUMBER = Number(userState.phoneNumber);
        const res = checkPhoneNumber(PHONE_NUMBER);
        res
            .then((res) => {
                if (res.status === 200) {
                    toast.success("کد با موفقیت ارسال شد");
                    setUserState({
                        phoneNumber: userState.phoneNumber,
                        statusCode: res.status,
                        hasAccount: res.data.has_account,
                        remainingTime: res.data.left_time,
                        sessionToken: res.data.session_token,
                    });
                }
            })
            .catch((res) => toast.error('اتصال اینترنت را بررسی کنید'));
    };

    // Add the onbeforeunload event listener to display the warning message
    if (isFormDirty) {
        window.onbeforeunload = () => {
            return " ";
        };
    } else {
        window.onbeforeunload = null; // Remove the event listener when the form is clean
    }

    return (
        <div
            className={
                "border border-Tertiary rounded-lg p-10 py-14 shadow-text-Tertiary w-[340px] lg:w-[400px] bg-white"
            }
            style={{boxShadow: "0 2px 10px 0 #e0e0e0"}}
        >
            <div className={"w-full flex items-center py-3 relative"}>
                <button
                    onClick={() => {
                        setUserState({phoneNumber: "", statusCode: ""});
                    }}
                >
                    <AiOutlineArrowRight
                        className={"font-bold text-xl cursor-pointer ml-3 absolute top-5"}
                    />
                </button>
                <Image
                    src={ErtebatLogo}
                    alt={"radin Cloud logo"}
                    className={"w-[60%] lg:w-[70%] text-center mx-auto"}
                />
            </div>
            <div>
                <h1 className={"font-bold mt-5"}>کد تایید را وارد کنید</h1>
                <p className={"text-Tertiary text-[13px] mt-3"}>
                    کد تایید برای شماره {userState.phoneNumber} پیامک شد
                </p>
            </div>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={loginHandleSubmit}
            >
                <Form
                    className={"flex flex-col items-center justify-center"}
                    style={{direction: "ltr"}}
                >
                    <OtpInput
                        value={otp.value}
                        id={"SMS_password"}
                        name={"SMS_password"}
                        onChange={() => {
                            handleInputChange(event);
                        }}
                        numInputs={5}
                        inputType={"tel"}
                        shouldAutoFocus={true}
                        renderInput={(props) => (
                            <input
                                {...props}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    margin: 8,
                                    marginTop: '30px',
                                    marginBottom: '30px'
                                }}
                                className="border border-[#999] my-5 rounded-md mx-1 focus:outline-primary p-2 text-center"
                            />
                        )}
                    />
                    <div className={"text-neutral text-[14px] mb-8"}>
                        {resendSMS === 0 ? (
                            <button
                                onClick={handleResendSMS}
                                className={"cursor-pointer text-secondary"}
                            >
                                دریافت مجدد کد تایید
                            </button>
                        ) : (
                            <div className={"text-right text-[13px] flex items-center"}>
                                <div>زمان باقیمانده تا ارسال مجدد کد</div>
                                <span className={"ml-1"}>
                  <Timer
                      delayResend={userState.remainingTime}
                      setResendSMS={setResendSMS}
                  />
                </span>
                            </div>
                        )}
                    </div>
                    <Button fullWidth type={"submit"} variant="contained" size="large"
                            style={{backgroundColor: '#8183BF'}}>
                        تایید
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}
