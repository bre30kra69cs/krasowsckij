export interface State {
  viewType: 'small' | 'normal';
}

export type Action = (state: State) => State;

export interface Store {
  state: State;
  dispatch: (action: Action) => void;
}
