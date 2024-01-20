'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function ProfilePage() {


    const {data:session}=useSession()
    useEffect(() => {
        console.log('Hola este es el cliente')
    }, [])
    return (
        <div>
           {JSON.stringify(session?.user) }
        </div>
    );
}