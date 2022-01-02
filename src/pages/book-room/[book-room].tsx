import Layout from "../../components/layout/layout"
import { BookRoomHOC } from "../../hoc/book-room-hoc/book-room-hoc"

const BookingRoom = () => {
  return (
    <Layout title="إحجز غرفة">
      <BookRoomHOC />
    </Layout>
  )
}

export default BookingRoom
