export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: {  // quando a rota tem parâmetros
        group: string;
      };
    }
  }
}