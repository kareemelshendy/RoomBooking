import React, { useState } from "react"
import styles from "./home-hoc.module.scss"
import { Card } from "../../components/card/card"
import { Filter } from "../../components/filter/filter"
import { Map } from "../../components/map/map"
import { FilterHOC } from "../filter-hoc/filter-hoc"

export const HomeHOC = ({ rooms }: any) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className={styles.container}>
        {show && (
          <div className={styles.map_overlay} onClick={()=>setShow(false)}>
            <div className={styles.map_container}>
              <div className={`${styles.map} shadow`}>
                <Map setShow={setShow} />
              </div>
            </div>
          </div>
        )}

        <div className={styles.header}>
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h1 className="heading heading-1 heading-bold ">
                هل تواجه صعوبة في إختيار وجهتك القادمة؟ <span>لدينا الحل!</span>{" "}
              </h1>
            </div>
          </div>
        </div>

        <FilterHOC setShow={setShow} />

        <div className="container mr-t-4">
          <div className="row">
            <div>
              <h1 className="heading heading-3 heading-bold" dir="rtl" >غرفة قريبة منك !</h1>
            </div>
            {rooms?.map((room: any) => {
              return <Card key={room.id} room={room} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
