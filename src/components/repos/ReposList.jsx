import { RepoItem } from './RepoItem';

export const ReposList = ({ repos }) => {
 return (
  <div className='rounded-lg shadow-lg card bg-base-100'>
   <div className='card-body'>
    <h2 className='text-3xl my-4 font-bold card-title'>Latest Repositories</h2>

    {repos
     .filter((repo, index) => index < 6)
     .map((repo) => (
      <RepoItem key={repo.id} repo={repo} required />
     ))}
   </div>
  </div>
 );
};
