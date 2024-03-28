import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./BurgerCarousel.module.css";
//npm i react-multi-carousel
function BurgerCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={3000}
      centerMode={true}
      autoPlay={true}
      pauseOnHover
      keyBoardControl={true}
      customTransition="transform 700ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className={styles.carousel}
    >
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://i.pinimg.com/originals/95/aa/34/95aa34722ae9ea7e8faa874e5d24ebab.png"
        />
        <div className={styles.desc}>Classic burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://smashburger.com/cdn-cgi/image/format=auto,width=640,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/turkey_Swiss_Mushroom_b9ace8e8c2.png"
        />
        <div className={styles.desc}>BBQ Burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4157.png"
        />
        <div className={styles.desc}>Chicken Burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://www.mosburger.com.au/website-images/Crispy_Fish_Burger.png"
        />
        <div className={styles.desc}>Fish Burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-juicy-burgers-with-a-transparent-background-png-image_9002761.png"
        />
        <div className={styles.desc}>Monster Cheeseburger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://i.pinimg.com/originals/97/da/26/97da268ca85129275b94af124e9862ed.png"
        />
        <div className={styles.desc}>Veggie Burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://png.pngtree.com/png-clipart/20231011/original/pngtree-tasty-mushroom-burger-png-image_13294310.png"
        />
        <div className={styles.desc}>Mushroom Burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
      <div className={styles.burgerContainer}>
        <img
          className={styles.burger}
          src="https://static.vecteezy.com/system/resources/previews/027/143/702/non_2x/fresh-tasty-avocado-burger-isolated-on-white-background-png.png"
        />
        <div className={styles.desc}>Avocado Burger</div>
        <button className={styles.orderBtn}>Order Now</button>
      </div>
    </Carousel>
  );
}
export default BurgerCarousel;
