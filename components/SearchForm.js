"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function SearchBar() {
  const [searchField, setSearchField] = useState("");
  const router = useRouter();
  const [isValidId, setIsValidId] = useState(null);

  // Fetch the validObjectIDList.json file once when component mounts
  useEffect(() => {
    const fetchValidIds = async () => {
      try {
        const res = await fetch("/validObjectIDList.json");
        const data = await res.json();
        setIsValidId(data);
      } catch (err) {
        console.error("Failed to load validObjectIDList.json:", err);
      }
    };

    fetchValidIds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchField.trim()) return;

    // Navigate to search results
    const encodedSearch = encodeURIComponent(searchField);
    router.push(`/artwork?title=true&q=${encodedSearch}`);
  };

  return (
    <Navbar className="navbar-light bg-primary fixed-top shadow-sm">
      <Nav className="container-fluid">
        <Form className="d-flex w-100 py-2" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            className="me-2 rounded"
            placeholder="Search artworks..."
            onChange={(e) => setSearchField(e.target.value)}
            value={searchField}
            style={{ maxWidth: "300px" }}
          />
          <Button variant="light" type="submit">
            Search
          </Button>
        </Form>
      </Nav>
    </Navbar>
  );
}
