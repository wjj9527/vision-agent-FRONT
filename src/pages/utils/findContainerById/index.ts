export interface Container {
  label: string;
  id: string;
  children?: Container[];
}
export const findContainerById = (id: string, containers: Container[], parent: Container | null = null): { container: {
    data: {style?:{}};
  }; parent: null }=> {
  for (const container of containers) {
    // alert(container.id)
    if (container.id === id) {
      //@ts-ignore
      return { container, parent };
    }
    if (container.children) {
      const result = findContainerById(id, container.children, container);

      if (result) {
        return result;
      }
    }
  }
  return {container:{data:{style:{}}},parent:null};
}
