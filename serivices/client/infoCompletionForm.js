'use client'
import {getCookie} from "cookies-next";
import axios from "axios";
import {string} from "yup";

export default async function infoCompletionForm(values) {
    const token = getCookie('token')
    try {
        const response = await axios.put(
            'https://',
            {
                first_name: values.firstName,
                last_name: values.lastName,
                gender: values.gender,
                state: values.state,
                town: values.town,
                birthday: values.birthday
            },
            {
                headers: {
                    Authorization: token
                }
            }
        )
        return await response
    } catch (e) {
        // console.log(e)
    }

}

