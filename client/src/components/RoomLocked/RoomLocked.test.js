import React from 'react';
import { render } from '@testing-library/react';
import RoomLocked from '.';

test('RoomLockedÂ component should display', () => {
  const { asFragment } = render(<RoomLocked modalContent={'test'} />);
  expect(asFragment()).toMatchSnapshot();
});
