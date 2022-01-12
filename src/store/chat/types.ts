export enum ChatEnum {
  SEND_MESSAGE = 'SEND_MESSAGE',
  GET_MESSAGES = 'GET_MESSAGES',
}

export interface IMessage {
  id: number | null;
  msgUser: string;
  message: string;
}

export interface ISendMessage {
  type: typeof ChatEnum.SEND_MESSAGE;
  payload: IMessage;
}

export interface IGetMessages {
  type: typeof ChatEnum.GET_MESSAGES;
  payload: IMessage[];
}

export type ChatActions = ISendMessage | IGetMessages;
