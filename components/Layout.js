import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header> */}

      {/* <header>
        <Link href="/">
          <h2>RV's blog</h2>
        </Link>
        <style jsx>{`
          header {
            color: #fff;
            cursor: pointer;
          }
        `}
        </style>
      </header> */}

      <div className="page-content">
        {children}
      </div>

      {/* <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer> */}
    </div>
  )
}