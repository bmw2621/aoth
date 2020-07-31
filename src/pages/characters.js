import React from "react"
import { Link } from "gatsby"
import { CardDeck, Card, Button } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"

const characters = [
  {
    name: 'Wranlar',
    imgSrc: 'http://www.fillmurray.com/100/100',
    charSheetSrc: '',
    description: 'This is a test description to discuss briefly the background of the character',
    race: 'Half-Elf',
    charClass: 'Ranger',
  },
  {
    name: 'Tellios',
    imgSrc: 'http://www.fillmurray.com/300/160',
    charSheetSrc: '',
    description: 'This is a test description to discuss briefly the background of the character',
    race: 'Half-Elf',
    charClass: 'Wizard',
  },
  {
    name: 'Gim',
    imgSrc: 'http://www.fillmurray.com/100/160',
    charSheetSrc: '',
    description: 'This is a test description to discuss briefly the background of the character',
    race: 'Half-Orc',
    charClass: 'Barbarian',
  },
  {
    name: 'Enialis',
    imgSrc: 'http://www.fillmurray.com/100/160',
    charSheetSrc: '',
    description: 'This is a test description to discuss briefly the background of the character',
    race: 'Half-Elf',
    charClass: 'Rouge',
  }
]

const CharacterPage = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Characters" />
    <CardDeck>
      {characters.map(character => {
        return (
          <Card>
            <Card.Img variant="top" style={{'height':'200px','objectFit':'cover'}} src={character.imgSrc} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.race}-{character.charClass}</Card.Text>
              <Card.Text>{character.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
              <Button>Character Sheet</Button>
            </Card.Footer>
          </Card>
        )}
      )}
    </CardDeck>
  </Layout>
)

export default CharacterPage
