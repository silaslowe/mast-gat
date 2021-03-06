import React from 'react';
import {graphql} from 'gatsby'
import { PizzaList } from '../components/PizzaList';

export default function PizzasPage({data: {pizzas: {edges}}}) {
  const pizzas = edges
  return (
    <>
      <PizzaList pizzas={pizzas}/>
    </>
  );
}

export const query = graphql`
query PizzaQuery {
 pizzas: allSanityPizza {
    edges {
      node {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            # fixed(width: 200, height: 200) {
            #   ...GatsbySanityImageFixed
            # }
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}
`

