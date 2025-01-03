import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupGetAll';


export async function groupCreate(newGroupName: string){
  try{
    const storedGroups = await groupsGetAll();

    // Verifica se a "turma" que passei no input, já existe no grupo(que é um array);
    const groupAlreadyExists = storedGroups.includes(newGroupName);

    if(groupAlreadyExists) {
      throw new AppError('Já existe uma turma com esse nome.');
    }

    // JSON.stringify para converter em texto;
    // ....pego o valor atual, e adiciono mais um valor;
    const storage = JSON.stringify([...storedGroups, newGroupName]);

    // await AsyncStorage.setItem('chave', 'valor');
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch(error) {
    throw error;
  }
}