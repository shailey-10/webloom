import { Fragment } from "react";
import StatusList from "../components/status/statusList";
import indexDash from './indexDash.module.css'
import Card from "../components/cards/card";
import Image from "next/image";
import TopPerformerList from "../components/top performers/topPerformerList";
import Intermediate from "../components/header/intermediate";

function Dashboard() {
return (
<Fragment>
    <div className={indexDash.main}>
<StatusList />
<div className={indexDash.bar}>
<Card type = "bar" intermediate = {<Intermediate type = "bar"/>} header = "Task Activities" image = {<Image src="/dots.svg" width={4} height={20}/>}/>
</div>
</div>
<div className={indexDash.main}>
<div className={indexDash.line}>
<Card intermediate = {<Intermediate type = "line"/>}  type = "line" header = "Team Activities" image = {<Image src="/dots.svg" width={4} height={20}/>}/>
</div>
<div className={indexDash.top}>
<Card type = "top" header = "Team Member Performance"/>
{/* <TopPerformerList /> */}
</div>
</div>
</Fragment>
)
}

export default Dashboard;