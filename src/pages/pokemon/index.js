import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Pokemon() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
}