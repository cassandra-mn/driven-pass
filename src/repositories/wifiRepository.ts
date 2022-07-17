import {prisma} from '../config/database.js';
import {WifiData} from '../utils/wifiData';

export async function create(wifi: WifiData) {
    await prisma.wifi.create({data: wifi});     
}

export async function find(userId: number) {
    const wifi = await prisma.wifi.findMany({where: {userId}});     
    return wifi;
}

export async function findById(id: number, userId: number) {
    const wifi = await prisma.wifi.findFirst({where: {id, userId}});     
    return wifi;
}

export async function deleteById(id: number, userId: number) {
    await prisma.wifi.deleteMany({where: {id, userId}});
}