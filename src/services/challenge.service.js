import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { challengeResponseDTO } from "../dtos/challenge.dto.js"
import { addChallenge, getChallenge } from "../models/challenge.dao.js";

export const joinChallenge = async (body) => {
    const today = new Date();

    const joinChallengeData = await addChallenge({
        'challenge_mission_id': body.challenge_mission_id,
        'user_id': body.user_id,
        'restaurant_id': body.restaurant_id,
    });

    if(joinChallengeData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return challengeResponseDTO(await getChallenge(joinChallengeData));
    }
}