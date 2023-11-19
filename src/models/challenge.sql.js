export const insertChallengeSql =
        "INSERT INTO challengeMission (challenge_mission_id, user_id, mission_id) VALUES (?, ?, ?);";

export const getChallengeID =
        "SELECT * FROM challengeMission WHERE challenge_mission_id = ?";

export const confirmChallenge =
        "SELECT EXISTS(SELECT 1 FROM challengeMission WHERE mission_id = ? AND user_id = ?) AS isExistChallenge";

