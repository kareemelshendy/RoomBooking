import Layout from "../../components/layout/layout"
import { PendingRequestHOC } from "../../hoc/incoming-requests-hoc/pending-hoc/pending-request-hoc"

const PendingRequest = () => {
  return (
    <Layout title="الطلبات الوارده">
      <PendingRequestHOC />
    </Layout>
  )
}

export default PendingRequest