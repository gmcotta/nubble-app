import { useState } from 'react';

import { Keyboard } from 'react-native';
import { TextMessage } from '@components';
import { useCreatePostComment } from '@domain';
import { PostCommentTextMessageProps } from './props';

export function PostCommentTextMessage({
  postId
}: PostCommentTextMessageProps) {
  const [message, setMessage] = useState('');

  const { createPostComment } = useCreatePostComment(postId);

  async function handleSendComment() {
    await createPostComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      onPressSend={handleSendComment}
      value={message}
      onChangeText={setMessage}
      placeholder="Escreva um comentário"
    />
  );
}
