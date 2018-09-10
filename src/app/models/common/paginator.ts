export class PaginateInfo {
    currentPage = 1;
    from = 0;
    last_page = 0;
    pageSize = 0;
    to = 0;
    totalCount = 0;
    totalPages = 0;
}

export interface IPaginate<T> {
    items: Array<T>;
    pageCount: number;
    totalItemCount: number;
    pageNumber: number;
    pageSize: number;
    itemStart: number;
    itemEnd: number;
}