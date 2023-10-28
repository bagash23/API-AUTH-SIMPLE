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
}

export const useHandleLogin = (): IReturnLogin => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { loginAccount, loading } = useAccount();
    const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    console.log("data", data.email, data.password)
    const handleStateLogin = (field: string, value: string) => {
        console.log("field", field, value)
        setData(prev => ({
            ...prev,
            [field]: value,
        }));
    }

    const handleLogin = async (email: string, password: string) => {
        console.log("email", email)
        console.log("password", password)
        try {
            const res = await loginAccount(
                email,
                password
            )
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        
    }


    return {
        isSecureEntry,
        setIsSecureEntry,
        data,        
        handleStateLogin,
        handleLogin
    }
}