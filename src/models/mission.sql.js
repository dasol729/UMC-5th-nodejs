export const insertMissionSql =
        "INSERT INTO mission (mission_id, restaurant_id, price, point) VALUES (?, ?, ?);";

export const getMissionID =
        "SELECT * FROM mission WHERE mission_id = ?";

export const confirmMission =
        "SELECT EXISTS(SELECT 1 FROM mission WHERE restaurant_id = ? AND price = ?) AS isExistMission";

