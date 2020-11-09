import { ID } from "./types";
import { Book } from "./books";
export declare type Tag = {
    id?: string;
    name?: string;
    books?: Book[];
    isProtected?: boolean;
    __typename: 'Tag';
};
export declare type MutationRemoveTagVariables = {
    id: ID;
};
export declare type MutationAddTagVariables = {
    id: ID;
    name: string;
};
export declare type MutationEditTagVariables = {
    id: ID;
    name?: string;
    isProtected?: boolean;
};
export declare type MutationEditTagData = Tag;
export declare type MutationAddTagData = Required<Omit<Tag, 'books'>>;
export declare type QueryTagVariables = {
    id: string;
};
