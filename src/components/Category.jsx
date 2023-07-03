export default function Category(props) {
  return (
    <div className="flex items-center justify-between w-full mt-6">
      <div className="flex items-center">
        <div
          className="py-2 px-6 mr-4 bg-[#CCCCCC] rounded-sm cursor-pointer flex items-center"
          onClick={() => props.activeCategory("none")}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.000000 512.000000"
            className="w-5 h-5"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M2922 4849 c-117 -45 -192 -163 -192 -300 0 -65 2 -73 29 -100 32
-31 50 -35 84 -17 37 19 46 41 47 108 0 47 6 74 20 98 57 94 207 98 266 7 16
-24 41 -114 58 -207 l7 -38 -1437 0 c-1099 0 -1446 -3 -1478 -12 -55 -16 -138
-99 -154 -154 -17 -60 -17 -3368 0 -3428 16 -55 99 -138 154 -154 31 -9 348
-12 1320 -13 l1279 -1 -755 -127 c-583 -99 -761 -125 -783 -118 -20 6 -35 24
-50 56 -28 57 -65 78 -108 61 -52 -22 -63 -73 -30 -145 38 -84 122 -137 214
-136 29 0 444 66 922 146 479 80 1229 206 1667 280 473 80 810 141 830 151 71
36 122 104 133 181 7 45 -537 3305 -561 3362 -35 85 -127 144 -223 144 -47 0
-58 -4 -78 -27 -51 -60 -9 -136 73 -134 45 1 72 -18 84 -60 6 -20 132 -761
281 -1647 291 -1737 279 -1651 221 -1674 -25 -9 -723 -131 -754 -131 -11 0
-12 309 -10 1682 2 1267 0 1694 -9 1726 -7 25 -30 63 -56 92 -65 72 -96 80
-333 80 l-195 0 -29 132 c-32 152 -50 193 -112 254 -84 81 -226 107 -342 63z
m403 -844 l49 -235 -21 -28 c-16 -22 -28 -27 -63 -27 -34 0 -46 5 -61 25 -11
15 -35 107 -61 229 -48 230 -58 251 -118 251 -30 0 -43 -6 -59 -26 -12 -15
-21 -34 -21 -44 0 -42 92 -445 110 -479 56 -111 200 -154 319 -95 65 33 106
86 122 160 11 51 9 68 -30 257 -24 111 -45 212 -48 225 l-5 22 176 0 c174 0
177 0 201 -25 l25 -24 0 -1671 0 -1671 -25 -24 -24 -25 -1711 0 -1711 0 -24
25 -25 24 0 1671 0 1671 25 24 24 25 1453 0 1454 0 49 -235z"
              />
            </g>
          </svg>

          <span className="ml-1">All</span>
        </div>
        <div
          className="py-2 px-2 mr-4 bg-[#CCE8CF] rounded-sm cursor-pointer flex items-center"
          onClick={() => props.activeCategory("home")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="ml-1">Home</span>
        </div>
        <div
          className="py-2 px-2 mr-4 bg-[#89CFF0] rounded-sm cursor-pointer flex items-center"
          onClick={() => props.activeCategory("work")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <span className="ml-1">Work</span>
        </div>
        <div
          className="py-2 px-2 mr-4 bg-[#bdbdff] rounded-sm cursor-pointer flex items-center"
          onClick={() => props.activeCategory("personal")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="ml-1">Personal</span>
        </div>
      </div>
      <div className="py-2 px-5 bg-[#ff9b9b] rounded-sm shadow-md cursor-pointer flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="ml-1" onClick={() => props.showNote("")}>
          Add Note
        </span>
      </div>
    </div>
  );
}
