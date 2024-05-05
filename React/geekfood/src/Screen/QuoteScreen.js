import React from 'react'
import Navbar from '../Components/Navbar';
import { QuoteCard } from '../Components/QuoteCard';
import quoteData from '../Quotes.json'
import './QuoteScreen.css';
import Footer from '../Components/Footer';



const QuoteScreen = () => {

    // let quoteData = [{
    //     "desc":"Hello",
    //     "author":"John"
    // },{
    //     "desc":"Hello",
    //     "author":"Honus"
    // }]
  return (
    <>
    <Navbar />
    <section className="quote-section">
    {quoteData.map((ele, index)=> {
        return (
            <QuoteCard 
            description={ele.desc}
            author={ele.author}
            key={index} />

        )
    })}
      </section>
      <Footer />
    </>
  )
}

export default QuoteScreen;