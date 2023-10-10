import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
export default function Footer() {
    const currYear = new Date().getFullYear()
  return (
    <div>
      <footer>
        <Container>
            <Row>
                <Col>
                    <p>ProShop &copy; {currYear}</p>
                </Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}
