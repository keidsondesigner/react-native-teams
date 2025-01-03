import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";


export async function playerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    // Filtrando todas as pessoas, menos a que eu quero deletar, passada no parâmetro;
    const filtered = storage.filter(player => player.name !== playerName);

    // transformando o array em texto;
    const players = JSON.stringify(filtered);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);

  } catch (error) {
    throw error;
  }
}