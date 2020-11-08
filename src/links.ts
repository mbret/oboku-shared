export type Link = {
  __typename: 'Link',
  id: string,
  location: string,
}

export type CreatedLink = Required<Link>

export type MutationEditLinkVariables = { id: string, location: string }
export type MutationEditLinkData = { id: string }

export type MutationAddLinkVariables = { id: string, bookId: string, location: string }
export type MutationAddLinkData = { id: string }