import { PendingReservationsComponent } from "../../../components/reservations/pending/pending-reservations"
import { Room } from "../../../models"

export const PendingReservationsHOC = ({ rooms }: { rooms: Room[] }) => {
  return <PendingReservationsComponent rooms={rooms} />
}
