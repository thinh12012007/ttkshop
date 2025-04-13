const products = [
  {
    name: "CAMEA LUG LOAFER",
    img: "https://product.hstatic.net/1000356936/product/gray_w28814_giay_luoi_cole_haan_nu__5__592fd7f86a454e0c88159e1f56d599e2.jpg",
    oldPrice: "5.000.000",
    newPrice: "3.257.600",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 36,
    category: "Giày",
  },
  {
    name: "MYLAH HEEL PUMP 75MM",
    img: "https://product.hstatic.net/1000356936/product/black_w27897_e__3__b336a5131ed247fda0280aefc602f2b4.jpg",
    oldPrice: "5.000.000",
    newPrice: "4.500.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Giày",
  },
  {
    name: "ZERØGRAND MERITT SANDAL",
    img: "https://product.hstatic.net/1000356936/product/bekhaki_w30423_d__3__b8f22b2d5ccc4a50bbd78b1eff6957d4.jpg",
    oldPrice: "4.690.000",
    newPrice: "3.752.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Giày",
  },
  {
    name: "GRANDPRØ BOAT SHOE",
    img: "https://product.hstatic.net/1000356936/product/blue_c38875_d__2__59379bfd9664410f8acbafffa4da592c.jpg",
    oldPrice: "4.990.000",
    newPrice: "3.992.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Giày",
  },
  {
    name: "GRANDPRØ CROSSOVER SNEAKER",
    img: "https://product.hstatic.net/1000356936/product/silver_c39590_d__5__b7f8d3e57e9a4184b6df4c01e1715457.jpg",
    oldPrice: "5.490.000",
    newPrice: "4.392.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Giày",
  },
  {
    name: "ØRIGINALGRAND WINGTIP OXFORD",
    img: "https://product.hstatic.net/1000356936/product/blue_c36878_giay_oxford_colehaan__4__99ea687a8d714e24a0b63dcb69123cc9.jpg",
    oldPrice: "5.690.000",
    newPrice: "3.641.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 36,
    category: "Giày",
  },
  {
    name: "VANDAM PUMP 45MM",
    img: "https://product.hstatic.net/1000356936/product/dark_red_w29179_giay_cao_got_cole_haan__3__4823c808d35f4bb98758123367c481f5.jpg",
    oldPrice: "5.690.000",
    newPrice: "3.186.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 44,
    category: "Giày",
  },
  {
    name: "TONKIN CAPTOE OXFORD - OF07",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf8517.jpg?v=1715778152663",
    oldPrice: "1.550.000",
    newPrice: "1.317.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Giày",
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
    discount: 20,
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
    discount: 20,
    category: "Giày",
  },
  {
    name: "CLUBMAN DERBY - DB24",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/z5143317784039-b240d3effacde7daea6355bdbab40821.jpg?v=1707272146543",
    oldPrice: "2.150.000",
    newPrice: "1.827.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "SAVILLE CAPTOE DERBY - DB32",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf1896-4.jpg?v=1723798094307",
    oldPrice: "1.850.000",
    newPrice: "1.017.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 45,
    category: "Giày",
  },
  {
    name: "CLASSIC LOAFERS - LF02",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf5308.jpg?v=1695179894367",
    oldPrice: "1.550.000",
    newPrice: "1.317.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "BE BOLD DERBY - DB34",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf7511.jpg?v=1716175478113",
    oldPrice: "2.150.000",
    newPrice: "1.827.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "THE COUNTRYMAN DERBY - DB14",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf2307.jpg?v=1730694621110",
    oldPrice: "1.850.000",
    newPrice: "1.572.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "THE NEWGEN DERBY - DB01",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf6077.jpg?v=1667894273877",
    oldPrice: "1.850.000",
    newPrice: "1.572.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "CLASSY CHELSEA BOOTS - BO14",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf8113.jpg?v=1711855858037",
    oldPrice: "1.950.000",
    newPrice: "1.657.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "CLASSY DOUBLE MONKSTRAP - MS04S",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf7203-1.jpg?v=1711100463300",
    oldPrice: "1.750.000",
    newPrice: "962.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 45,
    category: "Giày",
  },
  {
    name: "SAVILLE CAPTOE OXFORD - OF32",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf9565.jpg?v=1693217659420",
    oldPrice: "1.750.000",
    newPrice: "1.467.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 15,
    category: "Giày",
  },
  {
    name: "SIR TASSEL LOAFER - LF12",
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf3705.jpg?v=1715777994730",
    oldPrice: "1.750.000",
    newPrice: "962.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 45,
    category: "Giày",
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
