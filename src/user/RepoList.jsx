import React from 'react';

function generateRepoListElement(repos){
    return repos.map((repo) => (
        <p key={repo.name}><b>{repo.name}: </b> {repo.description === null ? "(No description)" : repo.description}</p>
    ))
}

const RepoList = props => (
    <div>
        {generateRepoListElement(props.repos)}
    </div>
);

export default RepoList;