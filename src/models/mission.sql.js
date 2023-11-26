export const insertMissionSql =
        "INSERT INTO mission (mission_id, restaurant_id, price, point) VALUES (?, ?, ?);";

export const getMissionID =
        "SELECT * FROM mission WHERE mission_id = ?";

export const confirmMission =
        "SELECT EXISTS(SELECT 1 FROM mission WHERE restaurant_id = ? AND price = ?) AS isExistMission";

export const getMissionByRestaurant = 
        "SELECT mission_id, price, point "
        + "FROM mission "
        + "WHERE restaurant_id = ? AND mission_id < ? "
        + "ORDER BY mission_id DESC LIMIT ? ;"
        
export const getMissionByRestaurantAtFirst = 
        "SELECT mission_id, price, point "
        + "FROM mission "
        + "WHERE restaurant_id = ? "
        + "ORDER BY mission_id DESC LIMIT ? ;"