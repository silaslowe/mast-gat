import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image';
import styled from 'styled-components'

const PizzaGridStyles = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 4rem;
grid-auto-rows: auto auto 500px;

`;

const PizzaStyles = styled.div `
display: grid;
@supports not(grid-template-rows: subgrid) {
   --rows: auto, auto, 1fr; 
}
/* Row sizinf comes  from PizzaStylesGrid not from PizzaStyles*/
grid-template-rows: var(--rows, subgrid);
grid-row: span 3;
grid-gap: 1rem;
h2, p {
    margin:0;
}
`

const SinglePizza = ({pizza}) => {
  return (
    <PizzaStyles>
        <Link to={`/pizza/${pizza.node.slug.current}`}>
            <h2>
                <span className="mark">{pizza.node.name}</span>
            </h2>
        </Link>
        <p>{pizza.node.toppings.map(topping => topping.name).join(", ")}</p>
        <Img fluid={pizza.node.image.asset.fluid} alt={pizza.node.name}/>
    </PizzaStyles>
  )
}

export const PizzaList = ({pizzas}) => {
    console.log("PL", pizzas)
    return <PizzaGridStyles>
    {pizzas.map(pizza => <SinglePizza key={pizza.node.id} pizza={pizza}/>)}
    </PizzaGridStyles>
}