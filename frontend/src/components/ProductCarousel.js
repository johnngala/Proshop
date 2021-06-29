import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Carousel,Image} from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import {listTopProducts} from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const {loading, error, products} = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    },[dispatch])

    return loading ? <Loader/> : error ? <Message variant = 'danger'>{error}</Message> : (
        <Carousel pause = 'hover' className = 'bg-dark'>
            {
                products.map(product => (
                    <Carousel.Item key={product._id} className = 'to be added'>
                        <Link to = {`/product/${product._id}`} className = 'carousel-a'>
                            <Image src = {product.image} alt = {product.name} fluid className = 'carousel-img'/>
                            <Carousel.Caption className = 'carousel-caption'>
                                <h2 className = 'carousel-caption h2'>{product.name} $({product.price})</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default ProductCarousel
