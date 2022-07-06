import React from "react";
import { Grid }from '@material-ui/core';

import Product from './Product/Product';
import useStyle from './styles.js';

const products = [
    {id:1, name: "pull", description: "hugo boss ", price: '50$', image: './images/fashion-1283863_1920.jpg'},
    {id:2, name: "shoes", description: "nike air", price: '120$', image: 'images/shoes-2216498_1920.jpg'},
]

const Products = () => {
    const classes = useStyle();
    
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
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