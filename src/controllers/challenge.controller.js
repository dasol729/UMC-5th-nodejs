import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { joinChallenge } from "../services/challenge.service.js";

export const addChallenge = async (req, res, next) => {
    console.log("도전 미션 추가를 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinChallenge(req.body)));
}