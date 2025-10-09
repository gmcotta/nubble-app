import { renderHook, waitFor } from 'test-utils';
import { Page, PageMetaData } from '@types';
import { usePaginatedList } from '../usePaginatedList/usePaginatedList';

const page1 = ['item1', 'item2', 'item3'];
const page2 = ['item4', 'item5', 'item6'];

async function getList(page: number): Promise<Page<string>> {
  const data = page === 1 ? page1 : page2;

  const meta: PageMetaData = {
    currentPage: page,
    firstPage: 1,
    lastPage: 2,
    hasNextPage: page === 1,
    hasPreviousPage: page === 2,
    perPage: 3,
    total: 6
  };

  return Promise.resolve({ data, meta });
}

const mockedGetList = jest.fn(getList);

describe('usePaginatedList', () => {
  it('should throw error if does not have an options param', async () => {
    expect(() => renderHook(() => usePaginatedList(mockedGetList))).toThrow(
      Error('Implementation needs options parameter.')
    );
  });

  it('should return all pages together and stop fetching if there are no pages available', async () => {
    const { result } = renderHook(() =>
      usePaginatedList(mockedGetList, { queryKey: ['key'] })
    );

    await waitFor(() => expect(result.current.data).toStrictEqual(page1));

    result.current.fetchNextPage();

    await waitFor(() =>
      expect(result.current.data).toStrictEqual([...page1, ...page2])
    );

    result.current.fetchNextPage();

    expect(mockedGetList).toHaveBeenCalledTimes(2);
  });
});
