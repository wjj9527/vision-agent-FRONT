interface DataType {
  style?:{}
}
export interface Container {
  label: string;
  type: string;
  id: string;
  data:DataType
  children?: (Container | BasicContainer)[];
}

export interface BasicContainer extends Container {
  value: string;
}
interface ContainerProps {
  element:Container|BasicContainer|null,
  parent:Container|null
}
export const findContainerById=(
  id: string,
  obj: Container,
): ContainerProps =>{
  if (obj.id === id) {
    return { element: obj, parent: null };
  }
  if (obj.children) {
    for (let i = 0; i < obj.children.length; i++) {
      const child = obj.children[i];
      if (child.id === id) {
        return { element: child, parent: obj };
      } else {
        const result = findContainerById(id,child, );
        if (result.element !== null) {
          return result;
        }
      }
    }
  }
  return { element: null, parent: null };
}

