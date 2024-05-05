import React from 'react'
import './QuoteCard.css'

export const QuoteCard = (props) => {
    // console.log(props)
  return (
    <section className="quotecard-container">
        <p>{props.description}</p>
        <span>{props.author}</span>
    </section>
  )
}