import React, { useCallback, useContext } from 'react';
import { useLocalStorage } from 'react-use';

export type APPState = {
  sound: boolean;
  darkMode: boolean;
};

export type MainStateType = {
  state: APPState;
  dispatch: (state: APPState) => void;
};
const defaultState: APPState = {
  sound: true,
  darkMode: false,
};

const MainState = React.createContext<MainStateType>({
  state: defaultState,
} as MainStateType);

export function useSetSoundState() {
  const { state, dispatch } = useContext(MainState);
  const setSound = useCallback(
    (sound: boolean) => dispatch({ ...state, sound }),
    [state, dispatch],
  );
  return [state.sound, setSound];
}

export const APPStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, setState] = useLocalStorage<APPState>('state', defaultState);
  return (
    <MainState.Provider value={{ state: state!, dispatch: setState }}>
      {children}
    </MainState.Provider>
  );
};
