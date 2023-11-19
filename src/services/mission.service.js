import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { missionResponseDTO } from "../dtos/mission.dto.js"
import { addMission, getMission } from "../models/mission.dao.js";

export const joinMission = async (body) => {
    //const today = new Date();

    const joinMissionData = await addMission({
        'mission_id': body.mission_id,
        'restaurant_id': body.restaurant_id,
        "price": body.price,
        "point": body.point,
    });

    if(joinMissionData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        return missionResponseDTO(await getMission(joinMissionData));
    }
}