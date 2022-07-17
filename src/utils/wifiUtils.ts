import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret'); 

import {WifiData} from './wifiData.js';
import {findById} from '../repositories/wifiRepository.js';

export async function verifyWifi(id: number, userId: number) {
    const wifi = await findById(id, userId);
    if (!wifi) throw {type: "not_found", message: "wifi not found"};
    return wifi;
}

export function decryptedPassword(wifi: WifiData) {
    const password = cryptr.decrypt(wifi.password);
    return {...wifi, password};
}