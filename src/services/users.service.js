import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { reviewResponseDTO } from "../dtos/users.dto.js"
import { addReview, getReview} from "../models/users.dao.js";

const id = 1;

export const joinReview = async (body) => {
    const today = new Date();

    const joinReviewData = await addReview({
        'id': body.id,
        'id2': body.id2,
        'user_id': body.user_id,
        'score': body.score,
        'description': body.description,
        'write_at': today,
    });

    if(joinReviewData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return reviewResponseDTO(await getReview(joinReviewData));
    }
}