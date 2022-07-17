import {prisma} from '../config/database.js';
import {WifiData} from '../utils/wifiData';

export async function create(wifi: WifiData) {
    await prisma.wifi.create({data: wifi});     
}