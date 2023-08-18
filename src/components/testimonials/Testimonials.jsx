import React from 'react';
// import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { FiGlobe } from 'react-icons/fi';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.fiverr.com/mytechsolution/create-responsive-wordpress-website-or-wordpress-design',
      name: 'm_umar_afzal',
      test: 'My first time of working with mytechsolution and was impressed with the speed, excellent communication and the willingness to solve a problem. I was afraid to buy from him because he was new to Fiverr but then I took the risk and buy his service and I really liked the work done by him. Definitely I will recommend this guy to everyone who is looking for a wordpress website. Would buy again. Thanks for the amazing work :)',
    },
    {
      id: 2,
      link: 'https://www.fiverr.com/mytechsolution/create-responsive-wordpress-website-or-wordpress-design',
      name: 'harisashfaq937',
      test: "By far the best seller on this platform. He understood the task and went above and beyond. Communication was excellent. I look forward to working with you again!",
    },
    {
      id: 3,
      link: 'https://www.fiverr.com/mytechsolution/create-responsive-wordpress-website-or-wordpress-design',
      name: 'samuelbradsh511',
      test: "It was a pleasure working with mytechsolution , I couldn't be happier with the outcome. From the very beginning he was extremely communicative, regularly checking in to make sure that everything was on track and that I was satisfied with the progress. Their attention to detail and commitment to delivering a high-quality product was evident in every aspect of the project. Not only was the final product exactly what I was hoping for, but was a joy to work with. He is very friendly, professional, and always went the extra mile to make sure I was happy. I would highly recommend mytechsolution to anyone looking for a top-notch website.",
    },
    {
      id: 4,
      link: 'https://www.fiverr.com/mytechsolution/create-responsive-wordpress-website-or-wordpress-design',
      name: 'samuelbradsh511',
      test: "excellent experience definitely recommend.. level of expertise is amazing",
    },

  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <FiGlobe />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials