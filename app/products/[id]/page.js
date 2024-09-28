import Header from "@/app/header/page";

export default function () {
  return (
    <div>
      <Header />
      <div className="container-detail">
        <div class="list-detail">
          <div class="item-detail">
            <div class="img-detail">
              <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
            </div>
            <div class="content-detail">
              <div class="category-detail">Quần áo trẻ em</div>
              <div class="price-detail">
                <span class="old-detail">2000000</span>
                <span class="new-detail">200</span>
              </div>
              <button class="addCard-detail">Mua ngay</button>
              <button class="addCart-detail">Add cart</button>
            </div>
          </div>
        </div>
        <p className="description-detail">Description</p>
      </div>
    </div>
  );
}
