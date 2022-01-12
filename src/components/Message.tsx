import React, { FC } from 'react';
import { IMessageItem } from '../types';

const Message: FC<IMessageItem> = ({ message, msgUser, username }) => (
  <div
    className="message-item"
    style={{
      justifyContent: msgUser === username ? 'flex-end' : 'flex-start',
    }}
  >
    <div className="user-message">{msgUser}: </div>
    <div className="message">
      <div>{message}</div>
    </div>
  </div>
);

export default Message;
