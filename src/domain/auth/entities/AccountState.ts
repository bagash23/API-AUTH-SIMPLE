import {LoadingState} from '../../../entites/LoadingState';

export interface AccountState extends LoadingState {
  token?: string;
  userProfile?: {
      name: string,
      profesi: string,
      email: string,
      photo: string,
  }

  loginAccount : (email: string, password: string) => Promise<
      | {
          success?: boolean;
          status?: string;
          message?: string;
      }
      | undefined
  >;
  registerAccount: {
      name: string,
      profes: string,
      email: string,
      photo: string,
      passwordConfirm: string,
      password: string,
  }
}

export interface ResponseApi {
  success: boolean;
  message: string;
  status: number;
}
