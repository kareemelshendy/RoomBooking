import { Card } from "../card/card"
import styles from "./reservations-grid.module.scss"

export const ReservationsGrid = ({ rooms }: any) => {
  return (
    <div className={`col-md-9 border-r ${styles.col}`}>
      <div className={styles.room_container}>
        {rooms.map((room:any) => {
          return <Card key={room.id} room={room} />
        })}
      </div>
    </div>
  )
}
