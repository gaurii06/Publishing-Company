
import team from "../team";
import Card from "react-bootstrap/Card";

function DeveloperScreen()
{
    return(
        <div className="people">
        <h1>Our Team</h1>
        
        <div className="Team">
            {team.members.map((member)=>(
                <div className="member-info">
                <Card>
                    <img src={member.image} alt={member.name}></img>
                    <Card.Body>
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>{member.dept}</Card.Text>

                    </Card.Body>
                </Card>
                </div>
                
            ))}
            </div>
            </div>
    )};

export default DeveloperScreen;