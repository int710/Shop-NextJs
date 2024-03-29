import http from "@/lib/http";
import { RegisterBodyType, LoginBodyType, RegisterResType, LoginResType } from "@/schemaValidations/auth.schema";

const authApiRequest = {
    login: (body: LoginBodyType) => http.post<LoginResType>('/auth/login', body),
    register: (body: RegisterBodyType) => http.post<RegisterResType>('/auth/register', body),
    auth: (body: { sessionToken: string }) => {
        http.post('/api/auth', body, {
            baseUrl: ''
        })
    }
}

export default authApiRequest