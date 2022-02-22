import React from "react";
import { QueryClient, QueryClientProvider as QCProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

export const QueryClientProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <QCProvider client={queryClient}>{children}</QCProvider>;
};
