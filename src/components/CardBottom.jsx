import React from 'react'
import '../css/CardBottom.css'

const CardBottom = ({ numHead, image, upSubscribers, followers, colorUpDown, downup }) => {

  const UpDown = { color: colorUpDown }

  return (
    <>
    <section className="card-bottom">
        <div className="topo">
            <h4>{numHead}</h4>
            <img src={image} alt={image} />
        </div>
        <div className="rodape-bottom">
            <h5>{followers}</h5>
            <h6 style={UpDown}>{downup}{upSubscribers}</h6>
        </div>
    </section>
    </>
  )
}

export default CardBottom
