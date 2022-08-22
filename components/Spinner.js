import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className='loader'>
      <HashLoader color='#fff' size={100} loading={true} cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw'
      }} />
      {/* <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style> */}
    </div>
  )
}
