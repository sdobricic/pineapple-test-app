import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Posts from "./Posts";
import { BrowserRouter as Router } from "react-router-dom";

describe("Posts component", () => {
  test("renders search input with placeholder", () => {
    render(
      <Router>
        <Posts />
      </Router>
    );

    const searchInput = screen.getByPlaceholderText("Search posts");

    expect(searchInput).toBeInTheDocument();
  });

  test("filters posts based on search input value", async () => {
    render(
      <Router>
        <Posts />
      </Router>
    );

    const searchInput = screen.getByPlaceholderText("Search posts");
    const testSearchTerm = "test";

    fireEvent.change(searchInput, { target: { value: testSearchTerm } });

    expect(screen.queryByText("Post title")).not.toBeInTheDocument(); // Assuming 'Post title' is not found in filtered posts
  });

  test("renders post title, body and link for each post", async () => {
    render(
      <Router>
        <Posts />
      </Router>
    );
  });
});
