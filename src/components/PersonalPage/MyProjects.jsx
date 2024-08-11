import { useState, useEffect } from "react";
import repoIcon from "../../assets/repo-icon.png";
import "./MyProjects.css";

const MyProjects = ( {links} ) => {
    const [projectRepos, setProjectRepos] = useState([]);
    
    const githubLink = Object.values(links)[1];
    const githubUserName = githubLink.substring(19);

    const getProjectRepos = async () => {
        const response = await fetch(`https://api.github.com/users/${githubUserName}/repos?per_page=100`);
        if(!response.ok) {
            throw new Error(`Failed to fetch repos! status: ${response.status}`)
        }
        let githubRepos = await response.json();
        githubRepos = githubRepos.slice(0, 50);
        setProjectRepos(githubRepos);
    }

    const mappedProjects = projectRepos.map((repo) => {
        return (
            <div key={repo.id} className="project" >
                <img className="repo-icon" src={repoIcon}/>
                <ul key={repo.id} id="repo-title">{repo.name}</ul>
            </div>
        );
    })

    useEffect(() => {
        getProjectRepos()
    },[])
    
    return ( 
        <>
            <h1>My Projects:</h1>
            <div className="project-container">{mappedProjects}</div>
        </>
        
     );
}
 
export default MyProjects;