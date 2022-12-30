import { gql } from "@apollo/client";


export const GET_DENTISTS = gql`
query GetDentists {
  dentists(first: 10) {
    nodes {
      ...DentistFields
    }
  }
}

fragment DentistFields on Dentist {
  dentistImage {
    id
    mediaItemUrl
  }
  id
  name
  urlSlug
  slug
  branchTitle {
    nodes {
      languageCode
      text
    }
  }
}`;

export const GET_DENTIST = gql`
query GetDentist($id: ID!) {
  dentist(id: $id) {
    ...DentistFieldsWithDescription
  }
}

fragment DentistFieldsWithDescription on Dentist {
  dentistImage {
    id
    mediaItemUrl
  }
  id
  name
  urlSlug
  slug
  description {
    nodes {
      languageCode
      text
    }
  }
  branchTitle {
    nodes {
      languageCode
      text
    }
  }
}`;