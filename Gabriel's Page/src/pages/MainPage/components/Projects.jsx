import {useEffect, useState} from 'react'
import { StyledProject } from '../styles/styles';

function Projects() {
  const [gitData, setGitData] = useState(undefined)

  useEffect(() => {
    fetch('https://api.github.com/users/Khmlwugh/repos')
    .then((res) => res.json())
    .then((data) => {
      setGitData(data);
      console.log(data)
    })
  }, [])
  

  return(
    <div>
      {gitData && gitData.map((project, index) => {
      return (
        <StyledProject key={index}>
          <div className='project--container'>
            <h3 className='project--title'>
              <a href={project.html_url} alt='' target='_blank'>
                {project.name}
              </a>
            </h3>
            <div className='project--tag'>{project.language}</div>
          </div>
          <div className='project--desc'>{project.description}</div>
        </StyledProject>
      )
      
      })}
    </div>
  )
}

export default Projects