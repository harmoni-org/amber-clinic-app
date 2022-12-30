import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
query GetBlogs {
  blogs(first: 10) {
    nodes {
      image {
        id
        mediaItemUrl
      }
      id
      content {
        nodes {
          languageCode
          text
        }
      }
      blogTitle {
        nodes {
          languageCode
          text
        }
      }
      modelSlug
    }
  }
}`;

export const GET_BLOG = gql`
query GetBlog($id: ID!) {
  blog(id:$id, idType: SLUG) {
    id
    image {
      mediaItemUrl
      altText
    }
    content {
      nodes {
        languageCode
        text
      }
    }
    blogTitle {
      nodes {
        languageCode
        text
      }
    }
    modelSlug
  }
}`;