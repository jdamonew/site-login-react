import React from "react";

const Blob = ({img}) => {
  return (
    <div className="avatar">

      <svg
        width='300'
        height='300'
        viewBox='0 0 1000 1000'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <pattern
            id='imageId'
            patternUnits='userSpaceOnUse'
            width='1000'
            height='1000'
          >
            <image href={img} x='100' y='100' width='770' height='770' />
          </pattern>

          <clipPath id='shape'>
            <path fill='currentColor' d='M780,643Q665,786,466,844.5Q267,903,196,701.5Q125,500,198,301.5Q271,103,502,99.5Q733,96,814,298Q895,500,780,643Z' />
          </clipPath>
        </defs>

        <g clip-path='url(#shape)'>
          <path fill='url(#imageId)' d='M780,643Q665,786,466,844.5Q267,903,196,701.5Q125,500,198,301.5Q271,103,502,99.5Q733,96,814,298Q895,500,780,643Z' />
        </g>

      </svg>
    </div>
  )
}

export default Blob;