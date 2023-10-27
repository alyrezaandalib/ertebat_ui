import http from "@/serivices/http";

export const checkAdminLogin = ({exCode, usrName, passwd}) => {
        const body = {
            ex_code: exCode,
            usr_name: usrName,
            passwd: passwd
        }
        return http.post("https://", body);
    }
;
