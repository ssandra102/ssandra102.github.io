
import Card from '../Card/Card.jsx'
import '../styles/content.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Projects({ cardIds }) {

    return (

        <>  
        
            <section className='card-details-parent top-right' style={{display: 'flex',justifyContent: 'flex-end'}}>
            
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    margin-left={10}
                >
                    {cardIds.map(id => (
                       <SwiperSlide key={id}><Card key={id} id={id} page={"projects"} /></SwiperSlide> 
                    ))}
                </Swiper>
                {/* <span>scroll</span> */}
            </section>
        </>
    )
}