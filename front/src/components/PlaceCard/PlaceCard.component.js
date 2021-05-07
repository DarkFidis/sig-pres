import React, { PureComponent } from 'react'
import './PlaceCard.css'
import { BiWorld } from 'react-icons/bi'
import { imageStrategies } from '../../assets'

class PlaceCard extends PureComponent {


  getImages = type => {
    return imageStrategies[this.props.type]
  }
  render() {
    const { address, name, rating, website, type } = this.props
    const { street, postalCode, city } = address
    return (
      <div className="c-card">
        <div className="c-image">
          <img src={this.getImages(type)} alt="" />
        </div>
        <h1>{ name }</h1>
        <p>{ street }</p>
        <p>{postalCode}   {city.toUpperCase()}</p>
        <p>Note sur Google : { rating } / 5</p>
        <div className="c-media">
          <a className="fb" href={ website }>
            <BiWorld />
          </a>
        </div>
      </div>
    )
  }
}

export default PlaceCard
