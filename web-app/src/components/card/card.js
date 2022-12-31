import React, { Component } from 'react'
import './card.css'
import chipImage from './chip.png'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clientName: this.props.clientName
    }
  }

  render () {
    return (
      <section>
        <div class='card'>
          <div class='face front'>
            <h3 class='debit'>Cartão de Débito</h3>
            <h3 class='bank'>Banco</h3>
            <img class='chip' src={chipImage} alt='chip' />
            <h3 class='number'>3000 0000 0000 0000</h3>
            <h5 class='valid'><span>Válido <br /> até</span><span>10/28</span></h5>
            <h5 class='card-holder'>{this.props.clientName}</h5>
          </div>
          <div class='face back'>
            <div class='blackbar' />
            <div class='cvvtext'>
              <div class='white-bar' />
              <div class='cvv'>123</div>
            </div>
            <p class='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis ex nec nulla posuere sollicitudin. Proin nec orci at est pellentesque malesuada eu a neque. Maecenas quis porttitor odio. Praesent faucibus dui nisl, ac luctus mauris pulvinar in. Morbi vitae ante a nunc ullamcorper rutrum. Donec non interdum purus, gravida elementum mi.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Card
