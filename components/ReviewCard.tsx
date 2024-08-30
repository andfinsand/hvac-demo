import Image from "next/image"

type ReviewCardProps = {
    name: string;
    quote: string;
    stars: number;
};

const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <span key={index}>
                    {index < fullStars ? (
                        <FullStar />
                    ) : index === fullStars && hasHalfStar ? (
                        <HalfStar />
                    ) : (
                        <EmptyStar />
                    )}
                </span>
            ))}
        </div>
    );
};

const FullStar = () => (
    <svg
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const HalfStar = () => (
    <svg
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <defs>
            <linearGradient id="half-star-gradient">
                <stop
                    offset="50%"
                    stopColor="currentColor"
                />
                <stop
                    offset="50%"
                    stopColor="#e5e7eb"
                />
            </linearGradient>
        </defs>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star-gradient)" />
    </svg>
);

const EmptyStar = () => (
    <svg
        className="w-5 h-5 text-gray-300"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function ReviewCard({ name, quote, stars }: ReviewCardProps) {
    return (
        <div className="flex flex-col justify-between overflow-auto bg-white w-full h-[340px] rounded-xl shadow-xl px-8 pt-9 pb-4">

            {/* Customer review */}
            <div className="flex flex-col">
                <Image
                    src="/quote.svg"
                    alt="Quote icon for customer review card"
                    width={50}
                    height={50}
                    className="self-start w-7 mb-5"
                />
                <div className="text-start text-neutral-600 mb-5">{quote}</div>
            </div>

            {/* Review card footer - name and stars */}
            <div className="flex flex-row justify-between h-1/4 min-h-[72px] border-t pt-4">
                <div className="self-center font-bold">{name}</div>
                <div className="self-center flex">
                    <StarRating rating={stars} />
                    <span className="ml-2 text-sm text-gray-600">{stars.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
}
