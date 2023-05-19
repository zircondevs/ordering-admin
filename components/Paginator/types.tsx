/* eslint-disable no-unused-vars */



export type Type =  "standard"  ;
    
export interface Standard  {
    onPageChange: (e?: any) => void;
    firstLast?: boolean;
    prevNext?: boolean;
    pages: number;
    currentPage: number;
    type?: Type;
    limit?: boolean
}
export interface NextType  {
    firstLast?: boolean;
    prevNext: boolean;
    pages?: number;
    currentPage?: number;
    onPageChange: (e?: any) => void;
    type: "nextPage";
    limit:  boolean;
}
export type PropsTypes = Standard | NextType
