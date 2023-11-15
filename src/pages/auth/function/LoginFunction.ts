import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useState } from "react";
import { useAccount } from "../../../domain/auth/useAuth";

interface IReturnLogin {
    isSecureEntry: boolean;
    setIsSecureEntry: (secure: boolean) => void;
    data: {
        email: '',
        password: '',
    };    
    handleStateLogin: (field: string, value: string) => void;
    handleLogin: (email: string, password: string) => void;
    loading: boolean;
}

export const useHandleLogin = (): IReturnLogin => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { loginAccount, loading } = useAccount();
    const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
    const [data, setData] = useState({
        email: '',
        password: '',
    })    
    const handleStateLogin = (field: string, value: string) => {        
        setData(prev => ({
            ...prev,
            [field]: value,
        }));
    }

    const handleLogin = async (email: string, password: string) => {
        try {
            const res = await loginAccount(
                email,
                password
            )
            if (res?.status === 'success') {
                console.log("Berhasil Login")
            }
        } catch (error) {
            console.log(error)
        }
        
    }


    return {
        isSecureEntry,
        setIsSecureEntry,
        data,        
        handleStateLogin,
        handleLogin,
        loading,
    }
}