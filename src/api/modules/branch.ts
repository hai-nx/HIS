import request from "../request"

export function getAll(data: any) {
    return request.get("api/branch/getAll", data)
}

export function get(data: any) {
    return request.get("api/branch/get", data)
}