import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/images/leonard.jpg'
import img2 from '../assets/images/peaky.jpg'
import img3 from '../assets/images/john.jpg'
const Caro = () => {
    return (
        <div className='d-flex justify-content-center '>

            <Carousel className='w-75'>
                <Carousel.Item>
                    <img
                        className="caro-img d-block w-60"
                        src={img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Shutter Island</h3>
                        <p>Shutter Island is a 2010 American neo-noir psychological thriller film directed by Martin Scorsese. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" caro-img d-block w-60"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <i class="fa fa-quote-left"></i>
                        <h3>Peaky Blinders</h3>
                        <p>A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" caro-img d-block w-60"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>John Wick</h3>
                        <p>John Wick is an American neo-noir action film series and media franchise created by Derek Kolstad.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel >

        </div>
    )
}

export default Caro