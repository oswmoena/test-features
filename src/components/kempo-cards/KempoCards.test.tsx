import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { KempoCards } from "./KempoCards";
import { CustomCard } from "./CustomCard";
import userEvent from "@testing-library/user-event";

describe("Kempo cards test", () => {
    test('should render', () => {
        render(
            <BrowserRouter>
                <KempoCards />
            </BrowserRouter>
        )
    });
    
    test('should show other', () => {
        render(
            <BrowserRouter>
                <KempoCards />
            </BrowserRouter>
        )

        const otherBtn = screen.getByTestId("btn-refresh");
        act(() => {
            userEvent.click(otherBtn);
        });
    });

    test("show detail in card", () => {
        render(
            <CustomCard name="test-name" hidden="test-hidden" desc="test-desc" />
        );
        const showBtn = screen.getByTestId("show-btn");
        act(() => {
            userEvent.click(showBtn);
        });
    })
});