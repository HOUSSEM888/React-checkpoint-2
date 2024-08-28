import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="my-3 mx-auto" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  jerseyNumber: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

Player.defaultProps = {
  imageUrl: 'https://via.placeholder.com/150',
};

export default Player;
