import { FavoriteComponent } from "../../components/favorite/favorite"
import { Room } from "../../models"

export const FavoriteHOC = ({ rooms }: { rooms: Room[] }) => {
  return <FavoriteComponent rooms={rooms} />
}
