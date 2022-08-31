import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OfferCard from './OfferCard';
import { dataFormatter } from '../../util/OfferCard.util';

import Skeleton from '@mui/material/Skeleton';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function OfferCardContainer() {
  const [offerData, setOfferData] = useState([]);
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_DATA_API_URL}/products?populate=*`)
      .then((res) => {
        setOfferData(dataFormatter(res.data.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {offerData.length === 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <Skeleton variant="rounded" width={270} height={500} />
          <Skeleton variant="rounded" width={270} height={500} />
          <Skeleton variant="rounded" width={270} height={500} />
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={false}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
        >
          {offerData?.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <OfferCard key={data.id} data={data} className="card h-100" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}

export default OfferCardContainer;
