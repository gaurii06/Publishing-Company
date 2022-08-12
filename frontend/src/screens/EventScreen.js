import Card from "react-bootstrap/Card";


function EventScreen()
{
    return (
    <div className="events">
        <h1 className="text-center">Upcoming Events</h1>
        <div className="event-info">
        <Card>
            <img className="eventimg" src='/images/m2.jpg' alt="harry/porter"></img>
            <Card.Title>Harry Porter</Card.Title>
            <Card.Body>The first copy of harry porter will be out very soon. Stay tuned!</Card.Body>
        </Card>
        </div>
    </div>
    )
}

export default EventScreen;