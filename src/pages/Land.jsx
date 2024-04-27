import React from 'react'
import { BarOfNav } from '../components'
import Wrapper from '../assets/wrappers/Land'


const Land = () => {
  return (
    <Wrapper>
      <div className='hero-image'>

        <BarOfNav />
        <div className='box'>

          <div className='hero-text'>
            <h1>
              Explore the world of cinema with nexus
            </h1>
            <p>
              Unlock a World of Movies! Browse, Stream, Enjoy.
            </p>
          </div>
        </div>
      </div>

    </Wrapper>

  )
}

export default Land