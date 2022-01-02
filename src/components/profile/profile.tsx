import { useRouter } from "next/router"
import { Room } from "../../models"
import { Button } from "../button/button"
import { Card } from "../card/card"
import { ProfileBackGround } from "../profile-backgreound/profile-background"
import { ProfileImage } from "../profileImage/profile-image"
import { RoomsGrid } from "../Rooms-grid/rooms-grid"

import styles from "./profile.module.scss"
export const ProfileComponent = ({ rooms }: { rooms: Room[] }) => {
  const router = useRouter()
  return (
    <>
      <ProfileBackGround />
      <div className="container mb-3" dir="rtl">
        <div className="row">
          <div className={styles.profile_top}>
            <div className={styles.profile_container}>
              <ProfileImage width="160px" height="160px" />
              <div className={styles.profile_content}>
                <h2 className={styles.profile_usename}>حسين صابر الرفاعي </h2>
                <p>
                  <i className="fas fa-door-open"></i>
                  24 غرفة
                </p>
              </div>
            </div>

            <div className={styles.button}>
              <Button
                width="w-100"
                bgColor="btn-light"
                borderColor="border-primary"
                padding="btn-p"
                onClick={() => {
                  router.push("/profile-edit/information")
                }}
              >
                تعديل الحساب
              </Button>
              {/* <button className="btn btn-primary w-100">تعديل الحساب</button> */}
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <RoomsGrid rooms={rooms} />
        </div>
      </div>
    </>
  )
}
