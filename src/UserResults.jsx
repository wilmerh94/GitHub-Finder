import { useContext } from 'react';
import { GithubContext } from './components/context/github/GithubContext';
import { Spinner } from './components/layout/Spinner';
import { UserItem } from './components/users/UserItem';

export const UserResults = () => {
 const { loading, users } = useContext(GithubContext);

 if (!loading) {
  return (
   <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
    {users.map((user) => (
     <UserItem key={user.id} user={user} required />
    ))}
   </div>
  );
 } else {
  return <Spinner />;
 }
};
