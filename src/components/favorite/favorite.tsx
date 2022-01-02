import { Room } from "../../models"
import { RoomsGrid } from "../Rooms-grid/rooms-grid"

export const FavoriteComponent = ({ rooms }: { rooms: Room[] }) => {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="mb-2">
          <h2 className="heading heading-3 heading-bold" dir="rtl">
            المفضلات
          </h2>
        </div>

        <RoomsGrid rooms={rooms} />
      </div>
    </div>
  )
}
