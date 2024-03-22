import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput component", () => {
  test("renders search input with placeholder and value", () => {
    const searchTerm = "Test search term";
    const onSearch = jest.fn();

    render(<SearchInput searchTerm={searchTerm} onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Search posts");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(searchTerm);
  });

  test("calls onSearch function with input value when input changes", () => {
    const onSearch = jest.fn();
    const searchTerm = "";

    render(<SearchInput searchTerm={searchTerm} onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Search posts");
    const testSearchTerm = "Test search term";

    fireEvent.change(input, { target: { value: testSearchTerm } });

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith(testSearchTerm);
  });
});
