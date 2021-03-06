import React from 'react'


// https://danmarshall.github.io/google-font-to-svg-path/

const Logo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 100 100" width="100%" height="100%">
    <title>Logo</title>
    <g transform="translate(0, 0)">
      <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-main)" strokeWidth="5"/>

      <g transform="translate(35, 23)">
          <path d="M 0 49.971 L 0 0 L 14.834 0 A 56.408 56.408 0 0 1 19.914 0.213 Q 26.377 0.799 29.753 3.008 Q 34.351 6.016 34.351 12.51 A 13.979 13.979 0 0 1 33.964 15.881 A 10.357 10.357 0 0 1 32.095 19.79 A 9.406 9.406 0 0 1 27.712 22.896 A 13.078 13.078 0 0 1 25.601 23.448 L 25.601 23.789 Q 29.317 24.489 31.645 26.152 A 9.293 9.293 0 0 1 33.342 27.703 A 9.934 9.934 0 0 1 35.342 31.629 Q 35.82 33.423 35.82 35.616 A 15.486 15.486 0 0 1 35.159 40.255 A 12.119 12.119 0 0 1 31.121 46.16 A 15.743 15.743 0 0 1 25.706 48.958 Q 23.409 49.654 20.65 49.872 A 33.108 33.108 0 0 1 18.047 49.971 L 0 49.971 Z M 16.44 27.276 L 8.169 27.276 L 8.169 43.101 L 16.851 43.101 A 21.441 21.441 0 0 0 19.673 42.928 Q 22.754 42.517 24.592 41.136 Q 27.086 39.262 27.201 35.321 A 13.237 13.237 0 0 0 27.207 34.932 A 8.975 8.975 0 0 0 26.927 32.617 A 5.985 5.985 0 0 0 24.541 29.156 A 8.565 8.565 0 0 0 22.267 28.047 Q 19.922 27.276 16.44 27.276 Z M 8.169 6.836 L 8.169 20.645 L 16.03 20.645 Q 21.157 20.645 23.516 19.021 A 5.094 5.094 0 0 0 25.485 16.292 Q 25.775 15.391 25.849 14.281 A 11.767 11.767 0 0 0 25.874 13.501 A 7.615 7.615 0 0 0 25.625 11.491 A 5.067 5.067 0 0 0 23.328 8.409 Q 21.059 7.008 16.416 6.855 A 35.664 35.664 0 0 0 15.244 6.836 L 8.169 6.836 Z" 
                vectorEffect="non-scaling-stroke"
                fill="var(--color-main)"/>
      </g>
    </g>
  </svg>
)

export default Logo;



