import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Error() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 4000)
    }, [])
    
    return (
        <>
            <div className='not-found'>
                <div className="masala">
                <h1>Oooopsie</h1>
                <h2>page not found buddy 😅</h2>
                <p>Redirecting to the <Link href='/'><a>Homepage</a></Link> for more blog posts..</p>
                </div>
            </div>
            <style jsx>
                {`
                    .not-found {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .masala {
                        background: #fff;
                        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                        padding: 30px;
                        transform: rotateZ(-1deg);
                    }
                    h1 {
                        font-size: 3rem;
                    }
                    a {
                        color: #f01b29;
                    }
                `}
            </style>
        </>
    )
}
