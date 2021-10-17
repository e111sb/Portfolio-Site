import "./projectComp.css";
//Individual project tile component. Requries a heading to render as designed. Sub heading, description, skills and link are optional.
function ProjectComp(props) {
    return(
        <div className="project">
            <div className="projectHeader">
                <h1 className="projectHeading">{props.heading}</h1>
            </div>
            <h2 className="projectSubHeading">{props.subHeading}</h2>
            <p>{props.description}</p>
            <h2 className="skills">{"Software and skills used: " + props.skills + "."}</h2>
            <a href={props.link}>
                <h2 className="link">Github link</h2>
            </a>
            {/*props.link !== undefined ? <a href={props.link}>
                <h2 className="link">Github link</h2>
            </a> : ""*/}
        </div>
    )
}
export default ProjectComp;