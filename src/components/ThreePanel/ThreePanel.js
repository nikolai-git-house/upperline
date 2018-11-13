import React from 'react'
import './ThreePanel.css'


function ThreePanel(props){
  return (
    <div className="ThreePanel">
      <div className="TPcontent">
      <div>
        <div className="little-red-thing" style={{left: '17%'}}></div>
        <h2> {props.title} </h2>
      </div>
      <div className="panel-holder">
        {props.items.map((item, idx) =>{
          const imgStyle = {
            background: `url(${item.img})`,
            backgroundSize: 'cover'
          }
          return(
            <div key={idx} className="panel">
              <div className="image" style={imgStyle}> </div>
              <div className="content">
                <h4>{item.title}</h4>
                <p>{item.paragraph}</p>
                <br/>
                <p className="location">{item.location}</p>
                <p className="address"> {item.address} </p>
                <a style={{visibility: (item.location) ? '' : 'hidden'}}><p className="address"><i className="fas fa-map-marker-alt highlight-text"></i>Get Directions</p></a>
              </div>
            </div>
          )
        }

        )}
      </div>
      </div>
    </div>
  )
}

export default ThreePanel
