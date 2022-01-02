import { Button } from "../../components/button/button"
import { Card } from "../../components/card/card"
import { ProfileComponent } from "../../components/profile/profile"
import { ProfileImage } from "../../components/profileImage/profile-image"
import { Room } from "../../models"
import styles from "./profile-hoc.module.scss"

export const ProfileHOC = ({ rooms }: { rooms: Room[] }) => {
  return (
    <>
      <ProfileComponent rooms={rooms} />
    </>
  )
}
