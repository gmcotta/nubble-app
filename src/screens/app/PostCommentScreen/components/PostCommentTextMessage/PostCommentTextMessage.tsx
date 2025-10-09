import { useState } from 'react';
import { Keyboard } from 'react-native';

import { TextMessage } from '@components';
import { useCreatePostComment } from '@domain';
import * as C from './constants';
import { PostCommentTextMessageProps } from './props';

export function PostCommentTextMessage({
  postId,
  onSuccessAction
}: PostCommentTextMessageProps) {
  const [message, setMessage] = useState('');

  const { createPostComment } = useCreatePostComment(postId, {
    onSuccess: () => {
      onSuccessAction();
      setMessage('');
      Keyboard.dismiss();
    },
    errorMessage: C.SCREEN_VALUES.CREATE_COMMENT.ERROR_MESSAGE
  });

  async function handleSendComment() {
    await createPostComment({ message });
  }

  return (
    <TextMessage
      onPressSend={handleSendComment}
      value={message}
      onChangeText={setMessage}
      placeholder={C.SCREEN_VALUES.INPUT.PLACEHOLDER}
    />
  );
}
