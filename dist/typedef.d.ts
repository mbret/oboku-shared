import { ID } from './types';
import { Book } from './books';
export declare type MutationAddBookArgs = {
    id: ID;
    location: string;
};
export declare type MutationRemoveBookArgs = {
    id: ID;
};
export declare type MutationEditBookArgs = {
    id: string;
    lastMetadataUpdatedAt?: string | null;
    readingStateCurrentBookmarkLocation?: string;
    readingStateCurrentBookmarkProgressPercent?: number;
};
export declare type MutationRemoveBookData = Book;
export declare const typeDefs: import("graphql").DocumentNode;
