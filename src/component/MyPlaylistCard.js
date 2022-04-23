import React from 'react'
import { Card, Col,  } from 'react-bootstrap'

function MyPlaylistCard({ playlist }) {
  const { name, description, images} = playlist
  return (
    <Col>
      <Card className="card text-white bg-success mb-3">
        <Card.Img  variant="top" src={images[0]?.url} />
        <Card.Body>
          <Card.Title >{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MyPlaylistCard