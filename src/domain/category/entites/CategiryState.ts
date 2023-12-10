import {LoadingState} from '../../../entites/LoadingState';

export interface CategoryState extends LoadingState {
  createCategory: (category: string) => void;
  allCategory: () => void;
  removeCategory: (id: number) => void;
  editCategory: (id: number, category: string) => void;

  listResponseCategory?: any;
}
