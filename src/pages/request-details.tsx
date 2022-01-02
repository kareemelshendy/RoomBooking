import Layout from "../components/layout/layout"
import { RequestDetailsHOC } from "../hoc/request-details-hoc/request-details-hoc"

const RequestDetails = () => {
  return (
    <Layout title="تفاصيل الطلب">
      <RequestDetailsHOC />
    </Layout>
  )
}

export default RequestDetails
