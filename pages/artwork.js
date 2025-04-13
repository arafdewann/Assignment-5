import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";

export default function Artwork() {
  const router = useRouter();
  const { q } = router.query; // Get the 'q' parameter from the URL

  const [artworkList, setArtworkList] = useState([]); // State to store final artwork IDs
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (!q) return; // If query param 'q' is missing, do nothing

    async function fetchData() {
      try {
        // Fetch search results from the Met Museum API
        const res = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${q}`
        );
        const data = await res.json();

        // Load a list of valid object IDs from a local JSON file
        const validRes = await fetch("/data/validObjectIDList.json");
        const validData = await validRes.json();

        // Ensure both arrays exist and are valid
        const validIDs = Array.isArray(validData?.objectIDs)
          ? validData.objectIDs
          : [];
        const apiIDs = Array.isArray(data?.objectIDs) ? data.objectIDs : [];

        // Filter results to only include IDs that are in the valid list
        const filteredIDs = apiIDs.filter((id) => validIDs.includes(id));

        console.log("Filtered IDs:", filteredIDs);

        // Set first 20 artworks to display
        setArtworkList(filteredIDs.slice(0, 20));
      } catch (error) {
        console.error("Error loading artwork:", error);
      } finally {
        setLoading(false); // Done loading
      }
    }

    fetchData();
  }, [q]); // Runs whenever 'q' changes

  // Show loading state
  if (loading) return <p style={{ padding: "1rem" }}>Loading...</p>;

  // Show message if no artwork was found
  if (artworkList.length === 0)
    return <p style={{ padding: "1rem" }}>No artwork found.</p>;

  // Render artwork cards in a responsive grid
  return (
    <div className="container mt-4">
      <div className="row">
        {artworkList.map((id) => (
          <div key={id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <ArtworkCard objectID={id} />
          </div>
        ))}
      </div>
    </div>
  );
}
