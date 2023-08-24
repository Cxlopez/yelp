import React from 'react'

function starRating({rating}) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i class="fas fa-star"></i>);
    } else {
      stars.push(<i class="far fa-star"></i>);
    }
  }
  return (
    <>
    {stars}
    </>
  )
}

export default starRating