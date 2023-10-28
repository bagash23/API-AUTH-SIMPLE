import { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

interface IReturnDaftar {
    isSecureEntry: boolean;
    setIsSecureEntry: (secure: boolean) => void;
    data: {
        name: '',
        profesi: '',
        email: '',
        password: '',
    };    
    handleStateDaftar: (field: string, value: string) => void;
    handleDaftar: (name: string, profesi: string,email: string, password: string) => void;
}

export const useHandleDaftar = ():IReturnDaftar => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();    
    const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
    const [data, setData] = useState({
        name: '',
        profesi: '',
        email: '',
        password: '',
    })
    console.log("data", data.email, data.password)
    const handleStateDaftar = (field: string, value: string) => {
        console.log("field", field, value)
        setData(prev => ({
            ...prev,
            [field]: value,
        }));
    }

    const handleDaftar = async (name: string, profesi: string,email: string, password: string) => {
        try {
            console.log(name, profesi,email,password)
        } catch (error) {
            console.log(error)
        }    
    }


    return {
        isSecureEntry,
        setIsSecureEntry,
        data,
        handleStateDaftar,
        handleDaftar
    }
}