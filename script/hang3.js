const products = [
  {
    name: "Chuột không dây Logitech G304",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_78_1_.png",
    oldPrice: "750.000",
    newPrice: "750.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Chuột",
  },
  {
    name: "iPhone 16 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png",
    oldPrice: "21.690.000",
    newPrice: "21.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 13 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png",
    oldPrice: "13.990.000",
    newPrice: "13.990.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "Chuột không dây Logitech Lift Vertical",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/1/1/11_6_33.jpg",
    oldPrice: "1.290.000",
    newPrice: "1.290.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 10,
    category: "Chuột",
  },
  {
    name: "PC CPS Đồ Hoạ D07 i5 14600F / 16GB - 500GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_468_6_1.png",
    oldPrice: "23.690.000",
    newPrice: "23.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iMac M4 2024 24 inch 8CPU 8GPU 16GB 256GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook_1__2_2.png",
    oldPrice: "35.690.000",
    newPrice: "35.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện tử",
  },
  {
    name: "Chuột chơi game không dây Dareu EM911X RGB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/c/h/chuot-choi-game-khong-day-dareu-em911x-rgb-1.png",
    oldPrice: "490.000",
    newPrice: "490.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Chuột",
  },
  {
    name: "Smart Tivi Samsung 4K 55 inch UA55CU8000",
    img: "https://cdn.tgdd.vn/Products/Images/1942/303231/Slider/smart-tivi-samsung-4k-55-inch-ua55cu8000638222686930807645.jpg",
    oldPrice: "11.490.000",
    newPrice: "11.490.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện tử",
  },
  {
    name: "Google Tivi QLED Aqua 4K 65 inch AQT65S800UX",
    img: "https://cdn.tgdd.vn/Products/Images/1942/327172/Slider/Dieu-khien-1920x1080.jpg",
    oldPrice: "17.990.000",
    newPrice: "13.990.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 22,
    category: "Điện tử",
  },
];

// Hàm để tạo các phần tử HTML cho từng sản phẩm
function createProductItem(product) {
  return `
          <div class="grid__column-2-4">
              <a class="home__product-items" href="./thanhtoandonhang.html" target="_blank">
                  <div class="home__product-img" style="background-image: url(${
                    product.img
                  });"></div>
                  <h4 class="home__product-name">${product.name}</h4>
                  <div class="home__product-price">
                      <span class="home__product-price-old">${
                        product.oldPrice
                      }</span>
                      <span class="home__product-price-new">${
                        product.newPrice
                      }</span>
                  </div>
                  <div class="home__product-action">
                      <span class="home__product-heart home__product-heart--active">
                          <i class="home__product-heart-empty fa-regular fa-heart"></i>
                          <i class="home__product-heart-fill fa-solid fa-heart"></i>
                      </span>
                      <div class="home__product-rating">
                          ${'<i class="home__product-rating-gold fa-regular fa-star"></i>'.repeat(
                            product.rating
                          )}
                          ${'<i class="fa-regular fa-star"></i>'.repeat(
                            5 - product.rating
                          )}
                      </div>
                      <span class="home__product-items-sold">${
                        product.sold
                      } đã bán</span>
                  </div>
                  <div class="home__product-orgin">
                      <span class="home__product__brand">${product.brand}</span>
                      <span class="home__product__orgin">${
                        product.origin
                      }</span>
                  </div>
                  ${
                    product.discount
                      ? `
                  <div class="home__product__favourite">
                      <i class="home__product__favourite-icon fa-solid fa-check"></i>
                      Yêu thích
                  </div>
                  <div class="home__product__safe-off">
                      <span class="home__product-percent">${product.discount}%</span>
                      <span class="home__product-label">GIẢM</span>
                  </div>`
                      : ""
                  }
              </a>
          </div>
      `;
}

function displayProducts(filteredProducts) {
  const gridRow = document.querySelector(".grid__rowr");
  gridRow.innerHTML = filteredProducts.map(createProductItem).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);

  const searchInput = document.querySelector(".header__search-input");
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
  });
});
