import React from 'react'
import './FAQShort.css'

function FAQShort(props){
  return (
    <div className="FAQShort">
      <div className="content">
        <div>
          <div className="little-red-thing" style={{left:'15%'}} />
          <h2>FAQs</h2>
        </div>
        <div className="faq-item-holder">
          {props.faqs.map( (item, idx)=>{
            return(
              <div className="faq-item" key={idx}>
                <h4 className="faq-question"> {item.question}</h4>
                <p className="faq-answer"> {item.answer}</p>
              </div>
            )})
          }
        </div>
        <div className="button-holder">
          <a href="/faqs"><div className="button"><p>All FAQs</p></div></a>
        </div>
    </div>
  </div>

  )
}

export default FAQShort
