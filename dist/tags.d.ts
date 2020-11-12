import { ID } from "./types";
import { Tag } from "./generated/graphql";
export declare type MutationAddTagVariables = {
    id: ID;
    name: string;
};
export declare type MutationEditTagData = Tag;
export declare type MutationAddTagData = Required<Omit<Tag, 'books'>>;
