import React, {createContext} from 'react';
import BankAPI from './services/api';
import DB from './services/db';

export const DBContext = createContext();
export const APIContext = createContext();

/**
 * Create a context for store data to ensure the availability of the data
 * @param {} param0
 */
export const DBProvider = ({children}) => {
  return (
    <DBContext.Provider
      value={{
        db: new DB('@banklist'),
      }}>
      {children}
    </DBContext.Provider>
  );
};

/**
 * Create a context provider to handle requests to endpoints.
 * @param {*} param0
 */
export const APIProvider = ({children}) => {
  return (
    <APIContext.Provider
      value={{
        api: new BankAPI('https://api.jsonbin.io'),
      }}>
      {children}
    </APIContext.Provider>
  );
};
