"use client";
import * as React from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import Image from "next/image";
import ErtebatLogo from "@/public/Ertebat logo final 1.svg";
import infoCompletionForm from "@/serivices/client/infoCompletionForm";
import Button from "@mui/material/Button";
import {MenuItem, Select, TextField} from "@mui/material";
import {iranProvinces} from "@/sources/iran_provinces";
import {iranCities} from "@/sources/iran_cities";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {MobileDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFnsJalali} from '@mui/x-date-pickers/AdapterDateFnsJalali';
import {faIR} from '@mui/x-date-pickers/locales';
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";


const completeProfileValidationSchema = Yup.object({
    firstName: Yup.string().required("نام خود را وارد کنید"),
    lastName: Yup.string().required("نام خانوادگی خود را وارد کنید"),
    gender: Yup.string().required("لطفا اینجا را خالی نگذارید"),
    state: Yup.string().required("استان را انتخاب کنید"),
    town: Yup.string().required("شهر را انتخاب کنید"),
}).required();

export default function GetUserInformation() {
    const router = useRouter();

    // set town and cities
    const [provinceId, setProvinceId] = useState(0)
    const [cities , setCities] = useState([])
    useEffect(() => {
        const selectedCities = iranCities.filter(item => item.province_id === provinceId )
        setCities(selectedCities)
    }, [provinceId]);

    const [birthday, setBirthday] = useState(null)
    const formik = useFormik({
        validationSchema: completeProfileValidationSchema,
        initialValues: {
            firstName: "",
            birthday: null,
            lastName: "",
            gender: "",
            state: "",
            town: ""
        },
        onSubmit: (values) => {
            // values['birthday'] = birthday.toISOString()
            // const res = infoCompletionForm(values);
            // res.then((res) => {
            //     if (res.status === 200) {
            //         router.push("https://dash.ertebat.app");
            //     } else if (res.status === 400) {
            //         toast.error("سن شما نباید کمتر از ۱۵ سال باشد");
            //     }
            // })
            // res.then((res) => toast.success).catch((res) => toast.error(res.message));
        }
    })


    return (
        <div
            className={
                "border border-Tertiary rounded-lg p-5 py-7 lg:p-10 lg:py-14 shadow-text-Tertiary w-[340px] lg:w-[400px] bg-white"
            }
            style={{boxShadow: "0 2px 10px 0 #e0e0e0"}}
        >
            <div className={"w-full flex justify-center"}>
                <Image
                    src={ErtebatLogo}
                    alt={"radin Cloud logo"}
                    className={"w-[60%] lg:w-[70%] py-3"}
                />
            </div>
            <h1 className={"my-5 lg:my-2 text-center text-xs leading-5"}>
                جهت ادامه کار لطفا فرم زیر را به صورت کامل تکمیل کنید
            </h1>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor={'firstName'} className={'text-xs'}>
                    نام:
                </label>
                <TextField
                    fullWidth
                    id='firstName'
                    name='firstName'
                    margin={"dense"}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    FormHelperTextProps={{
                        sx: {textAlign: 'right', marginTop: 1, marginBottom: 2, marginRight: 0, fontSize: '13px'}
                    }}
                    key={0}
                    type={'text'}
                    size="small"
                />

                <label htmlFor={'lastName'} className={'text-xs'}>
                    نام خانوادگی:
                </label>
                <TextField
                    fullWidth
                    id='lastName'
                    name='lastName'
                    margin={"dense"}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    FormHelperTextProps={{
                        sx: {textAlign: 'right', marginTop: 1, marginBottom: 2, marginRight: 0, fontSize: '13px'}
                    }}
                    key={1}
                    type={'text'}
                    size="small"
                />
                <div className={'w-full flex justify-between items-center'}>
                    <div className={'flex flex-col'} style={{flex: 20}}>
                        <label htmlFor={'gender'} className={'text-xs mb-3'}>
                            جنسیت:
                        </label>
                        <Select
                            fullWidth
                            id='gender'
                            name='gender'
                            margin={"dense"}
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.gender && Boolean(formik.errors.gender)}
                            key={1}
                            type={'text'}
                            size="small"
                            sx={{marginLeft: 1}}
                        >
                            <MenuItem value={'male'}>آقا</MenuItem>
                            <MenuItem value={'female'}>خانم</MenuItem>
                        </Select>
                    </div>


                    <div className={'flex'} style={{flex: 3}}></div>


                    <div className={'flex flex-col'} style={{flex: 26}}>
                        <label htmlFor={'date-picker'} className={'text-xs mt-1 mb-1'}>
                            تاریخ تولد:
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}
                                              localeText={faIR.components.MuiLocalizationProvider.defaultProps.localeText}>
                            <MobileDatePicker
                                id='date-picker'
                                disableFuture
                                defaultValue={null}
                                value={birthday}
                                onChange={setBirthday}
                                slotProps={{
                                    textField: {
                                        size: "small",
                                        margin: "dense"
                                    },
                                }}
                            />
                        </LocalizationProvider>
                    </div>
                </div>

                <div className={'flex flex-col'}>
                    <label htmlFor={'state'} className={'text-xs mb-3 mt-1'}>
                        استان:
                    </label>
                    <Select
                        fullWidth
                        id='state'
                        name='state'
                        margin={"dense"}
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        key={1}
                        type={'text'}
                        size="small"
                        sx={{marginLeft: 1}}
                    >
                        {iranProvinces.map((item, index) => {
                            return (<MenuItem key={index} value={item.name}
                                              onClick={() => setProvinceId(item.id)}>{item.name}</MenuItem>)
                        })}
                    </Select>
                </div>

                <div className={'flex flex-col'}>
                    <label htmlFor={'town'} className={'text-xs mb-3 mt-2'}>
                        شهر:
                    </label>
                    <Select
                        fullWidth
                        id='town'
                        name='town'
                        margin={"dense"}
                        value={formik.values.town}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.town && Boolean(formik.errors.town)}
                        key={1}
                        type={'text'}
                        size="small"
                        sx={{marginLeft: 1}}
                    >
                        {cities.map((item, index) => {
                            return (<MenuItem key={index} value={item.name}>{item.name}</MenuItem>)
                        })}
                    </Select>
                </div>

                <Button fullWidth type={"submit"} variant="contained" size="large"
                        style={{backgroundColor: '#8183BF', marginTop: 38}}>
                    ورود به حساب کاربری
                </Button>
            </form>
        </div>
    );
}
