import Test from "../components/nav-bar/Test";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import FeaturedCarousel from "../components/featured-products/FeaturedCarousel";

// This is the array of objects that will be used to display the cards
const catagories = [
  {
    title: "Womens",
    image:
      "https://as1.ftcdn.net/v2/jpg/01/36/49/58/1000_F_136495834_u0fXo0uaF9wTfF4fYAirh6uxzZtVcvZN.jpg",
    slug: "#",
  },
  {
    title: "Mens",
    image:
      "https://as2.ftcdn.net/v2/jpg/01/07/61/71/1000_F_107617181_zFJISquU7MmxR07NWDczkU2dVPQgKhDA.jpg",
    slug: "#",
  },
  {
    title: "Bags",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/30/40/25/1000_F_230402595_gUAqfUlUZQ17qa7Wz2PX2wUAPUYLJb9p.jpg",
    slug: "#",
  },
  {
    title: "Shoes",
    image:
      "https://as1.ftcdn.net/v2/jpg/01/24/93/62/1000_F_124936260_woeNc15qJ18wojDtwOVjT0p82eQvNmHA.jpg",
    slug: "#",
  },
  {
    title: "Accessories",
    image:
      "https://as2.ftcdn.net/v2/jpg/04/82/73/01/1000_F_482730120_uqyKkjl6aTdFra3DMrT3T6KLWbKgItSO.jpg",
    slug: "#",
  },
];

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <Header />
        <FeaturedCarousel />
        <Body cards={catagories} />
      </header>
    </div>
  );
};

export default HomePage;
