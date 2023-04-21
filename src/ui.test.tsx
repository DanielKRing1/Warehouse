import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Simple UI tests", () => {
    test("Should renders an add button for Zone 0", () => {
        render(<App />);
        const addButton = screen.getByText("Add Shelf to zone 0");
        expect(addButton).toBeInTheDocument();
    });

    test("Should add shelf to Zone 0", () => {
        render(<App />);
        act(() => {
            fireEvent.click(screen.getByText("Add Shelf to zone 0"));
            fireEvent.click(screen.getByText("Add Shelf to zone 0"));
            console.log(document);
        });
    });
});
