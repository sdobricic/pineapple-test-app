import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import PostDetails from "./PostDetails";

describe("PostDetails component", () => {
  test("renders loading message when post data is being fetched", () => {
    render(
      <MemoryRouter initialEntries={["/post/1"]}>
        <Routes>
          <Route path='/post/:id' element={<PostDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
