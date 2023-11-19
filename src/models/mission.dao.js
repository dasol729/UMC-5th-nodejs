import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confirmMission, getMissionID, insertMissionSql } from "./mission.sql.js";

// Review 데이터 삽입
export const addMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(confirmMission, [data.restaurant_id, data.price]);

        if(confirm[0].isExistMission){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertMissionSql, [data.mission_id, data.restaurant_id, data.price, data.point]);

        conn.release();
        return result[0].challenge_mission_id;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// Review 정보 얻기
export const getMission = async (missionData) => {
    try {
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionID, missionData.mission_id);

        console.log(mission);

        if(mission.length == 0){
            return -1;
        }

        conn.release();
        return mission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}