import Link from "next/link"
import { useRouter } from "next/router"
import { Nav } from "react-bootstrap"
import styles from "./profile-edit-tap.module.scss"

export const ProfileEditTap = () => {
  const router = useRouter()
  return (
    <div className="col-md-3">
      <Nav defaultActiveKey="/home" className={`border-r ${styles.list} shadow_sm`} dir="rtl">
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/profile-edit/information" ? "active" : ""}`}>
          <Link href="/profile-edit/information">
            <a>البيانات الشخصية</a>
          </Link>
        </Nav.Item>
        <Nav.Item className={`${styles.list_item} ${router.asPath === "/profile-edit/password" ? "active" : ""}`}>
          <Link href="/profile-edit/password">
            <a>كلمة المرور</a>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
