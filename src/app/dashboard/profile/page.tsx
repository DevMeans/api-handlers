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
            <span className="block">{session?.user?.name || 'No name'}</span>
            <span className="block">{session?.user?.image|| 'No name'}</span>
            <span className="block">{session?.user?.email}</span>
        </div>
    );
}