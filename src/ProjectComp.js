import "./projectComp.css";
//Individual project tile component. Requries a heading, subheading, description and list of skills to render correctly.
function ProjectComp(props) {
    return(
        <div className="project">
            <div className="projectHeader">
                <h1 className="projectHeading">{props.heading}</h1>
            </div>
            <h2 className="projectSubHeading">{props.subHeading}</h2>
            <p>{props.description}</p>
            <h2 className="skills">{"Software and skills used: " + props.skills + "."}</h2>
        </div>
    )
}
export default ProjectComp;