import { Tag } from "./tags";
import { Series } from "./series";
import { Link } from "./links";
import { ID } from "./types";
export declare type Book = {
    __typename: 'Book';
    id: string;
    title?: string | null;
    createdAt?: number;
    tags?: Tag[];
    series?: Series[];
    lastMetadataUpdatedAt?: number | null;
    readingStateCurrentBookmarkProgressUpdatedAt?: number | null;
    readingStateCurrentBookmarkProgressPercent?: number;
    readingStateCurrentBookmarkLocation?: string | null;
    author?: string;
    links?: Link[];
};
export declare type CreatedBook = Required<Book>;
export declare type MutationAddBookData = Required<Book>;
export declare type MutationAddTagsToBookVariables = {
    id: ID;
    tags: ID[];
};
export declare type MutationRemoveTagsToBookVariables = {
    id: ID;
    tags: ID[];
};
export declare type MutationAddSeriesToBookVariables = {
    id: ID;
    series: ID[];
};
export declare type MutationRemoveSeriesToBookVariables = {
    id: ID;
    series: ID[];
};