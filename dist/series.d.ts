import { Book } from "./books";
import { ID } from "./types";
export declare type Series = {
    id?: ID;
    name?: string;
    books?: Book[];
    __typename: 'Series';
};
export declare type MutationAddSeriesData = Required<Series>;
export declare type MutationAddSeriesVariables = {
    id: ID;
    name: string;
};
export declare type MutationRemoveSeriesVariables = {
    id: ID;
};
export declare type MutationEditSeriesVariables = {
    id: ID;
    name?: string;
};
export declare type MutationEditSeriesData = {
    id: ID;
    name: string;
};
