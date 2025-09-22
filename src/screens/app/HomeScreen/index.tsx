import { useEffect, useState } from 'react';

import { Screen, Text } from '@components';
import { Post, postService } from '@domain';
// import { HomeScreenProps } from './props';

export function HomeScreen() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => {
      console.log(list);
      setPostList(list);
    });
  }, []);

  return (
    <Screen canGoBack>
      {postList.map(post => (
        <Text key={post.id}>{post.text}</Text>
      ))}
    </Screen>
  );
}
