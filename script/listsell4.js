const products = [
  {
    name: "iPhone 16 Pro Max 256GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png",
    oldPrice: "33.000.000",
    newPrice: "33.000.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 15 Pro Max 256GB",
    img: "https://product.hstatic.net/1000356936/product/black_w27897_e__3__b336a5131ed247fda0280aefc602f2b4.jpg",
    oldPrice: "27.000.000",
    newPrice: "27.000.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
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
    name: "iPhone 16 Pro 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    oldPrice: "28.490.000",
    newPrice: "24.392.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 10,
    category: "Điện thoại",
  },
  {
    name: "iPhone 15 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png",
    oldPrice: "19.690.000",
    newPrice: "19.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 14 Pro Max 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png",
    oldPrice: "25.690.000",
    newPrice: "25.690.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "iPhone 15 Plus 128GB",
    img: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png",
    oldPrice: "20.550.000",
    newPrice: "20.550.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Điện thoại",
  },
  {
    name: "SIR CLASSIC LOAFER - LF17",
    img: "https://bizweb.dktcdn.net/100/044/266/products/balo-the-thao-kingbag-pontus-6.jpg?v=1723009809297",
    oldPrice: "1.750.000",
    newPrice: "1.487.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Giày",
  },
  {
    name: "SAINT PAUL OXFORD - OF08",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf1709.jpg?v=1726570237953",
    oldPrice: "1.750.000",
    newPrice: "1.487.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 0,
    category: "Giày",
  },
  {
    name: "Đồ Chơi Lắp Ráp Thùng Gạch Trung Classic Sáng Tạo LEGO CLASSIC 10696",
    img: "https://www.mykingdom.com.vn/cdn/shop/files/10696_7d115577-7174-438d-9b64-a520c1674914.jpg?v=1725529622&width=823",
    oldPrice: "1.000.000",
    newPrice: "700.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Đồ gia dụng",
  },
  {
    name: "Bông Tăm JOMI Kháng Khuẩn (200 Que)",
    img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-bong-tam-jomi-khang-khuan-200-que-1708318689_img_385x385_622873_fit_center.png",
    oldPrice: "50.000",
    newPrice: "40.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Mỹ phẩm",
  },
  {
    name: "Nước Rửa Tay Lifebuoy Bạc Bảo Vệ Chai 180g",
    img: "https://media.hcdn.vn/catalog/product/f/a/facebook-dynamic-nuoc-rua-tay-lifebuoy-bac-bao-ve-180g-1708740728_img_385x385_622873_fit_center.jpg",
    oldPrice: "50.000",
    newPrice: "30.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Mỹ phẩm",
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
