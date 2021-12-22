import { Fragment } from "react";
import indexTeam from './indexTeam.module.css';
import TeamMemberList from "../../components/team/teamMemberList";
import SecondaryBar from "../../components/secondaryBar/secondaryBar";

function Team() {
    return(
        <Fragment>
            <div className= {indexTeam.container}>
                <div className={indexTeam.memberContainer}>
                    <hr />
                    <div className= {indexTeam.memberHeader}>
                    <h4>Team Members</h4>
                    <select name="sort" id="sort">
                       <option value="">Sort By</option>
                       <option value="Name">Name</option>
                       <option value="Profile">Profile</option>
                       <option value="Rating">Rating</option>
                   </select>
                    </div>
                    <div className={indexTeam.memberList}>
                        <TeamMemberList />
                    </div>
                </div>
                <div className={indexTeam.secondaryBar}>
                    <SecondaryBar />
                </div>
            </div>
        </Fragment>
    )
    }
    
    export default Team;