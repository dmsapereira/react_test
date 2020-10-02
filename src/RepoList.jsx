import React from 'react';

function generateRepoListElement(repos){
    //checking if object is empty
    if(Object.entries(repos).length === 0)
        return [] 
    else{ 
        return repos.map((repo) => (
            <p key={repo.name}><b>{repo.name}: </b> {repo.description === null ? "(No description)" : repo.description}</p>
        ))
    }
}

const RepoList = props => (
    <div>
        {generateRepoListElement(props.repos)}
    </div>
);

export default RepoList;