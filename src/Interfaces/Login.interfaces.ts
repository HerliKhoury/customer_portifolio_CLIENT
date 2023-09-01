export interface Login {
    email: string,
    password: string
}

export interface LoginRes {
    token: string,
    phone: string,
    name: string
}