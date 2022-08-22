import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_API_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "post"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'post',
        'fields.slug': params.slug
    })

    if(!items.length) {
        return {
            redirect : {
                destination : '/404',
                permanent : false
            }
        }
    }

    return {
        props: { posts: items[0] },
        revalidate: 1
    }

}

export default function RecipeDetails({ posts }) {
    console.log(posts);
    const { featuredImage, title, readingTime, topics, content } = posts.fields

    return (
        <>
            <header>
                <title>{title}</title>
                <h2 style={{ color: 'azure', fontWeight: 'bold' }}>{title}</h2>
            </header>
            <div>
                <div className="banner">
                    <Image
                        src={`https:` + featuredImage.fields.file.url}
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}
                    />
                    {/* <h2>{title}</h2> */}
                </div>

                <div className="info">
                    {/* <span>{readingTime} min read</span> */}
                    <h3>Topics : </h3>
                    <div className="topics">
                        {topics.map(topic => (
                            <p key={topic}>{topic}</p>
                        ))}
                    </div>
                </div>

                <div className="content">
                    <h3>Post</h3>
                    <div>{documentToReactComponents(content)}</div>
                </div>

                <style jsx>{`
            * {
                color: #fff;
            }
            .topics {
                display: flex;
            }
            h2,h3 {
                text-transform: uppercase;
            }
            .banner h2 {
                margin: 0;
                background: #fff;
                display: inline-block;
                padding: 20px;
                position: relative;
                top: -60px;
                left: -10px;
                transform: rotateZ(-1deg);
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
            }
            p {
                background: yellow;
                color: #000;
                border-radius: 10px;
                padding: 10px;
                margin-right: 10px;
                margin-top: 0px;
                cursor: pointer;
            }
            h2 {
                text-align: center;
            }
        `}</style>
            </div>
        </>
    )
}