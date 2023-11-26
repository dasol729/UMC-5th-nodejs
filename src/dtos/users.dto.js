export const reviewResponseDTO = (userReview) => {
    return {"reviewId": userReview[0].id};
}

export const reviewListResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_id": data[i].user_id,
            "score": data[i].score,
            "description": data[i].description
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].review_id};
}
