import Link from "next/link"
import { useRouter } from "next/router"
import { Nav } from "react-bootstrap"
import { Button } from "../button/button"
import { ProfileImage } from "../profileImage/profile-image"
import styles from "./request-details.module.scss"

export const RequestDetailsComponent = () => {
  const router = useRouter()
  return (
    <div className="container mt-3">
      <div className={`row ${styles.row}`}>
        <div className="col-md-9 " dir="rtl">
          <div className={` shadow_sm border-r ${styles.request_container}`}>
            <h2 className="heading-dark heading-3 heading-bold mb-1">غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك</h2>
            <div className={styles.request_info}>
              <div className={styles.status}>
                <div>
                  <h3 className={`heading-bold heading-5 heading-darkGrey  ${styles.infoTitle}`}>الحاله</h3>
                  <p>قيد الانتظار</p>
                </div>
              </div>
              <div className={styles.numberOfUsers}>
                <div>
                  <h3 className={`heading-bold heading-5 heading-darkGrey  ${styles.infoTitle}`}>عدد الافراد</h3>
                  <p>
                    <i className="fas fa-user"></i> 4
                  </p>
                </div>
              </div>
              <div className={styles.date}>
                <div>
                  <h3 className={`heading-bold heading-5 heading-darkGrey  ${styles.infoTitle}`}>من تاريخ</h3>
                  <p dir="ltr">9 November</p>
                </div>
              </div>
              <div className={styles.date}>
                <div>
                  <h3 className={`heading-bold heading-5 heading-darkGrey  ${styles.infoTitle}`}>إلي تاريخ</h3>
                  <p dir="ltr">25 December</p>
                </div>
              </div>
              <div className={styles.price}>
                <div>
                  <h3 className={`heading-bold heading-5 heading-darkGrey  ${styles.infoTitle}`}>السعر الإجمالي </h3>
                  <p dir="ltr">750 L.E</p>
                </div>
              </div>
            </div>
            <div className={styles.notes}>
              <h3 className="heading-bold heading-darkGrey ">ملاحظات</h3>
              <p>عايز غرفة تكون هادية وبعيدة عن الدوشة وفيها كل المشتملات وتكون ليها بلكونة والاضائة واصلالها بشكل كويس عايز غرفة تكون هادية وبعيدة عن الدوشة وفيها كل المشتملات وتكون ليها بلكونة والاضائة واصلالها بشكل كويس عايز غرفة تكون هادية وبعيدة عن الدوشة وفيها كل المشتملات وتكون ليها بلكونة والاضائة واصلالها بشكل كويس .</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <div className={styles.button}>
              <Button bgColor="btn-primary" padding="btn-p" width="w-100">
                موافق
              </Button>
            </div>
            <div className={styles.button}>
              <Button borderColor="border-primary" padding="btn-p" textColor="text-primary" width="w-100">
                إلغاء
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Nav defaultActiveKey="/home" className={`border-r ${styles.list} shadow_sm`} dir="rtl">
            <Nav.Item className={`${styles.list_item} ${router.asPath === "/request-details" ? "active" : ""}`}>
              <Link href="request-details">
                <a>تفاصيل الطلب</a>
              </Link>
            </Nav.Item>
            <Nav.Item className={styles.list_item}>
              <Link href="room-details">
                <a>تفاصيل الغرفة</a>
              </Link>
            </Nav.Item>
          </Nav>

          <div className={`${styles.request_owner} shadow_sm border-r`}>
            <h3 className="heading-4 heading-bold">مقدم الطلب</h3>
            <ProfileImage width="130px" height="130.76px" />
            <p className="heaidng-4 heading-semiBold heading-darkGrey mt-1 mb-1">حسين صابر الرفاعي </p>
            <div className={styles.button}>
              <Button bgColor="btn-primary" width="w-100" padding="btn-p">
                محادثة
                <i className="fas fa-comment-dots"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
