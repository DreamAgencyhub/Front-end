import { useQuery } from "@tanstack/react-query";

export function useGetUser() {
  return useQuery({
    queryKey: ["currentUser"],

    queryFn: async () => {
      const res = await fetch("/api/auth/session");

      if (res.ok) return res.json();

      return null;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}
