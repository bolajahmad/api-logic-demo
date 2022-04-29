import { useEffect, useState } from "react";
import { ApiClient } from "../api/ApiClient";

export const useApiHook = () => {
  const [isLoading, setloading] = useState(false);
  const [coinDetails, setCoinDetails] = useState<any[]>([]);

  const fetchCoinDetails = async () => {
    const queryParams = {
      vs_currency: "usd",
      per_page: 20,
      category: "aave-tokens"
    };

    setloading(true);
    await ApiClient.get<any[]>("coins/markets", queryParams)
      .then((data) => setCoinDetails(data?.splice(0, 6) as any[]))
      .finally(() => setloading(false));
  };

  useEffect(() => {
    fetchCoinDetails();
  }, []);

  return {
    coinDetails,
    isLoading
  };
};
