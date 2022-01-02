import styles from "./card.module.scss"
import Image from "next/image"

import Link from "next/link"
export const Card = ({ room, handleFav }: any) => {
  return (
    <div className={`card ${styles.card} shadow_sm `}>
      <button
        className={room.fav ? `${styles.heart} ${styles.heart_fav} ` : styles.heart}
        onClick={() => {
          handleFav(room)
        }}
      >
        <i className="fas fa-heart"></i>
      </button>
      {/* <FontAwesomeIcon icon={faKissWinkHeart} /> */}
      <Image src={room.image} className={`card-img-top ${styles.card_img}`} width="274px" height="169px" alt="" />

      <div className={`card-body ${styles.card_body}`}>
        <h4 className={`heading-5 heading-bold ${styles.title}`}>
          <Link href={`/rooms/${room.id}`}>
            <a className={`heading-dark  `}>{room.roomtitle}</a>
          </Link>
        </h4>
        <div className={`shadow_sm ${styles.price}`}>
          <h5>{room.price} L.E</h5>
        </div>
        <div className={`shadow_sm ${styles.users}`}>
          <h5>{room.numberOfUsers}</h5>
          <i className="fas fa-user"></i>
        </div>

        <div className={styles.location}>
          <p className={`card-text ${styles.card_text}`}>{room.location}</p>

          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
    </div>
  )
}
