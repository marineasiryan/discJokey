import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Pagination } from "swiper";
import PodcastCard from "../../components/podcastCard/PodcastCard";

const Podcasts = () => {
  return (
    <div className="podcasts">
      <div className=" container ">
        <h2 className="heading_primary heading_primary--lcenter">
          Upcoming Podcasts
        </h2>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // spaceBetween={30}
          // freeMode={true}
          centeredSlides={false}
          // slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          modules={[Autoplay, Keyboard, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PodcastCard textTop="Coming soon 1" image="https://cdn.shopify.com/s/files/1/0526/6731/8431/files/Shadow_live_1400x.jpg?v=1613237916" textBottom="9 January" title="Mixmaster Mik" />
          </SwiperSlide>
          <SwiperSlide>
          <PodcastCard textTop="Coming soon 2" image="https://media.pitchfork.com/photos/5931d52731bcdd124292a9a4/master/w_658,h_520,c_limit/191183da.jpg" textBottom="19 January" title="Adam Portman" />

          </SwiperSlide>
          <SwiperSlide>
          <PodcastCard textTop="Coming soon 1" image="https://thevinylfactory.com/wp-content/uploads/2019/04/DJRashad-B1.jpg" textBottom="29 January" title="DJ Christophor" />

          </SwiperSlide>
          <SwiperSlide>
          <PodcastCard textTop="Coming soon 1" image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/04/28/09/Rashad.JPG?quality=75&width=982&height=726&auto=webp" textBottom="911 January" title="Robert Smith" />

          </SwiperSlide>
          <SwiperSlide>
          <PodcastCard textTop="Coming soon 1" image="https://lh3.googleusercontent.com/RqaRtnUYjrAny-LdrdP1XPc8d4aa860zjLkVOiLPY8BtwsrJOxNLB2Egrq9vEaeyKfztWLwtnmbBFkLgApFDXKTV9od2VnVQYR4=s1500-pp" textBottom="78 January" title="Mixmaster Mik" />

          </SwiperSlide>
          <SwiperSlide>
          <PodcastCard textTop="Coming soon 1" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n7p4f-jHmzeYzVgkq9HcGrmEaJDwN2wjcWRLE_OJheG60C42I5FGIPp0f1WCvau8vNw&usqp=CAU" textBottom="11 January" title="John Sanchez" />

          </SwiperSlide>
          {/* <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Podcasts;
