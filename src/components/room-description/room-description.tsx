import Image from "next/image"
import { useRouter } from "next/router"
import { Button } from "../button/button"

import { Map } from "../map/map"

import styles from "./room-description.module.scss"

export const RoomDescription = ({ buttons }: any) => {
  const router = useRouter()
  return (
    <>
      <div className={styles.roomTop}>
        <h2 className="heading heading-bold heading-3">غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</h2>
        <div className={styles.titleContent}>
          <div className={styles.priceAndUser}>
            <div className={` ${styles.price}`}>
              <p>400 L.E</p>
            </div>
            <div className={`${styles.users}`}>
              <i className="fas fa-user"></i>
              <p>4</p>
            </div>
          </div>

          {buttons && (
            <div className={styles.buttons}>
              <Button textColor="text-darkGrey" width="w-75" border="border-darkGrey" ms="ms-1">
                <i className={`fas fa-heart ms-6`}></i>
                المفضلة
              </Button>
              <Button
                onClick={() => {
                  router.push("/book-room/1")
                }}
                bgColor="btn-primary"
                width="w-100"
                padding="btn-p"
              >
                أحجز
              </Button>
              {/* <button className="btn btn-primary w-100 border-r  ">احجز</button> */}
            </div>
          )}
        </div>
      </div>
      <div className={` mt-1 ${styles.details}`}>
        <h3 className="heading heading-bold heading-darkGrey">التفاصيل</h3>
        <p>غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</p>
      </div>

      <div className={`mt-1 ${styles.services}`}>
        <h3 className="heading heading-bold heading-darkGrey">الخدمات المقدمة</h3>
        <div className={styles.services_content}>
          <div>
            <i className="fas fa-bed"></i>
            <p>روم سيرفيس</p>
          </div>
          <div>
            <i className="fas fa-wifi"></i>
            <p>واي فاي</p>
          </div>
          <div>
            <i className="fas fa-snowflake"></i>
            <p>تكييف</p>
          </div>
          <div>
            <i className="fas fa-utensils"></i>
            <p>مطبخ</p>
          </div>
        </div>
      </div>

      <div className={`mt-1 ${styles.location}`}>
        <h3 className="heading heading-bold heading-darkGrey">العنوان</h3>
        <div className={styles.map}>
          <Map borderRadius='border-r' />
        </div>
      </div>
    </>
  )
}
