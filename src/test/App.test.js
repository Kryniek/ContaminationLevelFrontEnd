import React from 'react';
import ReactDOM from 'react-dom';

import ContaminationLevel from './../component/ContaminationLevel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContaminationLevel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
