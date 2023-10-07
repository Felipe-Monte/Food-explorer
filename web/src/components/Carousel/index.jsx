import { Container } from './styles'
import { useEffect, useState, useRef } from 'react'

import { Button } from '../Button'

export function Carousel({ title }) {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    fetch("http://localhost:5173/src/dishes.json")
      .then((response) => response.json())
      .then(setData)
  }, [])

  if (!data || !data.length) return null

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <Container >
      <div className='button-left' onClick={handleLeftClick}></div>

      <h3>{title}</h3>

      <div className="container-carousel" ref={carousel}>

        {data.map((item) => (

          <div className='carousel'>

            <div className='card' key={item.id}>

              <div className='container-img'>
                <img src={item.imagePath} alt={`foto do prato ${item.name}`} />
              </div>

              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span>{item.price}</span>

              <div className='container-button'>
                <Button title="Incluir" />
                <Button title="Incluir" />
              </div>

            </div>

          </div>
        ))}
      </div>

      <div className='button-right' onClick={handleRightClick}></div>

    </Container>
  )
}
