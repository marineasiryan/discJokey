import React from "react";
import AboutInfo from "../../info_text.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AboutUsInfo from "../../components/AboutUsInfo";

const AboutUs = () => {
  console.log(AboutInfo);
  return (
    <div className="about">
      <div className="about_us">
        <div className="about_us-swiper">
          <Swiper
            //  spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {AboutInfo &&
              AboutInfo.length &&
              AboutInfo.map((item) => {
                console.log(item);
                return (
                  <SwiperSlide>
                    <AboutUsInfo
                      title={item.title}
                      description1={item.description1}
                      description2={item.description2}
                      description3={item.description3}
                      description4={item.description4}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
