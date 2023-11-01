import { SortDirectionType } from '@/common/enums/enums';

export interface Pagination {
  page?: number;
  pageSize?: number | null;
  sort?: string | null;
  sortDirection?: SortDirectionType | null;
}
