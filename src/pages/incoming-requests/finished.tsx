import Layout from "../../components/layout/layout"
import { FinishedRequestHOC } from "../../hoc/incoming-requests-hoc/finished-hoc/finished-request-hoc"

const FinishedRequest = () => {
  return (
    <Layout title="الطلبات الوارده">
      <FinishedRequestHOC />
    </Layout>
  )
}

export default FinishedRequest