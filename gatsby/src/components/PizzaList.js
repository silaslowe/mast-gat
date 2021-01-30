import { Link } from 'gatsby'
import React from 'react'

const SinglePizza = ({pizza}) => {
    console.log(pizza.node.name)
  return <>
  <div>
      <Link to={`/pizza/${pizza.node.slug.current}`}><h2><span className="mark">{pizza.node.name}</span></h2></Link>
      <p>{pizza.node.toppings.map(topping => topping.name).join(", ")}</p>
      </div>
      </>
}

export const PizzaList = ({pizzas}) => {
    console.log("PL", pizzas)
    return <>
    {pizzas.map(pizza => <SinglePizza key={pizza.node.id} pizza={pizza}/>)}
    </>
}