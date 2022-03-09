import React from 'react';
import './Product.css'
import Star from './../Star/Star';

const Product = (props) => {
    console.log('PROPS:', props);
    const { name, img, price, seller, star, stock } = props.z;

    const [a, b, c, d, e] = props.z.features;

    return (
        <div>
            <div className='product-class'>

                <div className='image-section'>
                    <img src={img} alt="" />
                </div>

                <div className='description-section'>
                    <h6 className='product-name'> {name} </h6>

                    <div className='about'>
                        <div className='name-section'>
                            <p>by: {seller} </p>
                            <h6> ${price} </h6>
                            <p>only {stock} left in stock - order soon</p>
                            <div className='buttonDiv'>
                                <button className='btn btn-success cartBtn'> <i className="bi bi-cart3 cartClass"></i> add to cart </button>
                            </div>
                        </div>

                        <div className='feature-section'>
                            <Star z={star}></Star>

                            <h6 className='feature'>Features:</h6>
                            <div className='special-feature'>
                                {a ? <ul>
                                    <li>
                                        {a ? a.description : ''} <span className='bold'>{a ? a.value : ''}</span>
                                    </li>
                                    {b ? <li>
                                        {b ? b.description : ''} <span className='bold'>{b ? b.value : ''}</span>
                                    </li> : ''}
                                    {c ? <li>
                                        {c ? c.description : ''} <span className='bold'>{c ? c.value : ''}</span>
                                    </li> : ''}
                                    {d ? <li>
                                        {d ? d.description : ''} <span className='bold'>{d ? d.value : ''}</span>
                                    </li> : ''}
                                    {e ? <li>
                                        {e ? e.description : ''} <span className='bold'>{e ? e.value : ''}</span>
                                    </li> : ''}

                                </ul> : ''
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;