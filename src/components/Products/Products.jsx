import React from "react";
import { Grid }from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id:1, name: "pull", description: "slim", price: '50$'},
    {id:2, name: "shoes", description: "nike air", price: '120$'},
]

const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>

    </main>

    );
   
}

export default Products