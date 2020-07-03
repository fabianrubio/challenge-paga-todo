/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

import AsyncStorage from '@react-native-community/async-storage';

it('renders correctly', async () => {
  AsyncStorage.getItem.mockReturnValueOnce(Promise.resolve('[]'));

  await act(async () => {
    renderer.create(<App />);
  });
});
