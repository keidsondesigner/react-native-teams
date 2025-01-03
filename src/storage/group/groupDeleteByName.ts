import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupGetAll";

export async function groupDeleteByName(groupDeleted: string) {
    try {
        // Buscando todos os grupos
        const storedGroups = await groupsGetAll();

        // Filtrando todos os grupos, menos o que eu quero deletar
        const groups = storedGroups.filter(group => group !== groupDeleted);

        // 1 - Atualizando os grupos no array, sem o grupo que eu quero Deletar
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        // 2 - Deletando o grupo, que quero deletar, que foi passado no parâmetro
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
    } catch (error) {
        throw error;
    }
}