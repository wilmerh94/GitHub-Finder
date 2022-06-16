# Getting Started with React App + TailwindCSS + Daisy UI

This project has been created with the following technologies:
React, TailwindCSS, Daisy UI, React-DOM-Router

## Next Step getting the layout for NavBar and table to find Github API

To get the Github API, you need to go to your user account and in developer tools, you can see the API key that you will create.

## Using useState to get the data from Github API

At the beginning of the project I use the useState to get the data from Github API. Later in the project I will change this to useReducer

```
import { useState } from 'react';

const [users, setUsers] = useState([])

const [loading, setLoading] = useState(true)

```

## Using useContext

I create a separate file for this Hook, and I import it in the main file.

```
export const NAMEContext = createContext();
export const NAMEProvider = ({ children }) => {
return (
<GithubContext.Provider value={{ VALUES THAT YOU ARE GOING TO PROVIDE TO THE CHILDREN }}>`
{children}
</GithubContext.Provider>
);
};

```

## Fetching the API from Github

Create a file called .env and imported to my Context Hook

```
REACT_APP_GITHUB_URL="https://api.github.com"
REACT_APP_GITHUB_TOKEN=" TOKEN THAT YOU WILL GET FROM YOUR ACCOUNT"

```

## Adding the Reducer and Context together

I create a Reducer where i can call the action I want to do when a function is call in Context

## Creating the GithubActions

Adding this file I can pass around my code what kind of actions I want to call and make my code cleaner and also easier to read GithubContext where It contain the state and the dispatch function

## Adding Axios to my project

```
yarn add axios

```

I changed the code in GithubActions to use the Axios library.

```
const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
header: {
Authorization: `token ${GITHUB_TOKEN}`,
},
);

const { items } = await response.json();
return items;

```

to create

```
const response = await fetch(`${GITHUB_URL}/search/users?${params}

return response.data.items

```

and

```
export const getUser = async (login) => {
const response = await fetch(`${GITHUB_URL}/users/${login}`, {
header: {
Authorization: `token ${GITHUB_TOKEN}`,
},
});
if (response.status === 404) {
window.location = '/notfound';
} else {
const data = await response.json();
return data;
}
};

// Get search repos

export const getUserRepos = async (login) => {
const params = new URLSearchParams({
sort: 'created',
per_page: 5,
});

const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
header: {
Authorization: `token ${GITHUB_TOKEN}`,
},
});

const data = await response.json();

return data;
};

TO create
export const getUserAndRepos = async (loing) => {
const [ user, repos ] = await Promise.all([
github.get(`/users/${login}`),
github.get(`/users/${login}/repos`)
]);
return { user, repos }

}

```

## Changing User because Axios

```
const userData = await getUser(params.login);
dispatch({ type: 'FETCH_USER', payload: userData });

const userRepoData = await getUserRepos(params.login);
dispatch({ type: 'FETCH_REPOS', payload: userRepoData });

```

## Adding filter in Reposlist

```
    {repos
     .filter((repo, index) => index < 6)
     .map((repo) => (
      <RepoItem key={repo.id} repo={repo} required />
     ))}
```

Adding filter I can filter the repos by amount of repositories I want to show in my page.
