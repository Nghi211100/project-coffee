/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const getProducts = gql`
  query {
    products(first: 20) {
      edges {
        node {
          id
          name
          slug
          pricing {
            priceRange {
              start {
                net {
                  amount
                }
              }
            }
          }
          thumbnail {
            url
            alt
          }
          category {
            name
            slug
          }
        }
      }
    }
  }
`;

export const getAllCategories = gql`
  query {
    categories(first: 10) {
      edges {
        node {
          id
          slug
          name
          products(first: 100) {
            edges {
              node {
                id
                name
                slug
                pricing {
                  priceRange {
                    start {
                      net {
                        amount
                      }
                    }
                  }
                }
                thumbnail {
                  url
                  alt
                }
                category {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`;
