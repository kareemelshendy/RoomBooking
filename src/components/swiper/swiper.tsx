import Image from "next/image"
import SwiperClass from "swiper/types/swiper-class"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation, Thumbs, Autoplay, Controller } from "swiper"

import styles from "./swiper.module.scss"
export const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>()
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass>()

  return (
    <>
      <div>
        <Swiper
          modules={[Controller, Pagination, Navigation, Thumbs]}
          slidesPerView={1}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          loop={true}
          navigation
          className={`mySwiper`}
          onSlideChange={() => console.log("slide change")}
          thumbs={{ swiper: controlledSwiper }}
          controller={{ control: controlledSwiper }}
        >
          <SwiperSlide>
            <div className={styles.swiperImage}>
              <Image src="/cozy-studio-apartment-with-bedroom-living-space.png" layout="fill" alt="cover image" priority />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperImage}>
              <Image src="/diningroom.jpg" layout="fill" alt="cover image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperImage}>
              <Image src="/livingroom.jpg" layout="fill" alt="cover image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperImage}>
              <Image src="/kids.jpg" layout="fill" alt="cover image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperImage}>
              <Image src="/white-sofra.jpg" layout="fill" alt="cover image" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.control}>
          <Swiper modules={[Controller, Thumbs]} freeMode={true} slidesPerView={5} spaceBetween={16} watchSlidesProgress={true} onSwiper={setControlledSwiper} className="mySwiper2">
            <SwiperSlide>
              <div className={` ${styles.swiperThumbs}`}>
                <Image src="/cozy-studio-apartment-with-bedroom-living-space.png" layout="fill" alt="cover image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperThumbs}>
                <Image src="/diningroom.jpg" layout="fill" alt="cover image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperThumbs}>
                <Image src="/livingroom.jpg" layout="fill" alt="cover image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperThumbs}>
                <Image src="/kids.jpg" layout="fill" alt="cover image" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperThumbs}>
                <Image src="/white-sofra.jpg" layout="fill" alt="cover image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

{
  /* <div className="container mt-3">
        <div className="row">
          <div className="col">
            <Swiper
              modules={[Pagination, Navigation, Thumbs]}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation
              className="mySwiper"
              thumbs={{ swiper: thumbsSwiper }}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className={styles.swiperImage}>
                  <Image src="/cozy-studio-apartment-with-bedroom-living-space.png" layout="fill" alt="cover image" priority />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperImage}>
                  <Image src="/diningroom.jpg" layout="fill" alt="cover image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperImage}>
                  <Image src="/livingroom.jpg" layout="fill" alt="cover image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperImage}>
                  <Image src="/kids.jpg" layout="fill" alt="cover image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.swiperImage}>
                  <Image src="/white-sofra.jpg" layout="fill" alt="cover image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className={styles.control}>
              <Swiper modules={[Thumbs]} slidesPerView={5} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
                <SwiperSlide>
                  <div className={` ${styles.swiperThumbs}`}>
                    <Image src="/cozy-studio-apartment-with-bedroom-living-space.png" layout="fill" alt="cover image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swiperThumbs}>
                    <Image src="/diningroom.jpg" layout="fill" alt="cover image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swiperThumbs}>
                    <Image src="/livingroom.jpg" layout="fill" alt="cover image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swiperThumbs}>
                    <Image src="/kids.jpg" layout="fill" alt="cover image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swiperThumbs}>
                    <Image src="/white-sofra.jpg" layout="fill" alt="cover image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> */
}
