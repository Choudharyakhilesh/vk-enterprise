import httpClient from "@/lib/http-client";
import { ApiRoutes } from "@/constants/api-routes";

import { create } from "zustand";

export type IResponseType = {
  status: boolean | string;
  message: string;
  data: Record<string, unknown> | null;
};

export interface IPaginatedProduct {
  data: IProducts[];
  current_page: number;
  last_page: number;
}

export interface IProducts {
  id: string;
  category_name: string;
  style_code: string;
  title: string;
  short_desc: string;
  description: string;
  images: string[];
  fabric: string;
  name: string;
  related_products: IProducts[];
}

export interface IProductsPage {
  status: boolean | string;
  message: string;
  blogs: IPaginatedProduct;
}

export interface IProductCategory {
  name: string;
}

export type IStore = {
  allCategoryListData: IProductCategory[] | null;
  categoryDetailsLoading: boolean;
  getProductCategory: () => Promise<IResponseType | null>;

  allProductsListData: IProducts[] | null;
  allProductsListLoading: boolean;
  getAllProductsList: (page?: number) => Promise<IResponseType | null>;

  productDeatilsData: IProducts | null;
  productDetailsLoading: boolean;
  getProductDetails: (data: object) => Promise<IResponseType | null>;
};

export const useProductsStore = create<IStore>((set) => ({
  allCategoryListData: null,
  allProductsListData: null,
  allProductsListLoading: false,

  categoryDetailsLoading: false,

  productDeatilsData: null,
  productDetailsLoading: false,

  getProductCategory: async () => {
    try {
      set({ categoryDetailsLoading: true });

      const response = await httpClient.get(`${ApiRoutes.products.product_category}`);
      const resp = response.data;

      set({
        allCategoryListData: resp.categories_data || null,
        categoryDetailsLoading: false,
      });
      return resp;
    } catch (error) {
      const err = error as { response?: { data?: string } };
      set({
        categoryDetailsLoading: false,
      });
      return err.response?.data ?? null;
    }
  },
  getAllProductsList: async (page: number = 1) => {
    try {
      set({ allProductsListLoading: true });

      const response = await httpClient.get(`${ApiRoutes.products.product_list}?page=${page}`);
      const resp = response.data;

      set({
        allProductsListData: resp?.products_data || null,
        allProductsListLoading: false,
      });
      return resp;
    } catch {
      set({ allProductsListLoading: false });
      return null;
    }
  },

  getProductDetails: async (data) => {
    try {
      set({ productDetailsLoading: true });

      const response = await httpClient.post(
        `${ApiRoutes.products.product_details}`,
        data
      );
      const resp = response.data;
      const productWithRelated = resp.product ? {
        ...resp.product,
        related_products: resp.related_products || []
      } : null;

      set({
        productDeatilsData: productWithRelated,
        productDetailsLoading: false,
      });
      return resp;
    } catch (error) {
      const err = error as { response?: { data?: string } };
      set({
        productDetailsLoading: false,
      });
      return err.response?.data ?? null;
    }
  },
}));
