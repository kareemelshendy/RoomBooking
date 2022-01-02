import Layout from "../components/layout/layout"
import { AddRoomHOC } from "../hoc/add-room-hoc/add-room-hoc"


const CreateRoom = () => {
  return (
    <Layout title="إضافة غرفة">
      <AddRoomHOC />
    </Layout>
  )
}

export default CreateRoom
