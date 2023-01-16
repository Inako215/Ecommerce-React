import Test from "../components/nav-bar/Test";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import FeaturedSection from "../components/featured-products/FeaturedSection";

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

const products = [
  {
    name: "Product 1",
    description: "This is a product",
    price: 100,
    image:
      "https://as1.ftcdn.net/v2/jpg/01/36/49/58/1000_F_136495834_u0fXo0uaF9wTfF4fYAirh6uxzZtVcvZN.jpg",
    slug: "#",
  },
  {
    name: "Product 2",
    description: "This is a product",
    price: 100,
    image:
      "https://as2.ftcdn.net/v2/jpg/01/07/61/71/1000_F_107617181_zFJISquU7MmxR07NWDczkU2dVPQgKhDA.jpg",
    slug: "#",
  },
  {
    name: "Product 3",
    description: "This is a product",
    price: 100,
    image:
      "https://as2.ftcdn.net/v2/jpg/02/30/40/25/1000_F_230402595_gUAqfUlUZQ17qa7Wz2PX2wUAPUYLJb9p.jpg",
    slug: "#",
  },
  {
    name: "Product 4",
    description: "This is a product",
    price: 100,
    image:
      "https://as1.ftcdn.net/v2/jpg/01/24/93/62/1000_F_124936260_woeNc15qJ18wojDtwOVjT0p82eQvNmHA.jpg",
    slug: "#",
  },
  {
    name: "Product 5",
    description: "This is a product",
    price: 100,
    image:
      "https://as2.ftcdn.net/v2/jpg/04/82/73/01/1000_F_482730120_uqyKkjl6aTdFra3DMrT3T6KLWbKgItSO.jpg",
    slug: "#",
  },
];

const HomePage = () => {
  return (
    <>
      <header className="App-header">
        <Test />
        <Header />
      </header>
      <main>
        <div className="container-fluid">
          <FeaturedSection products={products} />
        </div>
        <Body cards={catagories} />
      </main>
    </>
  );
};

export default HomePage;
