import { gql } from '@apollo/client';

export const POC_SEARCH = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      address {
        __typename
        address1
        number
        city
        province
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
          title
          subtitle
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;
