import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRandom } from "./useRandom";
import { renderHook, waitFor } from "@testing-library/react";

test("my first test", async () => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            // ✅ turns retries off
            retry: false,
          },
        },
      });
    const wrapper = ({ children }: IWrapper) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );

    const { result } = renderHook(() => useRandom(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
});