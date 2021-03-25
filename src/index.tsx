import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export {
  DateSelector,
  Dropzone,
  SignaturePad,
  AutocompleteAddress,
  Input,
  MultiDropzone,
  DownloadRing,
  IbanInput,
  BottomModal,
  RegularModal,
  BottomOrRegularModal,
  CardWithTopLeftIcon,
  CardWithLeftIcon,
  CardWithTopIcon,
  InfoCard,
  Button,
} from './lib';

export type { DownloadRingDownloadStatus } from './lib';

ReactDOM.render(<App />, document.getElementById('root'));
