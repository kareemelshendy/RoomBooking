import Layout from "../../components/layout/layout"
import { EditInformationComponent } from "../../components/profile-edit/information/information"
import { EditInformationHOC } from "../../hoc/profile-edit-hoc/information"

const EditInformation = () => {
  return (
    <Layout title="تعديل البيانات">
      <EditInformationHOC />
    </Layout>
  )
}

export default EditInformation
