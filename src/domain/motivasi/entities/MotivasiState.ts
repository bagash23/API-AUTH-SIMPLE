import {LoadingState} from '../../../entites/LoadingState';

export interface MotivasiState extends LoadingState {
  createMotivasi: (motivator: string, category: string, quotes: string) => void;
  allMotivasi: () => void;

  listResponseAllMotivasi?: any;
}
