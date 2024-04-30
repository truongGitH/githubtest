'use client'
import { useRouter } from "next/navigation";


export default function ButtonRegister() {
    const router = useRouter()
    const handleRegister = ()=>{
        router.push('/register')
    }
    return (
        <button onClick={handleRegister}>Register</button>
    )
}