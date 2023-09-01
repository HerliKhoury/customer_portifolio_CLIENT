
export type TDefaultProviderProps = {
    children: React.ReactNode;
};

export type TUserInfo = {
    name: string,
    phone: string
}

export type TUserContext = {
    userState: TUserInfo,
    setUserState: React.Dispatch<React.SetStateAction<TUserInfo>>
}