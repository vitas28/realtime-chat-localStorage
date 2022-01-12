import React, { FC, useEffect, useRef } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Message from './Message';
import {useDispatch} from "react-redux";
import {messageAction} from "../store/chat/action-creators";

const Messages: FC = () => {
  const messageRef: React.Ref<HTMLDivElement> = useRef(null);
  const dispatch = useDispatch()

  const { messages } = useTypedSelector((state) => state);
  const { username } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(messageAction.getMessageThunk())
  }, [])

  useEffect(() => {
    messageRef.current && messageRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((item) => (
        <Message
          key={item.id}
          message={item.message}
          username={username}
          msgUser={item.msgUser}
        />
      ))}
      <div ref={messageRef} />
    </div>
  );
};

export default Messages;
