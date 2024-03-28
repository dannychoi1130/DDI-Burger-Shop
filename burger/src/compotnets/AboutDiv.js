import styles from "./AboutDiv.module.css";
import abtUsPic from "./Vector.png";

function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div className={styles.subContainer}>
        <div className={styles.content} id="abtContent">
          Danny, Dan and Isaac are burgerholic. They always find and eat burger
          in worldwide. They want to share the best taste of burger with Hong
          Kong People. Therefore, they established DDI in 2024.
          <br />
          Our passion for culinary innovation drives us to continuously
          experiment with thousands of ingredient combinations until we achieve
          the perfect recipe. We use only the finest, high-quality ingredients,
          each one meticulously selected for maximum flavor impact, including
          our custom burger spice blend, carefully curated to add a distinctive,
          bold flavor to every bite.
        </div>
        <img className={styles.bugrger} src={abtUsPic} alt="white_burger" />
      </div>
    </div>
  );
}

function OurProduct() {
  return (
    <div className={styles.container}>
      <h1>Our Product</h1>
      <h2>We make 100% hand made juicy delicious burgers</h2>
      <div className={styles.content} id="pdtContent">
        Our made-to-order burgers are built differently. Using our signature
        proprietary burger smasher, our culinary masters utilize a special
        smashing technique to create a mouthwatering caramelized, crispy sear
        that seals in all the juicy goodness within.
      </div>
      <h2>Every burgers are CERTIFIED</h2>
      <div className={styles.content} id="pdtContent">
        A burger lovers ourselves, we take our craft seriously - and it all
        starts with the patty. We tried hundreds of beef options until we found
        the one that truly made our taste buds sing: Certified Angus Beef.
        <br /> <br />
        We take great pride in using only the finest beef for our burgers, which
        is sourced from family-owned farms and ranches throughout the United
        States, such as Walter Angus located near our Colorado headquarters.
        These farms share our commitment to sustainable, climate-friendly
        practices and humane animal care.
        <br /> <br />
        Certified Angus Beef® is more than just a name - it's a mark of quality.
        It's the only beef that's certified with 10 strict standards, ensuring
        that each and every patty is juicy, delicious, and full of flavor.
        <br />
        <img
          className={styles.angus}
          src="https://cabcattle.com/wp-content/uploads/TtB/CAB-Targeting-The-Brand-Logo.png"
        />
      </div>
      <h1>What is a smashburger?</h1>
      <div className={styles.content} id="pdtContent">
        To us, burgers are something special. We're obsessed with making the
        best, because honestly… who wants a boring burger? <br /> <br />
        Using our customized, metal smasher, designed to perfectly fit our patty
        size (fancy, right?), every burger is freshly smashed onto a hot
        buttered, seasoned grill to caramelize the patty creating the most
        flavorful, crave-able, juicy sear.
        <br /> <br />
        It's a dash of science mixed with culinary craft to deliver the perfect
        burger.
        <br />
        <img
          className={styles.smasher}
          src="https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Smashing_burger_hand_close_up_VERTICAL_648aff03b8.jpg"
        />
      </div>
      <h1>Gluten-Free</h1>
      <div className={styles.content} id="pdtContent">
        If you or a friend or family member that you're dining with has a gluten
        sensitivity, consider trying one of these tasty, gluten-free options:
        <br /> <br />
        <li>Gluten Free Bun</li>
        <li>Side Salad</li>
        <img
          className="bun"
          src="https://smashburger.com/cdn-cgi/image/format=auto,width=640,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/gluten_free_1a5e58bd47.webp"
        />
      </div>
    </div>
  );
}

function OurLocation() {
  return (
    <div className={styles.container}>
      <h1>Our Location</h1>
      <div className={styles.content}>
        Opening Hours: Thursday: 5:30-8:30pm Friday-Saturday: 11:30-8:30pm
        Sunday: 11:30-5:30pm 58 Old Colony Ave, Boston, MA 02127
      </div>
      <iframe
        width="600"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=mcdonald&key=AIzaSyC4K-ULyb3r3oTdq4vwt0N7Q5FWkmikNKo"
      ></iframe>
    </div>
  );
}

function About() {
  return (
    <>
      <AboutUs />
      <OurProduct />
      <OurLocation />
    </>
  );
}

export default About;
