import Layout from "../../components/layout/layout"
import { CancelledRequestHOC } from "../../hoc/incoming-requests-hoc/cancelled-hoc/cancelled-request-hoc"


const CancelledRequest = () => {
  return (
    <Layout title="الطلبات الوارده">
      <CancelledRequestHOC />
    </Layout>
  )
}

export default CancelledRequest