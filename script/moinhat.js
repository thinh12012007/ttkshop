const products = [
  {
    name: "Dao victorinox",
    img: "https://pos.nvncdn.com/c73071-7475/ps/20240917_gCbWZBicaF.jpeg",
    oldPrice: "15.000",
    newPrice: "9.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Đồ gia dụng",
  },
  {
    name: "DỤNG CỤ MÀI DAO VICTORINOX 7.8623 BUTCHER SHARPENING STEEL, RED",
    img: "https://pos.nvncdn.com/c73071-7475/ps/20230715_j837kr3Mia.jpeg",
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
    name: "VICTORINOX - KÉO ĐA NĂNG DÙNG TRONG GIA ĐÌNH (10 CM) - ĐẦU NHỌN",
    img: "https://pos.nvncdn.com/c73071-7475/ps/20220731_WFUQ2qZ3wUrCZEzA0DdMRfAP.jpg",
    oldPrice: "1.000.000",
    newPrice: "500.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 50,
    category: "Đồ gia dụng",
  },
  {
    name: "KÉO CẮT GIA CẦM VICTORINOX - 7.6343",
    img: "https://pos.nvncdn.com/c73071-7475/ps/20230615_B9niwtfmeb.jpeg",
    oldPrice: "500.000",
    newPrice: "300.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Đồ gia dụng",
  },
  {
    name: "PHỤ KIỆN VICTORINOX - DỤNG CỤ BÀO NHUYỄN VICTORINOX",
    img: "https://pos.nvncdn.com/c73071-7475/ps/20230621_aVvsFQLLn5.jpeg",
    oldPrice: "50.000",
    newPrice: "35.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Đồ gia dụng",
  },
  {
    name: "Balo Laptop Thời Trang, Fix Laptop 14,1 - 15,6 inch",
    img: "https://bizweb.dktcdn.net/100/044/266/products/kmore-jayce-17.jpg?v=1651045286330",
    oldPrice: "500.000",
    newPrice: "350.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Balo",
  },
  {
    name: "Balo cá tính",
    img: "https://bizweb.dktcdn.net/100/044/266/products/balo-laptop-kmore-the-scarllet-2-c61cf358-c094-4ac9-9300-f4c62a9409d1.jpg?v=1721720919267",
    oldPrice: "1.000.000",
    newPrice: "600.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Balo",
  },
  {
    name: "Balo Thể Thao",
    img: "https://bizweb.dktcdn.net/100/044/266/products/balo-the-thao-hier-energy-20.jpg?v=1722314468837",
    oldPrice: "1.000.000",
    newPrice: "700.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Balo",
  },
  {
    name: "Balo thời trang",
    img: "https://bizweb.dktcdn.net/100/044/266/products/balo-the-thao-kingbag-pontus-6.jpg?v=1723009809297",
    oldPrice: "1.000.000",
    newPrice: "600.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Balo",
  },
  {
    name: "Balo Vintpack For Macbook",
    img: "https://bizweb.dktcdn.net/100/044/266/products/balo-chong-soc-laptop-13-14-15-16-tomtoc-usa-ta1m1d1-1.jpg?v=1720233631407",
    oldPrice: "1.000.000",
    newPrice: "900.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 10,
    category: "Balo",
  },
  {
    name: "Áo gió nam AM mũ MWS004 màu DK.Orange-Black/ Black",
    img: "https://product.hstatic.net/200000174405/product/untitled-11_363a785eb50a4bd688362064b7167f80_master.png",
    oldPrice: "1.200.000",
    newPrice: "960.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Quần áo",
  },
  {
    name: "Bộ quần áo bóng đá nike Dri-FIT nam CW6132-010",
    img: "https://product.hstatic.net/200000174405/product/1644_e3da452e2c464555838d7a3eff0d0dc9_e3b6267291fe4636a9b90fdc1e81046e_02b63432e27a4f5c895a1a092d9b1934_master.jpg",
    oldPrice: "1.000.000",
    newPrice: "700.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Quần áo",
  },
  {
    name: "Áo running adidas OWN THE RUN nữ H59271",
    img: "https://product.hstatic.net/200000174405/product/1_01f3ac8b55aa448682c572039f029472_master.png",
    oldPrice: "500.000",
    newPrice: "350.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Quần áo",
  },
  {
    name: "Áo Tshirt nam AM màu trắng TSM2401-11",
    img: "https://product.hstatic.net/200000174405/product/dsc00672_6e5c1bbf84bd43b189b006bf434fe6d3_master.jpg",
    oldPrice: "400.000",
    newPrice: "320.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Quần áo",
  },
  {
    name: "Áo thể thao adidas Essentials nam IB0382",
    img: "https://product.hstatic.net/200000174405/product/1_bc882294f4784f869373850aed899776_master.jpg",
    oldPrice: "500.000",
    newPrice: "400.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Quần áo",
  },
  {
    name: "CHANEL COCO MADEMOISELLE EDP",
    img: "https://missi.com.vn/wp-content/uploads/2016/11/Chanel-Coco-Mademoiselle-EDP.jpg",
    oldPrice: "1.000.000",
    newPrice: "600.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Mỹ phẩm",
  },
  {
    name: "VERSACE BRIGHT CRYSTAL ABSOLU EDP",
    img: "https://missi.com.vn/wp-content/uploads/2016/09/Versace-Bright-Crystal-Absolu-EDP-90ml.jpg",
    oldPrice: "5.000.000",
    newPrice: "3.500.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Mỹ phẩm",
  },
  {
    name: "NARCISO RODRIGUEZ FOR HER EDP",
    img: "https://missi.com.vn/wp-content/uploads/2016/02/narciso-rodriguez-for-her-edp-1.jpg",
    oldPrice: "5.000.000",
    newPrice: "3.000.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 40,
    category: "Mỹ phẩm",
  },
  {
    name: "GUCCI BLOOM EDP",
    img: "https://missi.com.vn/wp-content/uploads/2018/01/Gucci-Bloom-EDP-.jpg",
    oldPrice: "5.000.000",
    newPrice: "3.500.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Mỹ phẩm",
  },
  {
    name: "YSL LIBRE EDP",
    img: "https://missi.com.vn/wp-content/uploads/2019/12/YSL-Libre-90-ml-600x643.jpg",
    oldPrice: "5.000.000",
    newPrice: "2.500.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 50,
    category: "Mỹ phẩm",
  },
  {
    name: "Bộ Playdoh Bé Học Làm Đầu Bếp Nhí PLAYDOH F6904",
    img: "https://www.mykingdom.com.vn/cdn/shop/files/bo-playdoh-be-hoc-lam-dau-bep-nhi-f6904.jpg?v=1718260770&width=823",
    oldPrice: "300.000",
    newPrice: "240.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Đồ gia dụng",
  },
  {
    name: "Đồ Chơi Trẻ Em Xếp Hình 3D Nat Geo: Đền Taj Mahal Puzzles DS0981H",
    img: "https://www.mykingdom.com.vn/cdn/shop/files/bo-xep-hinh-3d-nat-geo-den-taj-mahal-puzzles-ds0981h_12.jpg?v=1722310388&width=823",
    oldPrice: "300.000",
    newPrice: "210.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 30,
    category: "Đồ gia dụng",
  },
  {
    name: "Robot Biến Hình Cỡ Lớn Taki SUPERWINGS YW780258",
    img: "https://www.mykingdom.com.vn/cdn/shop/files/robot-bien-hinh-co-lon-taki-superwings-yw780258_3.jpg?v=1729666395&width=823",
    oldPrice: "500.000",
    newPrice: "400.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Đồ gia dụng",
  },
  {
    name: "Đồ Chơi Lắp Ráp Chiến Giáp Của Cole LEGO NINJAGO 71806",
    img: "https://www.mykingdom.com.vn/cdn/shop/files/71806_4bd05f3b-92a3-4f59-9596-fc0d990b708b.jpg?v=1725524372&width=823",
    oldPrice: "1.000.000",
    newPrice: "800.000",
    rating: 5,
    sold: 500,
    brand: "Chất lượng",
    origin: "Cao",
    discount: 20,
    category: "Đồ gia dụng",
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
