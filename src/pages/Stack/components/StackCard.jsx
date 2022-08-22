import { StyledCard } from "../styles/styles"

function StackCard({title, url, children}) {
  return(
    <StyledCard>
      <h3><a href={url} target='_blank'>{title}</a></h3>
      {children}
    </StyledCard>
  )
}
export default StackCard