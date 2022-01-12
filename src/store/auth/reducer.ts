import { IAuthState, AuthEnum, AuthActionType } from './types';

const initialState: IAuthState = {
  id: null,
  username: '',
  error: '',
  isLoading: false,
  isAuth: false,
};

export const authReducer = (
  state: IAuthState = initialState,
  action: AuthActionType
): IAuthState => {
  switch (action.type) {
    case AuthEnum.AUTH:
      return { ...state, isAuth: action.payload };
    case AuthEnum.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthEnum.ERROR:
      return { ...state, error: action.payload };
    case AuthEnum.USERNAME:
      return { ...state, username: action.payload, id: Date.now() };
    default:
      return state;
  }
};