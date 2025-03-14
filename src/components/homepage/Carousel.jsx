import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../Card/Card.jsx';

export default function Carousel() {

  const cardIds = [1,2,3];

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      margin-left={10}
    > 
    {cardIds.map(id => (
                       <SwiperSlide key={id}> <Card key={id} id={id} page={"homepage"} /></SwiperSlide>
                    ))}
      
    </Swiper>
  );
};
