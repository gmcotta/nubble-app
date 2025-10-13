export interface PageMetaData {
  total: number;
  perPage: number;
  currentPage: number;
  firstPage: number;
  lastPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Page<Data> {
  meta: PageMetaData;
  data: Data[];
}
