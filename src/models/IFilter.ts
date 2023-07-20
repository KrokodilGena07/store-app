export interface IFilter {
    searchQuery: string;
    type: string;
    sort: SortType;
};

export enum SortType {
    DEFAULT = 'DEFAULT',
    EXPENSIVE = 'EXPENSIVE',
    CHEAPER = 'CHEAPER',
    HIGHER = 'HIGHER',
    BELOW = 'BELOW'
}