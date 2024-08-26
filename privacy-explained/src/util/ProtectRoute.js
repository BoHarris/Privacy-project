import { Children, useEffect, useState } from "react";
import { auth } from "./firebase";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });
  }, [router]);
  if (loading) return <p>Loading...</p>;
  return <>{children}</>;
};

export default ProtectedRoute;
