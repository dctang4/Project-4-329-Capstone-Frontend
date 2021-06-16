import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.scss'

const Footer = (props) => {
  return (
    <div className='footer'>
      <h3>Created By: Chun Hin D. Tang</h3>
      <a href='https://www.yelp.com/biz/fruity-boston' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'yelp']}/> 
      </a>
    </div>
  )
}

export default Footer