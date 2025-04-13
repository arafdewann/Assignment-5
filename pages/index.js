/*********************************************************************************
*  WEB422 – Assignment 5
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
*
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: MD Arafat Koyes   Student ID: 133682229        Date: April 13, 2025
*
********************************************************************************/

// index.js - Home page of the Met Museum Artwork Explorer app
// Displays a welcome message and provides access to the search feature (if enabled)


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
