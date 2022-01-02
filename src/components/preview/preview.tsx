import { useState } from "react"
import { Modal } from "react-bootstrap"
import { Button } from "../button/button"
import { ProfileBackGround } from "../profile-backgreound/profile-background"
import { ProfileImage } from "../profileImage/profile-image"
import { RoomDescription } from "../room-description/room-description"
import { SwiperComponent } from "../swiper/swiper"
import styles from "./preview.module.scss"
export const PreviewComponent = ({ showDisable, setShowDisable, handleDisable, showDelete, handleDelete, setShowDelete }: any) => {
  const [buttons, setButtons] = useState(false)
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

            <div className={styles.buttons}>
              <div className={styles.button}>
                <Button width="w-100" bgColor="btn-light" borderColor="border-primary" textColor="text-primary" padding="btn-p">
                  <i className="fas fa-pen"></i>
                  تعديل
                </Button>
              </div>
              <div className={styles.button}>
                <Button
                  width="w-100"
                  bgColor="btn-light"
                  borderColor="border-darkGrey"
                  textColor="text-darkGrey"
                  padding="btn-p"
                  onClick={() => {
                    setShowDisable(true)
                  }}
                >
                  <i className="fas fa-times-circle"></i>
                  تعطيل
                </Button>
              </div>
              <div className={styles.button}>
                <Button
                  width="w-100"
                  bgColor="btn-light"
                  borderColor="border-danger"
                  textColor="text-danger"
                  padding="btn-p"
                  onClick={() => {
                    setShowDelete(true)
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                  حذف
                </Button>
              </div>
            </div>
          </div>

          <div className={`${styles.content} mt-3`}>
            <SwiperComponent />
            <div className="mt-2">
              <div className={`shadow_sm ${styles.room}`} dir="rtl">
                <RoomDescription buttons={buttons} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showDisable} onHide={handleDisable} dialogClassName="disable">
        <Modal.Header closeButton>
          <Modal.Title>تعطيل خدمة الغرفة</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل تريد تعطيل خدمة الغرفة بشكل مؤقت ؟</Modal.Body>
        <Modal.Footer>
          <div className="button">
            <Button borderColor="border-primary" textColor="text-primary" width="w-100" padding="py-9" onClick={handleDisable}>
              تراجع
            </Button>
          </div>
          <div className="button">
            <Button bgColor="btn-primary" width="w-100" padding="py-9" onClick={handleDisable}>
              تعطيل
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleDelete} dialogClassName="disable">
        <Modal.Header closeButton>
          <Modal.Title>حذف الغرفة</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل تريد حذف الغرفة من قائمتك ؟</Modal.Body>
        <Modal.Footer>
          <div className="button">
            <Button borderColor="border-primary" textColor="text-primary" width="w-100" padding="py-9" onClick={handleDelete}>
              تراجع
            </Button>
          </div>
          <div className="button">
            <Button bgColor="btn-primary" width="w-100" padding="py-9" onClick={handleDelete}>
              حذف
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
