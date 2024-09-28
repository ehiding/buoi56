"use client";

import { useRouter } from "next/navigation";
import Header from "../header/page";

export default function (params) {
  console.log(params);

  const router = useRouter();

  console.log(router);

  const onAccessDetail = () => {
    router.push("/products/1");
  };
  return (
    <div>
      <Header />
      <div>
        <div className="container">
          <div class="list">
            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>

            <div class="item">
              <div class="img">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Product-documentation-icon.png" />
              </div>
              <div class="content">
                <div class="category">Quần áo trẻ em</div>
                <div class="price">
                  <span class="old">2000000</span>
                  <span class="new">200</span>
                </div>
                <button class="addCard" onClick={onAccessDetail}>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
