import Layout from "../components/Layout"; // Reusable layout wrapper
import SearchForm from "../components/SearchForm"; // Form to search the Met Museum API

const Home = () => (
  <Layout>
    <h1>Welcome to the Met Museum Collection</h1>
    <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
      Explore a vast collection of art and historical pieces from one of the world’s most prestigious museums.
      Use the search bar below to discover paintings, sculptures, artifacts, and more.
    </p>

    {/* Uncomment the line below to enable the search form */}
    {/* <SearchForm /> */}

    <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#555" }}>
      Start by searching for keywords like “Van Gogh”, “Armor”, or “Egypt”.
    </p>
  </Layout>
);

export default Home; // Export the Home component for routing
