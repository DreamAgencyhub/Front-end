"use client";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/auth";

export const useGetCurrentUser = () => {
  const {
    data: currentUser,
    isError,
    isPending,
    error,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  console.log(currentUser);

  console.log("this is error", error);

  return { currentUser, isError, isPending };
};
