import { usersApi } from "@/api/users-api";
import { useEffect, useState } from "react";

export function useGetCurrentUser(userId: string) {
  const [user, setUser] = useState<UserItem | null>(null);;

  useEffect(() => {
    (async () => {
      try {
        const result = await usersApi.getCurrent(userId)
        console.log(result);
        setUser(result);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    })();
  }, [userId]);

  return [user, setUser] as const;
}