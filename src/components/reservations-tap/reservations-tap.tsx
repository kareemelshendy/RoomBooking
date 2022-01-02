import Link from "next/link"
import { useRouter } from "next/router"
import { Nav } from "react-bootstrap"
import styles from "./reservations-tap.module.scss"

export const ReservationsTap = () => {
  const router = useRouter()
  return (
    <div className="col-md-3">
      <Nav defaultActiveKey="/home" className={`border-r ${styles.list} shadow_sm`} dir="rtl">
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/reservations/pending" ? "active" : ""}`}>
          <Link href="/reservations/pending">
            <a>قيد الانتظار</a>
          </Link>
        </Nav.Item>
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/reservations/accepted" ? "active" : ""}`}>
          <Link href="/reservations/accepted">
            <a>موافق عليها</a>
          </Link>
        </Nav.Item>
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/reservations/completed" ? "active" : ""}`}>
          <Link href="/reservations/completed">
            <a>مكتمله</a>
          </Link>
        </Nav.Item>
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/reservations/cancelled" ? "active" : ""}`}>
          <Link href="/reservations/cancelled">
            <a>ملغية</a>
          </Link>
        </Nav.Item>
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/reservations/finished" ? "active" : ""}`}>
          <Link href="/reservations/finished">
            <a>منتهية</a>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
