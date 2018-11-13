import React from 'react'
import './WhatYoullLearn.css'

function WhatYoullLearn(props){
  return(
    <div className="WhatYoullLearn pdp_detail" id="WhatYoullLearn">
      <div className="learn-header">
        <h3 >What you'll learn </h3>
      </div>

      <div className="synopsis">
        <p>{props.synopsis}</p>
      </div>
      <div className="item-grid">
        {props.learnitems.map((item,idx)=>{
          return(
            <div className="learn-item learn-item-right" key={idx}>
              <div className="number-left">
                <p>0{idx+1}.</p>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhatYoullLearn
