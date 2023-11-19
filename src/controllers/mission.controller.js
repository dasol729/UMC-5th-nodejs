import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { joinMission } from "../services/mission.service.js";

export const addMission = async (req, res, next) => {
    console.log("미션 추가를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinMission(req.body)));
}