import Layout from "../../components/layout/layout"
import { CompletedRequestHOC } from "../../hoc/incoming-requests-hoc/completed-hoc/completed-request-hoc"

const CompletedRequest = () => {
  return (
    <Layout title="الطلبات الوارده">
      <CompletedRequestHOC />
    </Layout>
  )
}

export default CompletedRequest
