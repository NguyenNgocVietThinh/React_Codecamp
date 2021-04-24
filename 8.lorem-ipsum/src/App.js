import React, { useState } from 'react';
import data from './data';
function App() {
  const [texts, setTexts] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count)
    let amount = parseInt(count)
    if(amount > data.length)
    {
      setTexts(data)
      return
    }
    if(amount <= 0)
    {
     amount = 1
    }
    const newData = data.slice(0,amount)
    console.log(newData)
    setTexts(newData)
  }

  return (
  <section className='section-center'>
    <h3>lorem ipsum project is useful ?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraph:</label>
      <input
        type='number'
        name='amount'
        id='amount'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      ></input>
      <button type='submit' className='btn'>Generate</button>
    </form>
    <article className='lorem-text'>
      {
        texts.map((text,index) => {
          return (
            <p key={index}>{text}</p>
          )
        })
      }
    </article>
  </section>
  )
}

export default App;
