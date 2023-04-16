import { CardComponent } from "../Card/Card";
import { NavComponent } from "../Navbar/Navbar";
import { SubmissionComponent } from "../Submission/Submission";

export const MainComponent = ()=>{

    return (
        <div className="main">
            <NavComponent></NavComponent>
            {/* <CardComponent></CardComponent> */}
            <SubmissionComponent></SubmissionComponent>
        </div>
    );
}