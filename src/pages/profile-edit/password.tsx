import Layout from "../../components/layout/layout"
import { EditPasswordHOC } from "../../hoc/profile-edit-hoc/password"

const EditPassword = () => {
  return (
    <Layout title="تعديل الرقم السري">
      <EditPasswordHOC />
    </Layout>
  )
}

export default EditPassword
