export interface ITodo {
  id: number;
  text: string;
}

export interface IProps {
  item: ITodo;
  handleDeleteTodo(id: number): void;
}

export interface IAddProps {
  handleAddTodo(text: string): void;
}
