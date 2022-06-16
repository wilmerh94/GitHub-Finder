import React from 'react';
import { UserResults } from '../../UserResults';
import { UserSearch } from '../users/UserSearch';

export const Home = () => {
 return (
  <>
   <UserSearch />
   <UserResults />
  </>
 );
};
