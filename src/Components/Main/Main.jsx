import { CardComponent } from "../Card/Card";
import { NavComponent } from "../Navbar/Navbar";

export const MainComponent = ()=>{

    return (
        <div className="main">
            <NavComponent></NavComponent>
            <CardComponent></CardComponent>
        </div>
    );
}