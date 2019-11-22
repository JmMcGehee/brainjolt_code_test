import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button,
  Navbar,
  NavbarBrand,
  Row
} from 'reactstrap';
import './App.css';

const items = [
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.10.18-AM.png',
    altText: 'Bird Drowning'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.10.07-AM-504x675.png',
    altText: 'Kid with no Head'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.58-AM.png',
    altText: 'Woman with Long Legs'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.48-AM-672x675.png',
    altText: 'Woman with NO legs'
  },
  {
    src: 'https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/Screen-Shot-2018-05-03-at-11.09.32-AM.png',
    altText: 'Dog with Hands'
  }
]

//pop slides into an array in a random order
//loop throught the array
//on the array is completely looped through reset the slides array.

//state can be a random number between 0-4

const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [slidesShown, setSlidesShown] = useState([])
  const [slidesLeft, setSlidesLeft] = useState([0,1,2,3,4])

  const randomIndex = () => {
    if (slidesLeft.length <= 1) setSlidesLeft(slidesShown)
    let num = Math.floor(Math.random() * slidesLeft.length)
    console.log(num)
    slidesShown.push(slidesLeft[num])
    slidesLeft.splice(num,1)
    console.log(slidesShown, slidesLeft)
  }

  const next = () => {
    if (animating) return
    randomIndex()
    const nextIndex = slidesShown[slidesShown.length-1]
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
        className='fit'
      >
        <img src={item.src} alt={item.altText} className='fit'/>
      </CarouselItem>
    )
  })

  useEffect(() => {

  },[slidesShown, slidesLeft])

  return (
    <div className="App">
      <Navbar color="info">
        <NavbarBrand className="text-white">BrainJolt Code Test</NavbarBrand>
      </Navbar>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        interval={false}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} />
       {slides}
      </Carousel>
      <Button
        color='info'
        size='lg'
        block
        onClick={next}
      >
        NEXT
      </Button>
    </div>
  )
}

export default App;
