import { Book } from "./books"
import { ID } from "./types"

export type Series = {
  id?: ID,
  name?: string,
  books?: Book[],
  __typename: 'Series',
}

export type MutationAddSeriesData = Required<Series>

export type MutationAddSeriesVariables = { id: ID, name: string }

export type MutationRemoveSeriesVariables = { id: ID }

export type MutationEditSeriesVariables = { id: ID, name?: string }
export type MutationEditSeriesData = { id: ID, name: string }
