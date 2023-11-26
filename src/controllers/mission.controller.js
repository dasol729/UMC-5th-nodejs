import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { joinMission, findMission } from "../services/mission.service.js";

export const addMission = async (req, res, next) => {
    console.log("미션 추가를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinMission(req.body)));
}

export const missionList = async (req, res, next) => {
    console.log("가게의 미션 목록 조회를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await findMission(req.body)));
}