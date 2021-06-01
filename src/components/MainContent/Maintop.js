import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Maintop = () => {
  const slideImages = [
    'Images/1.jpg',
    'Images/2.jpg',
    'Images/3.jpg',
    'Images/4.jpg',
  ]

  return (
    <div className='main-top'>
      <Slide easing='ease'>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[3]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
      <div className='menu-list'>
        <ul className='list-item-0'>
          <li className='list-item-1'>
            Electronic Devices
            <ul className='secondary-list-item'>
              <li className='list-item-11'>
                Mobile
                <ul className='tertiary-list-item'>
                  <li>Xiomi</li>
                  <li>Iphone</li>
                  <li>Samsung</li>
                </ul>
              </li>
              <li className='list-item-11'>
                Tv
                <ul className='tertiary-list-item'>
                  <li>Konka</li>
                  <li>CG</li>
                  <li>LG</li>
                  <li>Motorola</li>
                  <li>Sony</li>
                </ul>
              </li>
              <li>Fridge</li>
              <li>Washing Machine</li>
            </ul>
          </li>
          <li className='list-item-1'>
            Electronic Accessories
            <ul className='secondary-list-item'>
              <li className='list-item-11'>
                Mobile
                <ul className='tertiary-list-item'>
                  <li>Phone Cases</li>
                  <li>Covers</li>
                  <li>Power Banks</li>
                </ul>
              </li>

              <li>Audio Devices</li>
              <li>Video Devices</li>
            </ul>
          </li>
          <li className='list-item-1'>
            Health & Beauty
            <ul className='secondary-list-item'>
              <li className='list-item-11'>
                Bath & Body
                <ul className='tertiary-list-item'>
                  <li> Bath & Body Accessories</li>
                  <li>Deodorants</li>
                  <li>Body Scrubs</li>
                  <li>Hand Care</li>
                </ul>
              </li>
              <li className='list-item-11'>
                Beauty Tools
                <ul className='tertiary-list-item'>
                  <li>Curling Irons & Wands</li>
                  <li>Flat Irons</li>
                  <li>Hair Dryers</li>
                  <li>Hair Removal Appliances</li>
                </ul>
              </li>
              <li>Fragrances</li>
            </ul>
          </li>
          <li className='list-item-1'>Babies & Toys</li>
          <li className='list-item-1'>Groceries & Pets</li>
          <li className='list-item-1'>Home & Lifestyle</li>
          <li className='list-item-1'>Women's Fashion</li>
          <li className='list-item-1'>Men's Fashion</li>
          <li className='list-item-1'>Watches & Accessories</li>
          <li className='list-item-1'>Sports & Outdoor</li>
          <li className='list-item-1'>Automotive & Motorbike</li>
        </ul>
      </div>
    </div>
  )
}

export default Maintop
