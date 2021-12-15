import { useRouter } from "next/router"

const Room = ()=>{
    const router = useRouter()
    const {roomId} = router.query
    // console.log(router.query)
    return <h1>welcome to my home room {roomId}</h1>
}

export default Room