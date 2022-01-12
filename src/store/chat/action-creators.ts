import { ChatEnum, IGetMessages, IMessage, ISendMessage } from './types';
import { AppDispatch } from '../store';

export const sendMessage = (
  message: string,
  msgUser: string,
  id: number | null
): ISendMessage => ({
  type: ChatEnum.SEND_MESSAGE,
  payload: { id, msgUser, message },
});
export const getMessage = (messageStorage: IMessage[]): IGetMessages => ({
  type: ChatEnum.GET_MESSAGES,
  payload: messageStorage,
});
export const messageAction = {
  sendMessageThunk:
    (messages: IMessage[], message: string, msgUser: string, id: number)  =>
    async (dispatch: AppDispatch) => {
      await localStorage.setItem(
        'messages',
        JSON.stringify([...messages, { id, msgUser, message }])
      );
      dispatch(sendMessage(message, msgUser, id));
    },
  getMessageThunk: () => async (dispatch: AppDispatch) => {
    const messageStorage: IMessage[] = await JSON.parse(localStorage.messages);
    dispatch(getMessage(messageStorage));
  },
};
