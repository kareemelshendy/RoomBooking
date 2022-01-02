import { CompletedReservationsComponent } from "../../../components/reservations/completed/completed-reservations"
import { Room } from "../../../models"

export const CompletedReservationsHOC = ({ rooms }: { rooms: Room[] }) => {
  return <CompletedReservationsComponent rooms={rooms} />
}
