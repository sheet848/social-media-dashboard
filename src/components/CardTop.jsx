import React from 'react'
import '../css/CardTop.css'

const CardTop = ({ number, image, upSubscribers, social, followers, color, colorUpDown, downup }) => {

  const corBorder = { borderColor: color }
  const UpDown = { color: colorUpDown }

  return (
    <>
    <section className="card-top" style={corBorder}>
        <div className="topo">
            <img src={image} alt={image} />
            <h4>{social}</h4>
        </div>
        <div className="rodape-top">
            <h4>{number}</h4>
            <h5>{followers}</h5>
            <h6 style={UpDown}>{downup}{upSubscribers}</h6>
        </div>
    </section>
    </>
  )
}

export default CardTop
