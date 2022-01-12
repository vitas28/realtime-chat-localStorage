import {
  AuthEnum,
  IAuthCreation,
  IErrorCreation,
  IIsLoadingCreation,
  IUsernameCreation,
} from './types';
import { AppDispatch } from '../store';

export const authAction = (payload: boolean): IAuthCreation => ({
  type: AuthEnum.AUTH,
  payload,
})
    export const isLoadingAction = (payload: boolean): IIsLoadingCreation => ({
  type: AuthEnum.IS_LOADING,
  payload,
})
    export const errorAction = (error: string): IErrorCreation => ({
  type: AuthEnum.ERROR,
  payload: error,
})
    export const usernameAction = (username: string): IUsernameCreation => ({
  type: AuthEnum.USERNAME,
  payload: username,
})

export const authActions = {
  login: (username: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(isLoadingAction(true));
      await sessionStorage.setItem('username', username);
      setTimeout(() => {
        dispatch(usernameAction(username));
        dispatch(authAction(true));
        dispatch(isLoadingAction(false));
      }, 3000);
    } catch (e) {
      dispatch(errorAction('some error'))
    }
  },
  logout: () => (dispatch: AppDispatch) => {
    dispatch(usernameAction(''));
    dispatch(isLoadingAction(true));
    sessionStorage.removeItem('username');
    setTimeout(() => {
      dispatch(authAction(false));
      dispatch(isLoadingAction(false));
    }, 3000);
  },
};
