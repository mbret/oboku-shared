export declare type Link = {
    __typename: 'Link';
    id: string;
    location: string;
};
export declare type CreatedLink = Required<Link>;
export declare type MutationEditLinkVariables = {
    id: string;
    location: string;
};
export declare type MutationEditLinkData = {
    id: string;
};
export declare type MutationAddLinkVariables = {
    id: string;
    bookId: string;
    location: string;
};
export declare type MutationAddLinkData = {
    id: string;
};
