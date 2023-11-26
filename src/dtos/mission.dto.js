export const missionResponseDTO = (mission) => {
    return {"mission_id": mission[0].mission_id};
}

export const missionListResponseDTO = (data) => {

    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "mission_id": data[i].mission_id,
            "price": data[i].price,
            "point": data[i].point
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].mission_id};
}