import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  return (
    <>
      <div className='loader'>
        <HashLoader color='#fff' size={100} loading={true} cssOverride={{}} />
        <style jsx>{`
          .loader {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform: -webkit-translate(-50%, -50%);
            transform: -moz-translate(-50%, -50%);
            transform: -ms-translate(-50%, -50%);
            color:darkred;
          }
        `}</style>
      </div>
    </>
  )
}
