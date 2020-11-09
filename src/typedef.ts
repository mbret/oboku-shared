import { ID } from './types';
import { Book } from './books';
import gql from 'graphql-tag';

export type MutationAddBookVariables = {
  id: ID,
  location: string,
}

export type MutationRemoveBookVariables = {
  id: ID
}

export type MutationEditBookVariables = {
  id: string,
  lastMetadataUpdatedAt?: string | null,
  readingStateCurrentBookmarkLocation?: string,
  readingStateCurrentBookmarkProgressPercent?: number,
}

export type MutationRemoveBookData = Book

const mutationTypeDefs = `
  type MutationResponse {
    id: ID!
  }

  type AuthenticationResponse {
    token: String!
    user: User!
  }

  type Mutation {
    signup(email: String!, password: String!): AuthenticationResponse
    signin(email: String!, password: String!): AuthenticationResponse
    editUser(id: ID!, contentPassword: String): User

    addBook(id: ID!, location: String!): MutationResponse
    removeBook(id: ID!): Book
    editBook(
      id: ID!, 
      lastMetadataUpdatedAt: Float, 
      title: String, 
      readingStateCurrentBookmarkLocation: String,
      readingStateCurrentBookmarkProgressPercent: Float
    ): Book
    addTagsToBook(id: ID!, tags: [ID]): MutationResponse
    removeTagsToBook(id: ID!, tags: [ID]): MutationResponse
    addSeriesToBook(id: ID!, series: [ID]): MutationResponse
    removeSeriesToBook(id: ID!, series: [ID]): MutationResponse

    addTag(id: ID!, name: String): Tag
    removeTag(id: ID!): MutationResponse
    editTag(id: ID!, name: String, isProtected: Boolean): Tag
    
    addSeries(id: ID!, name: String): Series
    removeSeries(id: ID!): Series
    editSeries(id: ID!, name: String): Series
    
    addLink(id: ID!, bookId: ID!, location: String!): MutationResponse
    editLink(id: ID!, location: String!): MutationResponse
  }  
`

export const typeDefs = gql`
  type User {
    id: ID!
    email: String
    contentPassword: String
  }

  type Book {
    id: ID!
    localId: String!
    title: String
    lastMetadataUpdatedAt: Float
    readingStateCurrentBookmarkProgressUpdatedAt: Float
    readingStateCurrentBookmarkLocation: String
    readingStateCurrentBookmarkProgressPercent: Float
    links: [Link]
    tags: [Tag]
    series: [Series]
    createdAt: Float
  }

  type Books {
    id: ID!
    timestamp: Float
    books: [Book]
  }

  type Link {
    id: ID!
    location: String
  }

  type Tag {
    id: ID!
    localId: ID!
    name: String
    books: [Book]
    isProtected: Boolean
  }

  type Series {
    id: ID!
    name: String
    books: [Book]
  }

  type Query {
    tags: [Tag]
    tag(id: ID!): Tag
    series: [Series]
    oneSeries(id: ID!): Series
    books: Books
    book(id: ID!): Book
    links: [Link]
    booksMetadata: [Book]
  }

  ${mutationTypeDefs}
`;