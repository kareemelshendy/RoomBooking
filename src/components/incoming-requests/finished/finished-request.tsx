
import { IncomingRequestTap } from "../../incoming-request-tap/incoming-request-tap"
import { RequestCard } from "../../request-card/request-card"
import styles from "./finished-request.module.scss"

export const FinishedRequestComponent = () => {
  return (
    <div className="container mt-3">
      <div className={`row`}>
        <h2 className="heading heading-bold heading-3 mb-2" dir="rtl">
          الطلبات الواردة
        </h2>
        <div className={styles.container}>
          <div className="col-md-9" dir="rtl">
            <RequestCard />
            <RequestCard />
            <RequestCard />
          </div>
          <IncomingRequestTap />
        </div>
      </div>
    </div>
  )
}
