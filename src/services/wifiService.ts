import Cryptr from 'cryptr';
const cryptr = new Cryptr('secret');

import {WifiData} from '../utils/wifiData.js';
import * as wifiRepository from '../repositories/wifiRepository.js';

export async function create(wifi: WifiData) {
    const password = cryptr.encrypt(wifi.password);
    await wifiRepository.create({...wifi, password});
}