import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Messages from '../components/Messages';
import { messageAction } from '../store/chat/action-creators';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import TextArea from 'antd/es/input/TextArea';
import { Button } from 'antd';
import {IMessage} from "../store/chat/types";

const ChatPage: FC = () => {
  const [message, setMessage] = useState<string>('');
  const { username } = useTypedSelector((state) => state.auth);
  const { messages } = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };
  const addMessageHandler = (): void => {
    const id = Date.now();
    dispatch(messageAction.sendMessageThunk(messages, message, username, id));
    setMessage('');
  };

  const getData: IMessage[] = localStorage.messages;

  useEffect(() => {
    window.addEventListener('storage', (): void => {
      dispatch(messageAction.getMessageThunk());
    });
    return window.removeEventListener('storage', (): void => {
      dispatch(messageAction.getMessageThunk());
    });
  }, [getData]);

  return (
    <div className="chat">
      <Messages />
      <div className="chat-textarea">
        <TextArea
          value={message}
          onChange={messageHandler}
          showCount
          maxLength={100}
          style={{ height: 120 }}
        />
        <Button type="primary" onClick={addMessageHandler}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default ChatPage;
