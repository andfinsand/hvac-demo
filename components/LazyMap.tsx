"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function LazyMap() {
    const [showMap, setShowMap] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const loadMap = () => {
        setShowMap(true);
    };

    return (
        <div className="self-center w-full max-w-[1280px] overflow-hidden rounded-t-3xl">
        {!showMap ? (
            <div
                onClick={loadMap}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ cursor: 'pointer', position: 'relative' }}
            >
                <Image
                    src="/map-placeholder.webp"
                    alt="Click to load interactive map"
                    width={1280}
                    height={680}
                    className="w-full rounded-3xl h-[622px] object-cover"
                />
                {isHovering && (
                    <div className='flex justify-center items-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-65 tracking-wider font-semibold text-white text-2xl border-3xl'
                        style={{
                            borderRadius: '24px',
                        }}
                    >
                        Click to Interact
                    </div>
                )}
            </div>
        ) : (
            <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1y_lP8XNvVdOYtP0dp2nVexhiL9S8ptY&ehbc=2E312F&noprof=1"
            width="1280"
            height="680"
            className="w-full rounded-b-3xl -mt-[60px]"
            />
        )}
        </div>
    );
}

// "use client"

// import { useState } from 'react';
// import Image from 'next/image';

// export default function LazyMap() {
//     const [showMap, setShowMap] = useState(false);

//     const loadMap = () => {
//         setShowMap(true);
//     };

//     return (
//         <div
//             className="self-center w-full max-w-[1280px] overflow-hidden rounded-t-3xl"
//             onMouseEnter={loadMap}
//         >
//         {!showMap ? (
//             <>
//                 <Image
//                     src="/map-placeholder.webp"
//                     alt="Click to load interactive map"
//                     width={1280}
//                     height={680}
//                     className="w-full rounded-3xl"
//                 />
//             </>
//             ) : (
//                 <iframe
//                 src="https://www.google.com/maps/d/u/0/embed?mid=1y_lP8XNvVdOYtP0dp2nVexhiL9S8ptY&ehbc=2E312F&noprof=1"
//                 width="1280"
//                 height="680"
//                 className="w-full rounded-b-3xl -mt-[60px]"
//                 />
//             )}
//         </div>
//     );
// }
