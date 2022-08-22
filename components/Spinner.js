import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className='loader'>
      <HashLoader color='#fff' size={100} loading={true} />
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}
