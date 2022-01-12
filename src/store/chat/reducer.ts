import { ChatActions, ChatEnum, IMessage } from './types';

const initialState: IMessage[] = [];

export const chatReducer = (
  state: IMessage[] = initialState,
  action: ChatActions
): IMessage[] => {
  switch (action.type) {
    case ChatEnum.SEND_MESSAGE:
      return [...state, action.payload];
    case ChatEnum.GET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};
