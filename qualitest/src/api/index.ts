import { API_URL } from "../utils/constants";
import { ProductDto } from "./types.dto";

export const getProducts = async ({
  limit = 20,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}): Promise<ProductDto[]> => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);

    const data = await response.json();
    return data?.products ?? [];
  } catch (error: any) {
    reportError(error);
    return [];
  }
};
