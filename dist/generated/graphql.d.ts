export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    email?: Maybe<Scalars['String']>;
    contentPassword?: Maybe<Scalars['String']>;
};
export declare type Book = {
    __typename?: 'Book';
    id: Scalars['ID'];
    localId: Scalars['String'];
    title?: Maybe<Scalars['String']>;
    creator?: Maybe<Scalars['String']>;
    lastMetadataUpdatedAt?: Maybe<Scalars['Float']>;
    readingStateCurrentBookmarkProgressUpdatedAt?: Maybe<Scalars['Float']>;
    readingStateCurrentBookmarkLocation?: Maybe<Scalars['String']>;
    readingStateCurrentBookmarkProgressPercent?: Maybe<Scalars['Float']>;
    links?: Maybe<Array<Maybe<Link>>>;
    tags?: Maybe<Array<Maybe<Tag>>>;
    series?: Maybe<Array<Maybe<Series>>>;
    createdAt?: Maybe<Scalars['Float']>;
};
export declare type Books = {
    __typename?: 'Books';
    id: Scalars['ID'];
    timestamp?: Maybe<Scalars['Float']>;
    books?: Maybe<Array<Maybe<Book>>>;
};
export declare type Link = {
    __typename?: 'Link';
    id: Scalars['ID'];
    location?: Maybe<Scalars['String']>;
};
export declare type Tag = {
    __typename?: 'Tag';
    id: Scalars['ID'];
    localId: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    books?: Maybe<Array<Maybe<Book>>>;
    isProtected?: Maybe<Scalars['Boolean']>;
};
export declare type Series = {
    __typename?: 'Series';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    books?: Maybe<Array<Maybe<Book>>>;
};
export declare type Query = {
    __typename?: 'Query';
    tags?: Maybe<Array<Maybe<Tag>>>;
    tag?: Maybe<Tag>;
    series?: Maybe<Array<Maybe<Series>>>;
    oneSeries?: Maybe<Series>;
    books?: Maybe<Books>;
    book?: Maybe<Book>;
    links?: Maybe<Array<Maybe<Link>>>;
    booksMetadata?: Maybe<Array<Maybe<Book>>>;
};
export declare type QueryTagArgs = {
    id: Scalars['ID'];
};
export declare type QueryOneSeriesArgs = {
    id: Scalars['ID'];
};
export declare type QueryBookArgs = {
    id: Scalars['ID'];
};
export declare type MutationResponse = {
    __typename?: 'MutationResponse';
    id: Scalars['ID'];
};
export declare type AuthenticationResponse = {
    __typename?: 'AuthenticationResponse';
    token: Scalars['String'];
    user: User;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    signup?: Maybe<AuthenticationResponse>;
    signin?: Maybe<AuthenticationResponse>;
    editUser?: Maybe<User>;
    addBook?: Maybe<MutationResponse>;
    removeBook?: Maybe<Book>;
    editBook?: Maybe<Book>;
    addTagsToBook?: Maybe<MutationResponse>;
    removeTagsToBook?: Maybe<MutationResponse>;
    addSeriesToBook?: Maybe<MutationResponse>;
    removeSeriesToBook?: Maybe<MutationResponse>;
    addTag?: Maybe<Tag>;
    removeTag?: Maybe<MutationResponse>;
    editTag?: Maybe<Tag>;
    addSeries?: Maybe<Series>;
    removeSeries?: Maybe<Series>;
    editSeries?: Maybe<Series>;
    addLink?: Maybe<MutationResponse>;
    editLink?: Maybe<MutationResponse>;
};
export declare type MutationSignupArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationSigninArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationEditUserArgs = {
    id: Scalars['ID'];
    contentPassword?: Maybe<Scalars['String']>;
};
export declare type MutationAddBookArgs = {
    id: Scalars['ID'];
    location: Scalars['String'];
};
export declare type MutationRemoveBookArgs = {
    id: Scalars['ID'];
};
export declare type MutationEditBookArgs = {
    id: Scalars['ID'];
    lastMetadataUpdatedAt?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
    readingStateCurrentBookmarkLocation?: Maybe<Scalars['String']>;
    readingStateCurrentBookmarkProgressPercent?: Maybe<Scalars['Float']>;
};
export declare type MutationAddTagsToBookArgs = {
    id: Scalars['ID'];
    tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
export declare type MutationRemoveTagsToBookArgs = {
    id: Scalars['ID'];
    tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
export declare type MutationAddSeriesToBookArgs = {
    id: Scalars['ID'];
    series?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
export declare type MutationRemoveSeriesToBookArgs = {
    id: Scalars['ID'];
    series?: Maybe<Array<Maybe<Scalars['ID']>>>;
};
export declare type MutationAddTagArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type MutationRemoveTagArgs = {
    id: Scalars['ID'];
};
export declare type MutationEditTagArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    isProtected?: Maybe<Scalars['Boolean']>;
};
export declare type MutationAddSeriesArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type MutationRemoveSeriesArgs = {
    id: Scalars['ID'];
};
export declare type MutationEditSeriesArgs = {
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};
export declare type MutationAddLinkArgs = {
    id: Scalars['ID'];
    bookId: Scalars['ID'];
    location: Scalars['String'];
};
export declare type MutationEditLinkArgs = {
    id: Scalars['ID'];
    location: Scalars['String'];
};
export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[];
    };
}
declare const result: PossibleTypesResultData;
export default result;
