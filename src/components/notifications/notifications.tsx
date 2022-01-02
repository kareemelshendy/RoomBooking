import Link from "next/link"
import styles from "./notifications.module.scss"

export const NotificationsComponent = () => {
  return (
    <section>
      <div className="container mt-3 mb-3 " dir="rtl">
        <div className="row">
          <div className="mb-2">
            <h2 className="heading heading-3 heading-bold">الإشعارات</h2>
          </div>
          <div className="col-md-12">
            <div className={`shadow_sm ${styles.notifications} `}>
              <Link href="/request-details">
                <a className={styles.link}>
                  <div className={`${styles.notification} ${styles.new}`}>
                    <p className={styles.notification_title}>تمت الموافقة على طلبك لحجز غرفة “ غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة …” برجاء الدفع الآن .</p>
                    <p className={styles.notification_time}>
                      12:43<span>am</span>
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/request-details">
                <a className={styles.link}>
                  <div className={`${styles.notification} ${styles.new}`}>
                    <p className={styles.notification_title}>تمت الموافقة على طلبك لحجز غرفة “ غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة …” برجاء الدفع الآن .</p>
                    <p className={styles.notification_time}>
                      12:43<span>am</span>
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/request-details">
                <a className={styles.link}>
                  <div className={styles.notification}>
                    <p className={styles.notification_title}>تمت الموافقة على طلبك لحجز غرفة “ غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة …” برجاء الدفع الآن .</p>
                    <p className={styles.notification_time}>
                      12:43<span>am</span>
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/request-details">
                <a className={styles.link}>
                  <div className={styles.notification}>
                    <p className={styles.notification_title}>تمت الموافقة على طلبك لحجز غرفة “ غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة …” برجاء الدفع الآن .</p>
                    <p className={styles.notification_time}>
                      12:43<span>am</span>
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/request-details">
                <a className={styles.link}>
                  <div className={styles.notification}>
                    <p className={styles.notification_title}>تمت الموافقة على طلبك لحجز غرفة “ غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة …” برجاء الدفع الآن .</p>
                    <p className={styles.notification_time}>
                      12:43<span>am</span>
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
