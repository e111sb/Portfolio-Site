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
            <ProjectComp text="In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different "/>

        </div>
    </div>

    );
}
export default HomePage;