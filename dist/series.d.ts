import { Series } from "./generated/graphql";
import { ID } from "./types";
export declare type MutationAddSeriesData = Required<Series>;
export declare type MutationEditSeriesData = {
    id: ID;
    name: string;
};
