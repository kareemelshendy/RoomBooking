import { CancelledReservationsComponent } from "../../../components/reservations/cancelled/cancelled-reservations"
import { Room } from "../../../models"

export const CancelledReservationsHOC = ({ rooms }: { rooms: Room[] }) => {
  return <CancelledReservationsComponent rooms={rooms} />
}
