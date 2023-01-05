import { Button} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import { FakeStoreProductContract } from "../contracts/FakeStoreProductContract";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { addToCart } from "./CartSlicer";
import { useDispatch } from "react-redux";



import { useState, useEffect } from "react";

export function MaterialUI(){
    
    const [products, setProducts] = useState<FakeStoreProductContract[]>([])
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("http://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        })
    },[]);

    function AddToCartClick(product:any){
        alert(JSON.stringify(product));
        dispatch(addToCart(product));
    }

    return(
        <div>
            <h2>Material UI Cards | <span>Your Cart Items []</span> </h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {
                products.map(product=> 
                    <Card style={{width:'200px', padding:'20px', margin:'20px'}}>
                        <CardMedia 
                           component="img"
                           image={product.image}
                           height="150"
                        />
                        
                        <CardContent>
                            <h3>{product.price}</h3>
                            <p>{product.title}</p>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>AddToCartClick(product)} color="success" variant="contained">Add to Cart</Button>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                    )
            }
            </div>
        </div>
    )
}
