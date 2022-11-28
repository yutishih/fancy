import React from "react";
import Carousel from 'react-multi-carousel';
import '../Carousels/Carousel.css';
import 'react-multi-carousel/lib/styles.css';
import Product2 from '../Carousels/CarouselImgs/product-2.png'
import Product3 from '../Carousels/CarouselImgs/product-3.png'
import Product4 from '../Carousels/CarouselImgs/product-4.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class CarouselHalf1 extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        infinite={false}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
        <div className="image-container increase-size pr-2">
          <div className="card">
            <div className="card-cover">
              <img
                draggable={false}
                style={{ width: "100%", cursor: "pointer" }}
                src={Product2}
              />
            </div>
            <div className="card-hover">
              <img
                draggable={false}
                style={{ width: "100%", cursor: "pointer" }}
                src={Product4}
              />
              <div className="card-action py-5">
                <div><button className="cart p-3 text-lg">ADD TO CART</button></div>
                <div><button className="wishlist p-3 text-sm">Add to wishlist</button></div>
              </div>
            </div>
          </div>
          <div class="image-container-text card-infomation">
            <div className="card-info-group flex pt-4 pb-2">
              <div className='card-vendor w-1/2 text-xs'>
                <a href='#'>Ella - Halothemes</a>
              </div>
              <div className="review w-1/2 text-right">
                <span>stars</span>
              </div>
            </div>
            <div className="product-name pb-3 text-sm">
              <a href='#'>
                <span>
                  (Product 8) Sample - Clothes And Accessories
                  <span> - Lightskyblue</span>
                </span>
              </a>
            </div>
            <div className="product-price flex">
              <span className="pr-2"><del>$99.00</del></span>
              <span className="text-red text-lg font-bold">$79.00</span>
            </div>
            <div className="product-color pt-2">
              <ul className="flex">
                <li className="pr-2">
                  <div>
                    <a>
                      <label className="block w-7 h-7 rounded-full p-0.5 border-2 border-solid">
                        <div className="bg-lightskyblue w-5 h-5 rounded-full"></div>
                      </label>
                    </a>
                  </div>
                </li>
                <li>
                  <div>
                    <a>
                      <label className="block w-7 h-7 rounded-full p-0.5 border-2 border-solid">
                        <div className="bg-palegreen w-5 h-5 rounded-full"></div>
                      </label>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="image-container increase-size pr-2">
          <div className="card">
            <img
              draggable={false}
              style={{ width: "100%", cursor: "pointer" }}
              src={Product3}
            />
          </div>
          <div class="image-container-text">
            <p>1</p>
          </div>
        </div>

        <div className="image-container increase-size pr-2">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={Product2}
          />
          <div class="image-container-text">
            <p>1</p>
          </div>
        </div>

        <div className="image-container increase-size pr-2">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={Product3}
          />
          <div class="image-container-text">
            <p>1</p>
          </div>
        </div>

        <div className="image-container increase-size pr-2">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={Product2}
          />
          <div class="image-container-text">
            <p>1</p>
          </div>
        </div>

        <div className="image-container increase-size pr-2">
          <img
            draggable={false}
            style={{ width: "100%", cursor: "pointer" }}
            src={Product3}
          />
          <div class="image-container-text">
            <p>1</p>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default CarouselHalf1;
