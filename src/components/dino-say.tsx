import * as motion from 'motion/react-client'

export default function DinoSay() {
  return (
    <div className='fixed right-10 bottom-5 h-20 w-20'>
      <motion.div
        className='absolute -top-24 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg text-black shadow-lg'
        initial={{ scale: 0.8, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        <span>Hello! Stranger</span>
      </motion.div>
      <motion.svg
        viewBox='13 0 285 306'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        // initial={{ y: 30, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      >
        <g
          id='Group-3'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
          transform='translate(13.000000, 0.000000) scale(-1,1) translate(-285,0)'
        >
          <polygon
            id='Path'
            fill='#ffffff'
            points='256.351585 91.6642857 213.916427 91.6642857 213.916427 80.0385714 284.492795 80.0385714 284.492795 14.3085714 270.198847 14.3085714 270.198847 0 155.400576 0 155.400576 14.3085714 141.553314 14.3085714 141.553314 105.972857 127.259366 105.972857 127.259366 119.834286 106.26513 119.834286 106.26513 134.142857 85.2708934 134.142857 85.2708934 148.451429 70.9769452 148.451429 70.9769452 162.312857 45.0691643 162.312857 45.0691643 148.004286 31.221902 148.004286 31.221902 134.142857 16.9279539 134.142857 16.9279539 105.972857 0.847262248 105.972857 0.847262248 192.718571 14.6945245 192.718571 14.6945245 207.027143 28.9884726 207.027143 28.9884726 220.888571 42.8357349 220.888571 42.8357349 235.197143 57.129683 235.197143 57.129683 249.058571 70.9769452 249.058571 70.9769452 305.398571 101.351585 305.398571 101.351585 289.301429 87.5043228 289.301429 87.5043228 277.228571 101.351585 277.228571 101.351585 263.367143 115.645533 263.367143 115.645533 249.058571 127.259366 249.058571 127.259366 263.367143 141.553314 263.367143 141.553314 305.398571 171.927954 305.398571 171.927954 289.301429 157.634006 289.301429 157.634006 235.197143 171.927954 235.197143 171.927954 220.888571 185.775216 220.888571 185.775216 199.872857 200.069164 199.872857 200.069164 150.687143 211.682997 150.687143 211.682997 164.548571 228.210375 164.548571 228.210375 134.142857 200.069164 134.142857 200.069164 108.208571 256.351585 108.208571'
          ></polygon>
          <rect
            id='Rectangle'
            fill='#000000'
            x='169.247839'
            y='20.5685714'
            width='16.9740634'
            height='16.9914286'
          ></rect>
        </g>
      </motion.svg>
    </div>
  )
}
