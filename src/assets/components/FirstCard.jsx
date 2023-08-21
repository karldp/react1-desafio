import Card from 'react-bootstrap/Card'
import React from 'react'
import Tags from './Tags'

const FirstCard = ({title, picture, description, TagName, TagBackground}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags TagName={TagName} TagBackground={TagBackground}/>
      </Card.Body>
    </Card>
    </>
  )
}

export default FirstCard