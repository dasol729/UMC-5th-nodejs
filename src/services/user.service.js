import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signupResponseDTO } from "../dtos/user.dto.js"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js";

const id = 1;

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;
    const today = new Date();

    const joinUserData = await addUser({
        'id': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'address': body.addr,
        'specAddr': body.specAddr,
        'create_at': today,
        'state': 1,
  //      'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signupResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}