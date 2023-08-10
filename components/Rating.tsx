import { ratingStars } from "@/assets";
import { User } from "@/common.types";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  user: User;
  propertyId: string;
}

export default function Rating({user, propertyId}: Props) {
  const [ratings, setRatings] = useState(ratingStars)

  const handleRating = async (index: number) => {
    const newRatings = ratings.map(rating => ({ index: rating.index, isActive: rating.index <= index }))

    setRatings(newRatings)

    const doc = {
      _type: 'reviews',
      title: user.email,
      rate: index,
      review: '',
      reviewedPropertyId: propertyId,
      reviewBy: {
        _type: 'reviewBy',
        _ref: user._id,
      }
    }

    fetch('/api/sanity/rating', {method: 'POST', body: JSON.stringify(doc)})
      .then(response => console.log('response', response))
      .catch(error => console.log('error', error))
  }

  return (
    <div className="inline-flex gap-1 justify-center items-center">
        {
            ratings.map(({index, isActive}) => (
                <button  key={index} onClick={() => handleRating(index)}>
                  {isActive ? (
                    <AiFillStar size={20} color="#010536" />
                  ) : (
                    <AiOutlineStar size={20} color="#010536" />
                  )}
                </button>
            ))
        }
    </div>
  )
}
