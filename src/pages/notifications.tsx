import Layout from "../components/layout/layout"
import { NotificationsHOC } from "../hoc/notifications-hoc/notifications-hoc"

const Notifications = () => {
  return (
    <Layout title="الإشعارات">
      <NotificationsHOC />
    </Layout>
  )
}

export default Notifications
