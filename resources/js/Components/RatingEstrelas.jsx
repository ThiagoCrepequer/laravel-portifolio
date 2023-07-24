import {ImStarEmpty, ImStarHalf, ImStarFull} from 'react-icons/im'

export function Estrelas({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="flex flex-row justify-center">
            {Array(fullStars)
                .fill()
                .map((_, index) => (
                    <ImStarFull className='text-yellow-500' key={index} />
                ))}

            {hasHalfStar && (
                <ImStarHalf className='text-yellow-500' />
            )}

            {Array(emptyStars)
                .fill()
                .map((_, index) => (
                    <ImStarEmpty className='text-yellow-500' key={index}/>
                ))}
        </div>
    );
}