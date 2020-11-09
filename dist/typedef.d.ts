import { ID } from './types';
import { Book } from './books';
export declare type MutationAddBookVariables = {
    id: ID;
    location: string;
};
export declare type MutationRemoveBookVariables = {
    id: ID;
};
export declare type MutationEditBookVariables = {
    id: string;
    lastMetadataUpdatedAt?: string | null;
    readingStateCurrentBookmarkLocation?: string;
    readingStateCurrentBookmarkProgressPercent?: number;
};
export declare type MutationRemoveBookData = Book;
export declare const typeDefs: import("graphql").DocumentNode;
