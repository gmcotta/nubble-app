import { Page, PageMetaData } from '@types';
import { PageAPI, PaginationMetaDataAPI } from './apiTypes';

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

function toPageModel<APIType, ModelType>(
  page: PageAPI<APIType>,
  adapterToModel: (api: APIType) => ModelType
): Page<ModelType> {
  const meta = toPageMetaData(page.meta);
  const data = page.data.map(item => adapterToModel(item));

  return { meta, data };
}

export const apiAdapter = {
  toPageMetaData,
  toPageModel
};
