import { useEffect, useState } from "react";
import { ProductContract } from "../contracts/ProductContract";


export function ProductComponent(){
    const [product, setProduct] = useState<ProductContract|undefined>();
    useEffect(()=>{
        setProduct({
            Name: "Samsung TV",
            Price: 45000.44,
            Stock: true,
        })
    })
    return(
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product?.Name}</dd>
                <dt>Price</dt>
                <dd>{product?.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product?.Stock==true)?"Available":"Out of Stock"}</dd>
            </dl>
        </div>
    )
}