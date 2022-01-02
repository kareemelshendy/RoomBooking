import Image from "next/image"
import styles from "./profile-image.module.scss"
export const ProfileImage = ({ width, height }: any) => {
  return <Image src="/person.jpg" width={width} height={height} objectFit="cover" alt="profile image" className={styles.image} />
}
