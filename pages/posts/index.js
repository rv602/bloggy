import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function index() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000)
    })

    return (
        <div>
            <h1>welcome</h1>
            <style jsx>{`
                h1 {
                    color: #f01b29;
                }
            `}</style>
        </div>
    )
}
