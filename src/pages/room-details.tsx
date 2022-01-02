import Layout from "../components/layout/layout"
import { RoomDetailsHOC } from "../hoc/room-details-hoc/room-details-hoc"

const RoomDetails = () => {
  return (
    <Layout title="تفاصيل الغرفة">
      <RoomDetailsHOC />
    </Layout>
  )
}

export default RoomDetails
