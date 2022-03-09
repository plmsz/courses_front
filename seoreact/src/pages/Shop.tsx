import { Helmet } from "react-helmet-async";

function Shop() {
    return ( 
    <div>
        <Helmet>
            <title>Shop</title>
            <meta name="description" content="Shop our latest projects now"/>
            <link rel="canonical" href="/shop"/>
        </Helmet>
        <h1>Shop</h1>
    </div> );
}

export default Shop;