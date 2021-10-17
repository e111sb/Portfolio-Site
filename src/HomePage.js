import "./homePage.css";
import ProjectComp from "./ProjectComp";
function HomePage() {
    return (
    <div>
    <div className="header">
        <h1 className="title">Ellis Bowman</h1>
        <h2 className="subTitle">Enthusiastic and receptive developer</h2>
    </div>
        <div className="projectContainer">
            <ProjectComp 
            heading="e111s.com" 
            subHeading="Dynamic Website with Static Content" 
            description="This is a simple website containing static content which features dynamic resizing, allowing this site to look great on a variety of different devices."
            skills="React, JavaScript, CSS, Web Development"/>
        </div>
    </div>

    );
}
export default HomePage;