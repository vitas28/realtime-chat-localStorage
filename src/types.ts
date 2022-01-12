import {ChangeEvent} from "react";

export enum RoutesEnum {
  LOGIN = '/login',
  CHAT = '/chat',
}

export interface IRoutesProps {
  auth: boolean;
}

export interface IMessageFieldProps {
  message: string;
  messageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  addMessageHandler: () => void;
}

export interface IMessageItem {
  message: string;
  msgUser: string;
  username: string;
}
