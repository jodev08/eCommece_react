import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart} from '@material-ui/icons';

import useStyles from './style';

const Product = ({product}) => {

  
    const classes = useStyles();
  
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={Product.name} />
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant="h5" gutterBottom>
                        {product.name}
                </Typography>

                <Typography variant="h5" gutterBottom>
                        {product.price}
                </Typography>
            </div>

            <Typography variant='body2' color="textSecondary">{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label='Ajouter'>
                <AddShoppingCart />
            </IconButton>

        </CardActions>


    </Card>
  )
}

export default Product