import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./movies.css";
import NavbarMovies from "./NavbarMovies";

const Movies = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);

    useEffect(() => {
        call();
    }, []);

    const filteredCategoryList = [
        ...new Set(
            filteredCategory.map((CV) => {
                return CV.category;
            })
        ),
        "All",
    ];
    // console.log(`unique values are : ${filteredCategoryList}`);

    const call = async () => {
        try {
            const data = await fetch("https://dummyjson.com/products");
            const res = await data.json();
            setProducts(res.products);
            setFilteredProducts(res.products);
            setFilteredCategory(res.products);
        } catch (error) {
            console.log(`Error is: ${error}`);
        }
    };

    const filterItem = (match) => {
        if(match==="All"){
            setFilteredProducts(products)
            return;
        }
        const updatedData = products.filter((CV) => {
            return CV.category === match;
        });
        setFilteredProducts(updatedData);
    };

    return (
        <>
            <NavbarMovies
                filteredCategoryList={filteredCategoryList}
                filterItem={filterItem}
            />
            <div className="container_movies">
                {filteredProducts.map((CV) => {
                    const {
                        id,
                        title,
                        thumbnail,
                        price,
                        rating,
                        discountPercentage,
                        brand,
                        stock,
                        description,
                    } = CV;
                    return (
                        
                        <div className="box_movies" key={id}>
                            <h3>{title}</h3>
                            <img src={thumbnail} alt="" />
                            <p>{description.slice(0, 19)}...</p>
                            <span className="price">Price: {price}$</span>
                            <span>Rating: {rating}</span>
                            <p>
                                For early users discounts: {discountPercentage}%
                            </p>
                            <span>Brand: {brand}</span>
                            <p className="para_movies">Current stock: {stock}</p>
                            <Link to="/contact" target="_blank">
                                <button className="btn_movies">Buy Now</button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Movies;
