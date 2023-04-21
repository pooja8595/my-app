import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

const CataloguePage = ({ name, email }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Get all products
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      console.log("products======================>",products)
      setFilteredProducts(response.data);
      console.log("filteredProducts=================>",filteredProducts)
    });

    // Get all product categories
    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      setCategories(response.data);
      console.log("categories-------------->",categories)
    });
  }, []);

  useEffect(() => {
    // Generate chart data
    const data = {
      labels: categories,
      datasets: [
        {
          data: categories.map((category) =>
            products.filter((product) => product.category === category).length
          ),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#C7B8F5",
            "#98AFC7",
            "#F9A7B0",
            "#B0E0E6",
          ],
        },
      ],
    };
    setChartData(data);
  }, [categories, products]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === e.target.value);
      setFilteredProducts(filtered);
    }
  };

  const truncateDescription = (description) => {
    const maxLength = 150;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    } else {
      return description;
    }
  };

  const renderProducts = () => {
    return filteredProducts.map((product) => (
      <div key={product.id}>
        <h3>{product.title}</h3>
        <p>{truncateDescription(product.description)}</p>
        {product.description.length > 150 && (
          <button onClick={() => alert(product.description)}>Read More</button>
        )}
        <p>Category: {product.category}</p>
        <hr />
      </div>
    ));
  };

  return (
    <div>
      <h1>Catalogue Management Application</h1>
      <p>Welcomen </p>
    </div>
  )
  }
  
export default CataloguePage;