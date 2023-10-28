import { create } from "zustand";
import { AccountState, ResponseApi } from "./entities/AccountState";
import { ApiLogin } from "../../utils/api";


const initState = {
    token: '',
    loading: false,
    disabled: false,
    userProfile: {
        name: '',
        email: '',
        profesi: '',
    },
}


export const useAccount = create<AccountState>((set, get) => ({
    ...initState,
    async loginAccount(email, password) {
        set(() => ({
            loading: true,
            disabled: true,            
        }))

        try {
            const res = await ApiLogin.post({
                email, password
            })
            console.log('res login:', res.data)
            set(() => ({
                loading: false,                
                userProfile: res.data.response
            }));

            return {
                success: true,
                message: res.data.message,
                status: res.status
            }
            
        } catch (error) {
            set(() => ({
                loading: false
            }))
            return{
                success: false,
                message: 'failed login',
                status: error.response.status
            }
        }
    },

    async registerAccount(nama, profesi, email, password) {
        set(() => ({
            loading: true,
            disabled: true
        }))

        try {
            const res = await ApiLogin.post({
                nama, profesi, email, password
            })
            console.log('res login:', res.data)
            set(() => ({
                loading: false,                
                userProfile: res.data.response
            }));

            return {
                success: true,
                message: res.data.message,
                status: res.status
            }
            
        } catch (error) {
            set(() => ({
                loading: false
            }))
            return{
                success: false,
                message: 'failed login',
                status: error.response.status
            }
        }
    },


    setDisabled: (disabled: boolean) => {
        set(() => ({ disabled: disabled }));
    },
}))