type Props = {
  color?: "light" | "dark";
  className?: string;
};

function Brand({ color, className }: Props) {
  return (
    <div className={className || "w-20 h-10"}>
      <svg
        viewBox="0 0 624 140"
        fill="none"
        preserveAspectRatio="xMidyMid meet"
      >
        <path
          d="M170.413 33.9333V103H159.773V33.9333H170.413ZM203.916 50.92C208.582 50.92 212.564 52.0711 215.862 54.3733C219.16 56.6756 221.493 59.7244 222.862 63.52V51.5733H233.502V103H222.862V91.0533C221.493 94.8489 219.16 97.8978 215.862 100.2C212.564 102.502 208.582 103.653 203.916 103.653C199.436 103.653 195.422 102.596 191.876 100.48C188.391 98.3644 185.653 95.3156 183.662 91.3333C181.671 87.3511 180.676 82.6533 180.676 77.24C180.676 71.8889 181.671 67.2222 183.662 63.24C185.653 59.2578 188.391 56.2089 191.876 54.0933C195.422 51.9778 199.436 50.92 203.916 50.92ZM207.182 60.2533C202.453 60.2533 198.658 61.7778 195.796 64.8267C192.996 67.8133 191.596 71.9511 191.596 77.24C191.596 82.5289 192.996 86.6978 195.796 89.7467C198.658 92.7333 202.453 94.2267 207.182 94.2267C210.169 94.2267 212.844 93.5422 215.209 92.1733C217.573 90.7422 219.44 88.7511 220.809 86.2C222.178 83.6489 222.862 80.6622 222.862 77.24C222.862 73.88 222.178 70.9244 220.809 68.3733C219.44 65.76 217.573 63.7689 215.209 62.4C212.844 60.9689 210.169 60.2533 207.182 60.2533ZM256.911 61.6533C258.653 58.2933 261.142 55.6489 264.377 53.72C267.613 51.7289 271.346 50.7333 275.577 50.7333V62.3067H272.404C267.737 62.3067 263.973 63.4578 261.111 65.76C258.311 68 256.911 71.7333 256.911 76.96V103H246.271V51.5733H256.911V61.6533ZM304.176 50.92C308.843 50.92 312.825 52.0711 316.123 54.3733C319.42 56.6756 321.754 59.7244 323.123 63.52V51.5733H333.763V103H323.123V91.0533C321.754 94.8489 319.42 97.8978 316.123 100.2C312.825 102.502 308.843 103.653 304.176 103.653C299.696 103.653 295.683 102.596 292.136 100.48C288.652 98.3644 285.914 95.3156 283.923 91.3333C281.932 87.3511 280.936 82.6533 280.936 77.24C280.936 71.8889 281.932 67.2222 283.923 63.24C285.914 59.2578 288.652 56.2089 292.136 54.0933C295.683 51.9778 299.696 50.92 304.176 50.92ZM307.443 60.2533C302.714 60.2533 298.918 61.7778 296.056 64.8267C293.256 67.8133 291.856 71.9511 291.856 77.24C291.856 82.5289 293.256 86.6978 296.056 89.7467C298.918 92.7333 302.714 94.2267 307.443 94.2267C310.429 94.2267 313.105 93.5422 315.469 92.1733C317.834 90.7422 319.7 88.7511 321.069 86.2C322.438 83.6489 323.123 80.6622 323.123 77.24C323.123 73.88 322.438 70.9244 321.069 68.3733C319.7 65.76 317.834 63.7689 315.469 62.4C313.105 60.9689 310.429 60.2533 307.443 60.2533ZM369.398 50.92C376.056 50.92 381.562 52.6933 385.918 56.24C390.273 59.7244 392.98 64.4844 394.038 70.52H382.744C382.122 67.2844 380.598 64.7644 378.171 62.96C375.807 61.0933 372.82 60.16 369.211 60.16C365.104 60.16 361.682 61.6222 358.944 64.5467C356.207 67.4089 354.838 71.64 354.838 77.24C354.838 82.84 356.207 87.1022 358.944 90.0267C361.682 92.9511 365.104 94.4133 369.211 94.4133C372.82 94.4133 375.807 93.48 378.171 91.6133C380.598 89.7467 382.122 87.1956 382.744 83.96H394.038C392.98 89.9956 390.273 94.7867 385.918 98.3333C381.562 101.88 376.056 103.653 369.398 103.653C364.42 103.653 360.002 102.596 356.144 100.48C352.349 98.3644 349.362 95.3156 347.184 91.3333C345.007 87.3511 343.918 82.6533 343.918 77.24C343.918 71.8889 345.007 67.2222 347.184 63.24C349.362 59.2578 352.349 56.2089 356.144 54.0933C360.002 51.9778 364.42 50.92 369.398 50.92ZM424.944 50.92C429.611 50.92 433.593 52.0711 436.891 54.3733C440.189 56.6756 442.522 59.7244 443.891 63.52V51.5733H454.531V103H443.891V91.0533C442.522 94.8489 440.189 97.8978 436.891 100.2C433.593 102.502 429.611 103.653 424.944 103.653C420.464 103.653 416.451 102.596 412.904 100.48C409.42 98.3644 406.682 95.3156 404.691 91.3333C402.7 87.3511 401.704 82.6533 401.704 77.24C401.704 71.8889 402.7 67.2222 404.691 63.24C406.682 59.2578 409.42 56.2089 412.904 54.0933C416.451 51.9778 420.464 50.92 424.944 50.92ZM428.211 60.2533C423.482 60.2533 419.686 61.7778 416.824 64.8267C414.024 67.8133 412.624 71.9511 412.624 77.24C412.624 82.5289 414.024 86.6978 416.824 89.7467C419.686 92.7333 423.482 94.2267 428.211 94.2267C431.198 94.2267 433.873 93.5422 436.238 92.1733C438.602 90.7422 440.469 88.7511 441.838 86.2C443.206 83.6489 443.891 80.6622 443.891 77.24C443.891 73.88 443.206 70.9244 441.838 68.3733C440.469 65.76 438.602 63.7689 436.238 62.4C433.873 60.9689 431.198 60.2533 428.211 60.2533ZM531.606 50.7333C537.704 50.7333 542.557 52.6622 546.166 56.52C549.837 60.3778 551.673 65.8844 551.673 73.04V103H541.033V74.16C541.033 69.68 539.913 66.2267 537.673 63.8C535.433 61.3111 532.353 60.0667 528.433 60.0667C524.264 60.0667 520.935 61.4044 518.446 64.08C516.019 66.6933 514.806 70.5511 514.806 75.6533V103H504.166V74.16C504.166 69.68 503.046 66.2267 500.806 63.8C498.566 61.3111 495.486 60.0667 491.566 60.0667C487.397 60.0667 484.068 61.4044 481.579 64.08C479.153 66.6933 477.939 70.5511 477.939 75.6533V103H467.299V51.5733H477.939V62.3067C479.246 58.5733 481.424 55.7111 484.473 53.72C487.522 51.7289 491.099 50.7333 495.206 50.7333C499.499 50.7333 503.202 51.7911 506.313 53.9067C509.486 56.0222 511.788 59.0711 513.219 63.0533C514.713 59.1956 517.108 56.1778 520.406 54C523.704 51.8222 527.437 50.7333 531.606 50.7333ZM593.59 50.92C598.07 50.92 602.052 51.9778 605.536 54.0933C609.083 56.2089 611.852 59.2578 613.843 63.24C615.834 67.2222 616.83 71.8889 616.83 77.24C616.83 82.6533 615.834 87.3511 613.843 91.3333C611.852 95.3156 609.083 98.3644 605.536 100.48C602.052 102.596 598.07 103.653 593.59 103.653C588.923 103.653 584.941 102.502 581.643 100.2C578.345 97.8978 576.043 94.8489 574.736 91.0533V127.453H564.096V51.5733H574.736V63.52C576.043 59.7244 578.345 56.6756 581.643 54.3733C584.941 52.0711 588.923 50.92 593.59 50.92ZM590.323 60.2533C587.336 60.2533 584.661 60.9689 582.296 62.4C579.932 63.7689 578.065 65.76 576.696 68.3733C575.327 70.9244 574.643 73.88 574.643 77.24C574.643 80.6622 575.327 83.6489 576.696 86.2C578.065 88.7511 579.932 90.7422 582.296 92.1733C584.661 93.5422 587.336 94.2267 590.323 94.2267C595.052 94.2267 598.847 92.7333 601.71 89.7467C604.572 86.6978 606.003 82.5289 606.003 77.24C606.003 72.0133 604.572 67.8756 601.71 64.8267C598.847 61.7778 595.052 60.2533 590.323 60.2533Z"
          className={color === "light" ? "fill-white" : "fill-navy"}
        />
        <g clip-path="url(#clip0_56_54)">
          <path
            d="M104.933 32.9205L69.6579 12.5765C63.701 9.14104 56.2992 9.14128 50.3421 12.5765L15.0668 32.9205C9.0982 36.3623 5.39062 42.7811 5.39062 49.6717V90.3281C5.39062 97.2187 9.0982 103.638 15.0666 107.079L50.3421 127.423C56.3002 130.859 63.7017 130.858 69.6579 127.423L104.933 107.079C110.902 103.638 114.609 97.2187 114.609 90.3281V49.6717C114.609 42.7814 110.902 36.3625 104.933 32.9205ZM105.234 90.3281C105.234 93.8774 103.325 97.1838 100.25 98.9566L64.9746 119.301C61.9059 121.071 58.0938 121.071 55.0252 119.301L19.7496 98.9566C16.6753 97.1835 14.7656 93.8774 14.7656 90.3281V49.6717C14.7656 46.1226 16.6753 42.8163 19.7498 41.0435L55.0252 20.6995C58.0941 18.9295 61.9073 18.9302 64.9748 20.6995L100.25 41.0432C103.325 42.8163 105.234 46.1224 105.234 49.6717V90.3281Z"
            className={color === "light" ? "fill-white" : "fill-navy"}
          />
          <path
            d="M55.545 66.4209L38.1355 51.6873C36.1594 50.0148 33.2014 50.2612 31.5291 52.2379C29.8569 54.2146 30.1034 57.1727 32.0797 58.8452L45.2605 70L32.0797 81.1546C30.1034 82.8271 29.8571 85.7852 31.5291 87.7619C33.2054 89.7428 36.1641 89.9807 38.1355 88.3122L55.545 73.5787C57.7599 71.7044 57.7536 68.29 55.545 66.4209Z"
            className={color === "light" ? "fill-white" : "fill-navy"}
          />
          <path
            d="M84.8914 80.0452H63.7988C61.2099 80.0452 59.1113 82.144 59.1113 84.7334C59.1113 87.3227 61.2099 89.4216 63.7988 89.4216H84.8914C87.4801 89.4216 89.5789 87.3227 89.5789 84.7334C89.5789 82.144 87.4803 80.0452 84.8914 80.0452Z"
            className={color === "light" ? "fill-white" : "fill-navy"}
          />
        </g>
        <defs>
          <clipPath id="clip0_56_54">
            <rect
              width="120"
              height="120"
              fill="white"
              transform="translate(0 10)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default Brand;
