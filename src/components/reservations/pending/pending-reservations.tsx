import { Room } from "../../../models"

import { ReservationsGrid } from "../../reservations-grid/reservations-grid"
import { ReservationsTap } from "../../reservations-tap/reservations-tap"
import styles from "./pending-reservations.module.scss"
export const PendingReservationsComponent = ({ rooms }: { rooms: Room[] }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="heading heading-bold heading-3 mb-2" dir="rtl">
          حجوزاتي
        </h2>
        <div className={styles.container}>
          <ReservationsGrid rooms={rooms} />
          <ReservationsTap />
        </div>
      </div>
    </div>
  )
}
