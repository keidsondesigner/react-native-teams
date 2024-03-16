import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./playerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
  try {
    const storedPlayers = await playersGetByGroup(group);

    //Verificando se a pessoa já existe, antes de adicionar no grupo;
    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa, já existe no time.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    /*
      @ignite-teams:players-nomedogrupo
      @ignite-teams:players-teste
      @ignite-teams:players-amigos
    */
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);    
  } catch (error) {
    throw (error);
  }
}