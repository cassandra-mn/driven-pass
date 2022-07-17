import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret');

import {WifiData} from '../utils/wifiData.js';
import {decryptedPassword, verifyWifi} from '../utils/wifiUtils.js';
import * as wifiRepository from '../repositories/wifiRepository.js';

export async function create(wifi: WifiData) {
    const password = cryptr.encrypt(wifi.password);
    await wifiRepository.create({...wifi, password});
}

export async function find(userId: number) {
    const wifi = await wifiRepository.find(userId);
    const decryptedData = wifi.map(wifi => {
        return decryptedPassword(wifi);
    });
    return decryptedData;
}

export async function findById(id: number, userId: number) {
    const wifi = await verifyWifi(id, userId);
    const decryptedData = decryptedPassword(wifi);
    return decryptedData;
}
