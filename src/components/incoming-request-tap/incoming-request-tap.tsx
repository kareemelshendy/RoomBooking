import Link from "next/link"
import { useRouter } from "next/router"
import { Nav } from "react-bootstrap"

import styles from "./incoming-request-tap.module.scss"
export const IncomingRequestTap = () => {
  const router = useRouter()
  return (
    <div className="col-md-3" dir="rtl">
      <div className={styles.status}>
        <Nav defaultActiveKey="/home" className={`border-r ${styles.list} shadow_sm`} dir="rtl">
          <Nav.Item className={`${styles.list_item} ${router.asPath === "/incoming-requests/pending" ? "active" : ""}`}>
            <Link href="/incoming-requests/pending">
              <a>قيد الانتظار</a>
            </Link>
          </Nav.Item>
          <Nav.Item className={`${styles.list_item} ${router.asPath === "/incoming-requests/accepted" ? "active" : ""}`}>
            <Link href="/incoming-requests/accepted">
              <a>موافق عليها</a>
            </Link>
          </Nav.Item>
          <Nav.Item className={`${styles.list_item} ${router.asPath === "/incoming-requests/completed" ? "active" : ""}`}>
            <Link href="/incoming-requests/completed">
              <a>مكتمله</a>
            </Link>
          </Nav.Item>
          <Nav.Item className={`${styles.list_item} ${router.asPath === "/incoming-requests/cancelled" ? "active" : ""}`}>
            <Link href="/incoming-requests/cancelled">
              <a>ملغية</a>
            </Link>
          </Nav.Item>
          <Nav.Item className={`${styles.list_item} ${router.asPath === "/incoming-requests/finished" ? "active" : ""}`}>
            <Link href="/incoming-requests/finished">
              <a>منتهية</a>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}
