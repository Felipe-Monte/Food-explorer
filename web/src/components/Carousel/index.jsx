import { Container } from './styles'
import { useEffect, useState } from 'react'

import { Button } from '../Button'

export function Carousel() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5173/src/dishes.json")
      .then((response) => response.json())
      .then(setData)
  }, [])

  if (!data || !data.length) return null

  return (
    <Container>

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

    </Container>
  )
}
