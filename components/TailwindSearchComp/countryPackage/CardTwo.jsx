"use client";

import Image from "next/image"; // Use next/image for optimized image handling
import { useRouter } from "next/navigation";

const CardTwo = ({ className = "", data }) => {
  const router = useRouter();

  const handleCountryClick = (category) => {
    const queryParameter = category;
    // Next.js uses router.push for navigation
    router.push(`/packageResult?type=country&destination=${queryParameter}`);
  };

  return (
    <div
      onClick={() => handleCountryClick(data?.country)}
      className={`nc-CardCategory3 flex flex-col ${className}`}
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 sm:aspect-h-6 h-64 rounded-2xl overflow-hidden group`}
      >
        {/* Use next/image for better optimization */}
        <Image
          src={data?.thumbnail}
          alt="places"
          layout="fill" // Use fill to maintain aspect ratio and responsiveness
          objectFit="cover"
          className="rounded-2xl"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 truncate">
        <h2
          className={`text-base text-center sm:text-lg text-neutral-900 font-medium truncate`}
        >
          {data?.name}
        </h2>

        {/* <span
                    className={`block mt-1.5 text-sm text-neutral-600 `}
                >
                    <span>
                        {data?.days}D/ {data?.days - 1}N
                    </span>
                    <span>
                        ₹ {data?.pakage_amount?.amount}
                    </span>
                </span> */}
      </div>
    </div>
  );
};

export default CardTwo;
