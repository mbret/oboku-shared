import { Collections } from "./generated/graphql";
import { ID } from "./types";
export declare type MutationAddCollectionsData = Required<Collections>;
export declare type MutationEditCollectionsData = {
    id: ID;
    name: string;
};
