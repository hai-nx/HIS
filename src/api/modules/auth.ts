import request from "../request"

export function login(data: any) {
    return request.post("api/tokenAuth/login", data)
}