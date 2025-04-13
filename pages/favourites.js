import { useAtom } from "jotai"; // Import hook to use atoms (global state)
import { favouritesAtom } from "../store/atom"; // Import the favourites atom
import ArtworkCard from "../components/ArtworkCard"; // Import the ArtworkCard component

const Favourites = () => {
  const [favourites] = useAtom(favouritesAtom); // Read the current list of favourites from global state

  return (
    <div>
      <h1>Your Favourites</h1>
      {favourites.length === 0 ? (
        // If no favourites, show message
        <p>No favourites added yet.</p>
      ) : (
        // If favourites exist, render a card for each one
        favourites.map((id) => <ArtworkCard key={id} objectID={id} />)
      )}
    </div>
  );
};

export default Favourites; // Export the component for routing
