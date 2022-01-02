import { GetServerSideProps } from "next"
import Layout from "../components/layout/layout"
import { FavoriteHOC } from "../hoc/favorite-hoc/favorite-hoc"
import { Room } from "../models"

const Favorite = ({ rooms }: { rooms: Room[] }) => {
  return (
    <Layout title="المفضلات">
      <FavoriteHOC rooms={rooms} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const rooms: any = [
    {
      id: 1,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "400",
      numberOfUsers: "4",
      fav: true,
      image: "/bedroom.jpg",
    },
    {
      id: 2,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "500",
      numberOfUsers: "8",
      fav: true,
      image: "/card1.png",
    },
    {
      id: 3,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "800",
      numberOfUsers: "4",
      fav: true,
      image: "/white-sofra.jpg",
    },
    {
      id: 4,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "400",
      numberOfUsers: "4",
      fav: true,
      image: "/kids.jpg",
    },
    {
      id: 5,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "400",
      numberOfUsers: "4",
      fav: true,
      image: "/bedroom.jpg",
    },
    {
      id: 6,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "500",
      numberOfUsers: "8",
      fav: true,
      image: "/kids.jpg",
    },
    {
      id: 7,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "800",
      numberOfUsers: "4",
      fav: true,
      image: "/white-sofra.jpg",
    },
    {
      id: 8,
      roomtitle: "غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك",
      location: "العين السخنة كمباوند أروما الكيلو 39",
      price: "400",
      numberOfUsers: "4",
      fav: true,
      image: "/bedroom.png",
    },
  ]
  return {
    props: {
      rooms,
    },
  }
}
export default Favorite
