import Layout from "../../components/layout/layout"
import { AcceptedRequestHOC } from "../../hoc/incoming-requests-hoc/accepted-hoc/accepted-request-hoc"


const AcceptedRequest = () => {
  return (
    <Layout title="الطلبات الوارده">
      <AcceptedRequestHOC />
    </Layout>
  )
}

export default AcceptedRequest