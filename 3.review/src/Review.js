import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const {id, name, job, image, text} = people[currentIndex]

  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0
    }
    if(number < 0) {
      return people.length - 1
    }
    return number
  }

  const random = () => {
    let newIndex = currentIndex
    while( newIndex === currentIndex) {
      newIndex = Math.trunc(people.length*Math.random()) 
    }
    return newIndex
  }

  const prevPerson = () => {
    let newIndex = checkNumber(currentIndex -1)
    setCurrentIndex(newIndex)
  }

  const nextPerson = () => {
    let newIndex = checkNumber(currentIndex +1)
    setCurrentIndex(newIndex)
  }

  const randomPerson = () => {
    setCurrentIndex(random())
  }

  const disPrev = () => {
    if(currentIndex > 0) {
      return true
    }
    else 
      return false
  }

  console.log(disPrev())

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 classNamp ='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevPerson} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button  onClick={nextPerson} className='next-btn'>
          <FaChevronRight />
        </button>
        <button onClick={randomPerson} className='random-btn'>
          suprise me
        </button>
      </div>
    </article>
  )
};

export default Review;
