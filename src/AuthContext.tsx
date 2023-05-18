import { ReactNode, createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const authContext = createContext({
  loggedIn: false,
  login: () => {
    //nothing
  },
});

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  return (
    <authContext.Provider
      value={{
        loggedIn,
        login: () => {
          setLoggedIn(true);
          router.replace("/");
        },
      }}
    >
      {children}
    </authContext.Provider>
  );
}
