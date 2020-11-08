import { Tag } from "./tags";
import { Series } from "./series";
import { Link } from "./links";
import { ID } from "./types";

export type Book = {
  __typename: 'Book',
  id: string,
  title?: string | null,
  createdAt?: number,
  tags?: Tag[],
  series?: Series[],
  lastMetadataUpdatedAt?: number | null,
  readingStateCurrentBookmarkProgressUpdatedAt?: number | null,
  readingStateCurrentBookmarkProgressPercent?: number,
  readingStateCurrentBookmarkLocation?: string | null,
  author?: string,
  links?: Link[]
}

export type CreatedBook = Required<Book>

export type MutationAddBookData = Required<Book>

export type MutationAddTagsToBookVariables = { id: ID, tags: ID[] }
export type MutationRemoveTagsToBookVariables = { id: ID, tags: ID[] }

export type MutationAddSeriesToBookVariables = { id: ID, series: ID[] }
export type MutationRemoveSeriesToBookVariables = { id: ID, series: ID[] }