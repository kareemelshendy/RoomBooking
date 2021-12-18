import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper"
import Image from "next/image"
import styles from "./room.module.scss"
import { useState } from "react"
import { Map } from "../../components/map/map"

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Thumbs])

export const Room = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation
              className="mySwiper"
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className={styles.swiperImage}>
                  <Image src="/cozy-studio-apartment-with-bedroom-living-space.png" layout="fill" alt="cover image" />
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

      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-9 ">
            <div className={` shadow ${styles.room}`} dir="rtl">
              <div className={styles.roomTop}>
                <h4 className="heading heading-bold heading-3">غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</h4>
                <div className={styles.titleContent}>
                  <div className={styles.priceAndUser}>
                    <div className={` ${styles.price}`}>
                      <h4>400 L.E</h4>
                    </div>
                    <div className={`${styles.users}`}>
                      <h4>4</h4>
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <button className="btn border-darkGrey text-darkGrey w-75 ms-1 border-r ">
                      <i className="fas fa-heart "></i>
                      المفضله
                    </button>
                    <button className="btn btn-primary w-100 border-r  ">احجز</button>
                  </div>
                </div>
              </div>
              <div className={` mt-1 ${styles.details}`}>
                <h5 className="heading heading-bold heading-darkGrey">التفاصيل</h5>
                <p>غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</p>
              </div>

              <div className={`mt-1 ${styles.services}`}>
                <h5 className="heading heading-bold heading-darkGrey">الخدمات المقدمة</h5>
                <div className={styles.services_content}>
                  <div>
                    <Image src="/bed.svg" width="16px" height="16px" className={styles.icon} />
                    <p>روم سيرفيس</p>
                  </div>
                  <div>
                    <Image src="/wifi.svg" width="16px" height="16px" className={styles.icon} />
                    <p>واي فاي</p>
                  </div>
                  <div>
                    <Image src="/aircond.svg" width="16px" height="16px" className={styles.icon} />
                    <p>تكييف</p>
                  </div>
                  <div>
                    <Image src="/kitchen.svg" width="16px" height="16px" className={styles.icon} />
                    <p>مطبخ</p>
                  </div>
                </div>
              </div>

              <div className={`mt-1 ${styles.location}`}>
                <h5 className="heading heading-bold heading-darkGrey">العنوان</h5>
                <div className={styles.map}>
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className={`${styles.owner} shadow`}>
              <div className={styles.owner_top}>
                <h3 className="heading heading-bold heading-4 mb-1">مالك الغرفه</h3>
                <div className={styles.img}>
                  <Image src="/person.jpg" width="130px" height="130px" objectFit="cover" />
                </div>
              </div>
              <div className={`${styles.owner_bottom} mt-1`}>
                <p className="mb-2">حسين صابر الرفاعي</p>
                <button className="btn btn-primary w-50 btn-p  border-r ">
                  محادثة
                  <i className="fas fa-comment-dots ms-1 "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
