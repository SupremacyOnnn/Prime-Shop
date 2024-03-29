import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
export default function Product(props) {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${props.product._id}`}>
            <Card.Img src={props.product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/product/${props.product._id}`}>
                <Card.Title as ="div" className='product-title'>
                    <strong>{props.product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='h3'>
                $ {props.product.price}
            </Card.Text>
            <Rating rating = {props.product.rating} text={props.product.numReviews}></Rating>
        </Card.Body>
      </Card>
    </div>
  )
}
