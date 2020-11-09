import { ID } from "./types"
import { Book } from "./books"

export type Tag = {
  id?: string,
  name?: string,
  books?: Book[],
  isProtected?: boolean,
  __typename: 'Tag',
}

export type MutationRemoveTagVariables = {
  id: ID,
}

export type MutationAddTagVariables = {
  id: ID,
  name: string,
}

export type MutationEditTagVariables = {
  id: ID,
  name?: string,
  isProtected?: boolean,
}

export type MutationEditTagData = Tag

export type MutationAddTagData = Required<Omit<Tag, 'books'>>

export type QueryTagVariables = { id: string }