function sortProducts() {
  const productList = document.getElementById("product-list");
  const products = Array.from(productList.getElementsByClassName("product"));
  const sortValue = document.getElementById("sort").value;

  products.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"), 10);
    const priceB = parseInt(b.getAttribute("data-price"), 10);

    return sortValue === "asc" ? priceA - priceB : priceB - priceA;
  });

  // Sắp xếp lại DOM
  products.forEach((product) => productList.appendChild(product));
}
