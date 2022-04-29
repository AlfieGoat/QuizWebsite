export const delay = async (delayInms: number): Promise<number> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }