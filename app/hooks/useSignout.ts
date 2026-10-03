import { useMutation } from "@tanstack/react-query";

export default function useSignout() {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/signout");

      if (res.ok) return res.json();

      return null;
    },
    retry: false,
  });

  return { mutate, isPending, isError };
}
