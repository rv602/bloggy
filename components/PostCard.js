import Image from "next/image"
import Link from "next/link"

export default function PostCard({ post }) {
    const { title, slug, readingTime, thumbnail } = post.fields

    return (
        <div className='card'>
            <div className="featured">
                <Image
                    src={`https:${thumbnail.fields.file.url}`}
                    // width={thumbnail.fields.file.details.image.width}
                    // height={thumbnail.fields.file.details.image.height}
                    width={600}
                    height={600}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>{readingTime} min read</p>
                </div>
                <div className="actions">
                    <Link href={`posts/${slug}`}><a>Read this</a></Link>
                </div>
            </div>

            <style jsx>{`
                 .card {
                    transform: rotateZ(-1deg);
                  }
                  .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                  }
                  .info {
                    padding: 16px;
                  }
                  .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                  }
                  .info p {
                    margin: 0;
                    color: #777;
                  }
                  .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                  }
                  .actions a {
                    color: #fff;
                    background: #f01b29;
                    padding: 16px 24px;
                    text-decoration: none;
                  }
                  .featured {
                    box-shadow: 0px 0px 6px 6px grey;
                  }
            `}</style>
        </div>
    )
}
