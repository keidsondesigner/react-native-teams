import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '../storageConfig';


export async function groupsGetAll(){
  try{
    // Busca todos os grupos no storage com a chave GROUP_COLLECTION e converte para um array;
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups

  } catch(error){
    throw error;
  }
}