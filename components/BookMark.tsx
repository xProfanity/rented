"use client"

import { useState } from "react";
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";


interface Props {
  bookmarked: boolean;
  propertyId: string;
  userId: string;
}

export default function BookMark({bookmarked, propertyId, userId}: Props) {

    const [isBookmarked, setIsBookmarked] = useState(bookmarked)

    const handleBookMarks = async () => {
      try {
        fetch("/api/sanity/bookmarks", {method: 'POST', body: JSON.stringify({userId, propertyId, isBookmarked})})
        setIsBookmarked(current => !current)
      } catch (error) {
        console.log('error', error)
      }
    }
  return (
    <button type="button" onClick={handleBookMarks}>
      {isBookmarked ? (
        <BsBookmarkCheckFill size={30} color="#010536" />
      ): (
          <BsBookmark size={30} color="#010536" />
      )}
    </button>
  )
}
