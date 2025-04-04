document.addEventListener("DOMContentLoaded", () => {
    const createProductBtn = document.getElementById("createProductBtn");
    const productModal = document.getElementById("productModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalBtn = document.getElementById("modalBtn");
    const productList = document.getElementById("productList");

    createProductBtn.addEventListener("click", () => {
        productModal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", () => {
        productModal.style.display = "none";
    });


    window.addEventListener("click", (event) => {
        if (event.target === productModal) {
            productModal.style.display = "none";
        }
    });

    modalBtn.addEventListener("click", () => {
        const productData = {
            name: document.getElementById("productName").value.trim(),
            price: parseFloat(document.getElementById("productPrice").value.trim()),
            description: document.getElementById("productDescription").value.trim(),
            image: document.getElementById("productImage").value.trim()
        };

        if (!productData.name || isNaN(productData.price) || !productData.description || !productData.image) {
            alert("All fields are required!");
            return;
        }

    
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${productData.image}" alt="Product Image">
            <h3>${productData.name}</h3>
            <p>${productData.description}</p>
            <strong class="price">$${productData.price}</strong>
            <br>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        productList.appendChild(productCard);

        productCard.addEventListener("click", () => {
            productCard.classList.toggle("enlarged");
        });
        document.getElementById("productName").value = '';
        document.getElementById("productPrice").value = '';
        document.getElementById("productDescription").value = '';
        document.getElementById("productImage").value = '';

       
        productModal.style.display = "none";
    });
});
