export const challengeResponseDTO = (challengeMission) => {
    return {"challenge_mission_id": challengeMission[0].challenge_mission_id};
}

export const challengeListResponseDTO = (data) => {
    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "challenge_mission_id": data[i].challenge_mission_id,
            "restaurant": data[i].restaurant,
            "price": data[i].price,
            "point": data[i].point
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].challenge_mission_id};
}