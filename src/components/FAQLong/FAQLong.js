import React from 'react'
import './FAQLong.css'


function FAQLong(props){
  return (
    <div className="FAQLong" id="FAQLong" >
      <div className="content pdp_detail" style={props.style}>
        <div className="title">
          <h3>{props.title? props.title : "FAQs"}</h3>
        </div>
        <div className="faq-item-holder">
          {props.faqs.map( (item, idx)=>{
            return(
              <div className="faq-item" key={idx}>
                <h4 className="faq-question"> {item.question}</h4>
                <p className="faq-answer"> {item.answer}</p>
                <br/>
              </div>

            )})
          }
        </div>

        <div className="button-holder" style={{visibility: props.button? "hidden" : ''}}>
          <a href="/faqs"><div className="button"><p style={{fontWeight:'bold'}}>All FAQs</p></div></a>
        </div>
    </div>
  </div>

  )
}

export default FAQLong
