import { FinishedReservationsComponent } from "../../../components/reservations/finished/finished-reservations"
import { Room } from "../../../models"

export const FinishedReservationsHOC = ({ rooms }: { rooms: Room[] }) => {
  return <FinishedReservationsComponent rooms={rooms} />
}
