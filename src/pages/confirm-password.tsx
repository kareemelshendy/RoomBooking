import Layout from "../components/layout/layout"
import { ConfirmPasswordHOC } from "../hoc/confirm-password-hoc/confirm-password-hoc"

const ConfirmPassword = () => {
  return (
    <Layout title="كود التحقق">
      <ConfirmPasswordHOC />
    </Layout>
  )
}

export default ConfirmPassword
