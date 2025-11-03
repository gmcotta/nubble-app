import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { QueryKeys } from '@infra';
import { multimediaService } from './multimediaService';
import { PhotoListPaginated } from './multimediaTypes';

export function useMultimediaGetPhotos(
  hasPermission: boolean,
  onInitialLoad?: (imageUri: string) => void
) {
  const [list, setList] = useState<string[]>([]);

  const query = useInfiniteQuery<PhotoListPaginated>({
    queryKey: [QueryKeys.CameraRollList],
    initialPageParam: undefined,
    queryFn: ({ pageParam }) =>
      multimediaService.getPhotos(pageParam as string | undefined),
    getNextPageParam: ({ cursor }) => cursor,
    enabled: hasPermission
  });

  function fetchNextPage() {
    if (hasPermission) {
      query.fetchNextPage();
    }
  }

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setList(newList);

      if (query.data.pages.length === 1 && onInitialLoad) {
        onInitialLoad(newList[0]);
      }
    }
  }, [query.data, onInitialLoad]);

  return {
    list,
    hasNextPage: query.hasNextPage,
    fetchNextPage
  };
}
