import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confirmChallenge, getChallengeID, insertChallengeSql, getChallengeByUser, getChallengeByUserAtFirst } from "./challenge.sql.js";

// 데이터 삽입
export const addChallenge = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmChallenge, [data.mission_id, data.user_id]);

        if(confirm[0].isExistChallenge){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertChallengeSql, [data.challenge_mission_id, data.mission_id, data.user_id]);

        conn.release();
        return result[0].challenge_mission_id;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 정보 얻기
export const getChallenge = async (challengeMission) => {
    try {
        const conn = await pool.getConnection();
        const [challenge] = await pool.query(getChallengeID, challengeMission.challenge_mission_id);

        console.log(challenge);

        if(challenge.length == 0){
            return -1;
        }

        conn.release();
        return challenge;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getChallengeList = async (cursorId, size, userId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getChallengeByUserAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getChallengeByUser, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}