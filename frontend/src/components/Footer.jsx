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
                    <p>Prime Shop by Shubham Kumar Chowdhury &copy; {currYear}</p>
                </Col>
            </Row>
        </Container>
      </footer>
    </div>
  )
}
