import React from "react";
import useDebounce from "./useDebounce";
import { renderHook } from "@testing-library/react";

jest.useFakeTimers();
// Tests that the function clears the timeout on unmount.  
it("test_clears_timeout_on_unmount", () => {
    const { result, unmount } = renderHook(() => useDebounce("initial value"));

    unmount();

    jest.advanceTimersByTime(500);

    expect(result.current).toBe("initial value");
});