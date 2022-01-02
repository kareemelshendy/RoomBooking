import styles from "./room.module.scss"

import { Button } from "../button/button"
import { ProfileImage } from "../profileImage/profile-image"
import { SwiperComponent } from "../swiper/swiper"
import { RoomDescription } from "../room-description/room-description"

// install Swiper modules
// SwiperCore.use()

export const Room = () => {
  return (
    <>
      <section>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col">
              <SwiperComponent />
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-9 ">
            <div className={` shadow_sm ${styles.room}`} dir="rtl">
              <RoomDescription buttons={true} />
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className={`${styles.owner} shadow_sm`}>
              <div className={styles.owner_top}>
                <h3 className="heading heading-bold heading-4 mb-1">مالك الغرفه</h3>
                <ProfileImage width="130px" height="130px" />
              </div>
              <div className={`${styles.owner_bottom} mt-1`}>
                <p className="mb-2">حسين صابر الرفاعي</p>
                <Button width="w-50" bgColor="btn-primary" padding="btn-p">
                  محادثة
                  <i className="fas fa-comment-dots ms-1 "></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
