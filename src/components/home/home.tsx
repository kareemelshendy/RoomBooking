import styles from "./home.module.scss"
import { Map } from "../map/map"
import { FilterHOC } from "../../hoc/filter-hoc/filter-hoc"
import { Card } from "../card/card"
import { RoomsGrid } from "../Rooms-grid/rooms-grid"

export const HomeComponent = ({ allRooms, show, setShow, handleFav }: any) => {
  return (
    <>
      <div className={` ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h2 className="heading heading-1 heading-bold ">
                هل تواجه صعوبة في إختيار وجهتك القادمة؟ <span>لدينا الحل!</span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <FilterHOC setShow={setShow} />
        <div className="container mt-4 ">
          <div className="row">
            <div className="mb-1">
              <h2 className="heading heading-3 heading-bold" dir="rtl">
                غرفة قريبة منك !
              </h2>
            </div>

            <RoomsGrid rooms={allRooms} handleFav={handleFav} />
          </div>
        </div>
      </div>
    </>
  )
}
