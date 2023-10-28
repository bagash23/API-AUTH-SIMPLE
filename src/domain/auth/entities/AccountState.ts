import { LoadingState } from "../../../entites/LoadingState"

export interface AccountState extends LoadingState {
    loginAccount?: (
      email: string,
      password: string
    ) => Promise<{
      success?: boolean;
      status?: string;
      message?: string;
    } | undefined>;
  
    registerAccount?: (
      nama: string,
      profesi: string,
      email: string,
      password: string
    ) => Promise<{
      success?: boolean;
      status?: string;
      message?: string;
    } | undefined>;
  }
  
  export interface ResponseApi {
    success: boolean;
    message: string;
    status: number;
  }