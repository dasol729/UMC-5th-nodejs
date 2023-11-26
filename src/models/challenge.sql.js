export const insertChallengeSql =
        "INSERT INTO challengeMission (challenge_mission_id, user_id, mission_id) VALUES (?, ?, ?);";

export const getChallengeID =
        "SELECT * FROM challengeMission WHERE challenge_mission_id = ?";

export const confirmChallenge =
        "SELECT EXISTS(SELECT 1 FROM challengeMission WHERE mission_id = ? AND user_id = ?) AS isExistChallenge";

export const getChallengeByUser = 
        "SELECT c.challenge_mission_id, r.name, m.price, m.point "
        + "FROM challengeMission c, mission m, restaurant r "
        + "WHERE c.mission_id = m.mission_id AND m.restaurant_id = r.restaurant_id"
        + "AND user_id = ? AND c.challenge_mission_id < ? "
        + "ORDER BY c.challenge_mission_id DESC LIMIT ? ;"
        
export const getChallengeByUserAtFirst = 
        "SELECT c.challenge_mission_id, r.name, m.price, m.point "
        + "FROM challengeMission c, mission m, restaurant r "
        + "WHERE c.mission_id = m.mission_id AND m.restaurant_id = r.restaurant_id"
        + "AND user_id = ? "
        + "ORDER BY c.challenge_mission_id DESC LIMIT ? ;"