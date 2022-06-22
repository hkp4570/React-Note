import React from 'react';
import { useSetSoundState, APPStateProvider } from './mainState';

const componentName = () => {
  //   const [sound, setSound] = useSetSoundState();
  //   console.log(sound, 'sound');

  return (
    <APPStateProvider>
      <div>testContext</div>
    </APPStateProvider>
  );
};

export default componentName;
