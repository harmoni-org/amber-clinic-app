import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
query GetServices {
  services(first: 10) {
    nodes {
      image {
        id
        mediaItemUrl
      }
      id
      shortDescription {
        nodes {
          languageCode
          text
        }
      }
      description {
        nodes {
          languageCode
          text
        }
      }
      slug
      serviceTitle {
        nodes {
          languageCode
          text
        }
      }
    }
  }
}`;

export const GET_SERVICE = gql`
  query GetService($id: ID!) {
    service(id:$id, idType: SLUG) {
      image {
        id
        mediaItemUrl
        altText
      }
      id
      shortDescription {
        nodes {
          languageCode
          text
        }
      }
      description {
        nodes {
          languageCode
          text
        }
      }
      slug
      serviceTitle {
        nodes {
          languageCode
          text
        }
      }
    }
  }`