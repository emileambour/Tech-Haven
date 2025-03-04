document.addEventListener("DOMContentLoaded", function () {
    // Products Array (Expanded List)
    const products = [
        { name: "iPhone 16", price: "$799", image: "../images/iPhone16.png" },
        { name: "iPhone 15", price: "$699", image: "../images/iPhone15.png" },
        { name: "AirPods Max", price: "$549", image: "../images/AirPods Max.png" },
        { name: "AirPods 4", price: "$179", image: "../images/AirPods 4.png" },
        { name: "Apple Watch Ultra", price: "$249", image: "../images/Apple Watch Ultra.png" },
        { name: "iPad Pro", price: "$999", image: "../images/iPad Pro.png" },
        { name: "Apple TV", price: "$129", image: "../images/Apple TV.png" },
        { name: "Logitech Doorbell", price: "$199", image: "../images/Logitech Doorbell.png" },
        { name: "Ecobee", price: "$499", image: "../images/ecobee.png" },
        { name: "PS5 Controller", price: "$75", image: "../images/PS5 Controller.png" }
    ];

    const productContainer = document.getElementById("product-list");

    // Function to display products
    function displayProducts(filter = "") {
        productContainer.innerHTML = ""; // Clear current products

        products.forEach(product => {
            if (product.name.toLowerCase().includes(filter.toLowerCase())) {
                let productElement = document.createElement("div");
                productElement.classList.add("product");

                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name} - ${product.price}</p>
                    <button class="add-to-cart">Add to Cart</button>
                `;

                productContainer.appendChild(productElement);
            }
        });

        // Handle Add to Cart Button Click
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                alert("Product added to cart! (Feature to be implemented)");
            });
        });
    }

    // Initial Load
    displayProducts();

    // Search Bar Functionality
    document.getElementById("searchBar").addEventListener("input", function (event) {
        displayProducts(event.target.value);
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
