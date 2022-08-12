import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

function Member(props)
{
    const {member }=props;
    return(
    <Card>
      <Link to={'/member/' + member.slug}>
      <img src={member.image} className="card-img-top" alt={member.name}></img>
      </Link>
      <Card.Body>
      <Link to={'/member/' + member.slug}>
      <Card.Title>{member.name}</Card.Title>
      </Link>
      <Card.Text>{member.dept}</Card.Text>
      <Card.Text>{member.age}</Card.Text>
      </Card.Body>
    </Card>
    );
}

export default Member;
