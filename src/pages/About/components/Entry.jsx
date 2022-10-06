import { StyledEntry } from "../styles/styles"

function Entry({title, org, date_start, date_end, description='', children}){
  return(
    <StyledEntry>
      <div className="title-container">
        <h4>{title}</h4>
        <p>{date_start} - {date_end}</p>
      </div>
      <div className="desc-container">
        <h3>
        {org}
        </h3>
        <p>
          {description}
        </p>
      </div>
    </StyledEntry>
  )

}

export default Entry