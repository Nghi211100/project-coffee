/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const getProducts = gql`
  query {
    products(first: 100, channel: "phe-la") {
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
          products(first: 100, channel: "phe-la") {
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

export const getCartItems = gql`
  query {
    checkoutLines(first: 100) {
      edges {
        node {
          id
          quantity
          variant {
            id
            product {
              name
              slug
              thumbnail {
                url
                alt
              }
            }
          }
          unitPrice {
            gross {
              amount
            }
          }
          totalPrice {
            gross {
              amount
            }
          }
        }
      }
    }
  }
`;
