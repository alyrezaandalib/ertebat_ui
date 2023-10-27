"use client";
import * as React from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import Button from '@mui/material/Button';
import {checkAdminLogin} from "@/serivices/client/check-adminLogin";
import {InputAdornment, TextField} from "@mui/material";
import NumbersIcon from '@mui/icons-material/Numbers';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {Typography} from "@material-tailwind/react";
import {setCookie} from "cookies-next";


const loginValidationSchema = Yup.object({
    exCode: Yup.string()
        .required("لطفا کد اختصاصی خود را وارد کنید")
        .min(5, "کد وارد شده باید شامل 5 کاراکتر باشد"),
    usrName: Yup.string().required("لطفا نام کاربری خود را وارد کنید"),
    passwd: Yup.string().required("لطفا کلمه عبور خود را وارد کنید")
}).required();

export default function DashboardLogin() {


    const formik = useFormik({
        initialValues: {
            exCode: "",
            usrName: "",
            passwd: ""
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            const res = checkAdminLogin(values);
            res
                .then((res) => setCookie('token', res.data.token, {domain: 'ertebat.app'}))
                .catch();
        },
        handleChange: (value) => {
            value.target
        },
    });

    return (
        <div
            className={
                "border border-Tertiary rounded-lg p-7 lg:py-8 lg:px-10 shadow-text-Tertiary bg-white w-[320px] lg:w-[340px]"
            }
            style={{boxShadow: "0 2px 10px 0 #e0e0e0"}}
        >
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    dir={'ltr'}
                    fullWidth
                    id="exCode"
                    name="exCode"
                    margin={"dense"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.exCode && Boolean(formik.errors.exCode)}
                    helperText={formik.touched.exCode && formik.errors.exCode}
                    key={0}
                    type={'tel'}
                    size="small"
                    label={<Typography style={{fontSize: '.9rem', fontWeight: 400}}>کد اختصاصی</Typography>}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <NumbersIcon sx={{width: '18px', height: 'auto'}} className={'text-gray-500'}/>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    dir={'ltr'}
                    fullWidth
                    id="usrName"
                    name="usrName"
                    margin={"dense"}
                    value={formik.values.usrName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.usrName && Boolean(formik.errors.usrName)}
                    helperText={formik.touched.usrName && formik.errors.usrName}
                    key={1}
                    type={'text'}
                    size="small"
                    label={<Typography style={{fontSize: '.9rem', fontWeight: 400}}>نام کاربری</Typography>}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <PersonOutlineIcon sx={{width: '19px', height: 'auto'}} className={'text-gray-500'}/>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    dir={'ltr'}
                    fullWidth
                    id="passwd"
                    name="passwd"
                    margin={"dense"}
                    value={formik.values.passwd}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.passwd && Boolean(formik.errors.passwd)}
                    helperText={formik.touched.passwd && formik.errors.passwd}
                    key={2}
                    type={'password'}
                    size="small"
                    label={<Typography style={{fontSize: '.9rem', fontWeight: 400}}>کلمه عبور</Typography>}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <LockOpenOutlinedIcon sx={{width: '18px', height: 'auto'}} className={'text-gray-500'}/>
                            </InputAdornment>
                        )
                    }}
                />


                <Button fullWidth type={"submit"} variant="contained" size="normal" className={'mt-6'} style={{backgroundColor:'#8183BF'}}>
                    ورود به حساب کاربری
                </Button>
            </form>
        </div>
    );
}
