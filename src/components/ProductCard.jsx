import React from 'react'
import logo from '../logo.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function ProductCard() {
    return (
        <div className="card border-warning m-3" style={{ width: '24rem' }}>
            <img src={logo} class="border-bottom card-img-top p-5" alt="product image" />
            <div class="card-body border-top">
                <p className="h3 m-0">Card title</p>
                <p className="mt-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='d-flex justify-content-between '>
                    <p className='mt-3 h4 '>&#8377; 9.99</p>
                    <Stack spacing={1} className='mt-3'>
                        <Rating size='large' name="half-rating-read" defaultValue={2.1} precision={0.1} readOnly />
                    </Stack>
                </div>
            </div>
        </div>
    )
}