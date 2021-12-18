import styles from "./card.module.scss"
import Image from "next/image"

import Link from "next/link"
export const Card = ({ room, toggleFav, setToggleFav, handleFav }: any) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className={`card ${styles.card} shadow-sm mt-2 `}>
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
          <div className={`shadow-sm ${styles.price}`}>
            <h4>{room.price} L.E</h4>
          </div>
          <div className={`shadow-sm ${styles.users}`}>
            <h4>{room.numberOfUsers}</h4>
            <i className="fas fa-user"></i>
          </div>
          <Link href={`/rooms/${room.id}`}>
            <a>
              <h5 className="card-title heading-5 heading-bold heading-dark ">{room.roomtitle}</h5>
            </a>
          </Link>
          <div className={styles.location}>
            <p className={`card-text ${styles.card_text}`}>{room.location}</p>

            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
