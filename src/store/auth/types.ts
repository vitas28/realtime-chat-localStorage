export interface IAuthState {
  id: number | null;
  isAuth: boolean;
  isLoading: boolean;
  username: string;
  error: string;
}

export enum AuthEnum {
  AUTH = 'AUTH',
  ERROR = 'ERROR',
  IS_LOADING = 'IS_LOADING',
  USERNAME = 'USERNAME',
}

export interface IAuthCreation {
  type: typeof AuthEnum.AUTH;
  payload: boolean;
}

export interface IIsLoadingCreation {
  type: typeof AuthEnum.IS_LOADING;
  payload: boolean;
}

export interface IErrorCreation {
  type: typeof AuthEnum.ERROR;
  payload: string;
}

export interface IUsernameCreation {
  type: typeof AuthEnum.USERNAME;
  payload: string;
}

export type AuthActionType =
  | IAuthCreation
  | IIsLoadingCreation
  | IUsernameCreation
  | IErrorCreation;
