/**
 * @format
 */

import 'react-native';
import React from 'react';
import BankList from '../components/BackList';
import renderer, {act} from 'react-test-renderer';

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

import AsyncStorage from '@react-native-community/async-storage';
import {DBProvider, APIProvider} from '../context';

it('renders correctly', async () => {
  AsyncStorage.getItem.mockReturnValueOnce(Promise.resolve('[]'));
});
