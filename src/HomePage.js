import "./homePage.css";
import ProjectComp from "./ProjectComp";
function HomePage() {
    return (
    <div>
    <div className="header">
        <h1 className="title">Ellis Bowman</h1>
        <h2 className="subTitle">Enthusiastic and receptive developer</h2>
        <a href="https://github.com/e111sb">
            <h2 className="link">Github</h2>
        </a>
    </div>
        <div className="projectContainer">
            <ProjectComp 
            heading="e111s.com" 
            subHeading="Responsive Website with Static Content" 
            description="This is a simple website containing static content which features responsive resizing, allowing this site to look great on a variety of different devices."
            skills="React, JavaScript, CSS, Web Development"
            link="https://github.com/e111sb/Portfolio-Site"/>

        </div>
    </div>

    );
}
export default HomePage;