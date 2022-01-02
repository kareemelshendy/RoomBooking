import { AcceptedReservationsComponent } from "../../../components/reservations/accepted/accepted-reservations"
import { Room } from "../../../models"

export const AcceptedReservationsHOC = ({ rooms }: { rooms: Room[] }) => {
  return <AcceptedReservationsComponent rooms={rooms} />
}
