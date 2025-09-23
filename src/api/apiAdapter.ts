import { PageMetaData } from '@types';
import { PaginationMetaDataAPI } from './apiTypes';

function toPageMetaData(meta: PaginationMetaDataAPI): PageMetaData {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    firstPage: meta.first_page,
    lastPage: meta.last_page,
    hasPreviousPage: Boolean(meta.previous_page_url),
    hasNextPage: Boolean(meta.next_page_url)
  };
}

export const apiAdapter = {
  toPageMetaData
};
