import React from 'react'
import '../css/CardTop.css'

const CardTop = ({ number, image, upSubscribers, social, followers, color, colorUpDown, downup }) => {
  return (
    <>
    <section className="card-top">
        <div className="topo">
            <img src={image} alt={image} />
            <h4>{social}</h4>
        </div>
        <div className="rodape-top">
            <h4>{number}</h4>
            <h5>{followers}</h5>
            <h6>{downup}{upSubscribers}</h6>
        </div>
    </section>
    </>
  )
}

export default CardTop