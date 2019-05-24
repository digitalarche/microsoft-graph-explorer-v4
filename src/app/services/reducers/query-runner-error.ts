import { IAction } from '../../../types/action';
import { CLEAR_QUERY_ERROR, QUERY_GRAPH_ERROR, QUERY_GRAPH_SUCCESS } from '../redux-constants';

export function queryRunnerError(state = {}, action: IAction): any {
  switch (action.type) {
    case QUERY_GRAPH_ERROR:
      return action.response;
    case QUERY_GRAPH_SUCCESS:
      return null;
    case CLEAR_QUERY_ERROR:
      return null;
    default:
      return state;
  }
}