// import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";


const products = [{
    id: 1,
    name: "sepatu baru",
    price: "Rp 1.000.000",
    image: "/images/shoes.jpg",
    description: 
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Velit officiis vitae quo et ullam sapiente doloremque, 
        delectus voluptatum tenetur facilis dolores dolorum earum consequuntur
        similique esse reiciendis aspernatur. Quasi, veniam!`
    },
    {
        id: 2,
        name: "sepatu lama",
        price: "Rp 500.000",
        image: "/images/shoes.jpg",
        description: 
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Velit officiis vitae quo et ullam sapiente doloremque, `
        },
    {
        id: 3,
        name: "sepatu second",
        price: "Rp 800.000",
        image: "/images/shoes.jpg",
        description: 
            `produk ini adalah terbaik yang berada di pasaran, `
    },
    
];

const ProductsPage = () => {
    return (
        <div className="flex justify-center my-5">
            {/* <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
                <a href="#">
                    <img 
                        src="/images/shoes.jpg" 
                        alt="product" 
                        className="p-8 rounded-t-lg"
                    />
                </a>
                <div className="px-5 pb-5">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-white">
                            Sepatu Baru
                        </h5>
                        <p className="text-m text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Velit officiis vitae quo et ullam sapiente doloremque, 
                            delectus voluptatum tenetur facilis dolores dolorum earum consequuntur
                            similique esse reiciendis aspernatur. Quasi, veniam!
                        </p>
                    </a>
                </div>
                <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white">
                        Rp1.000.000
                    </span>
                    <Button className="bg-blue-600">Add to Cart</Button>
                </div>
            </div> */}

            {/* Pemanggilan Card Product */}
            {/* <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo et ullam sapiente doloremque, 
                    delectus voluptatum tenetur facilis dolores dolorum earum consequuntur
                    similique esse reiciendis aspernatur. Quasi, veniam!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct> */}
            {/* <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"></CardProduct.Header>
                <CardProduct.Body title="Sepatu Lama">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Velit officiis vitae quo
                </CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"></CardProduct.Footer>
            </CardProduct> */}

            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}></CardProduct.Header>
                    <CardProduct.Body title={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price}></CardProduct.Footer>
                </CardProduct>
            ))};
        </div>
    )
}



export default ProductsPage;