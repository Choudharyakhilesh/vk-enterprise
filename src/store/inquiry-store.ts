
import { API_PREFIX } from "@/constants/api-routes";
import httpClient from "@/lib/http-client";

import { enqueueSnackbar } from "notistack";
import { create } from "zustand";

export type IResponseType = {
  status: boolean | string;
  message: string;
  data: Record<string, unknown> | null;
};

export type IStore = {
  createInquiryLoading: boolean;
  apiCreateInquiry: (data: object) => Promise<IResponseType | null>;

  createInquiryStickeyLoading: boolean;
  apiCreateInquirySticky: (data: object) => Promise<IResponseType | null>;
};

export const useInquiryManagementStore = create<IStore>((set) => ({
  createInquiryLoading: false,

  createInquiryStickeyLoading: false,

  apiCreateInquiry: async (data) => {
    try {
      set({ createInquiryLoading: true });

      const response = await httpClient.post(`/${API_PREFIX.SUPPORT}/enquiry-submit`, data);
      const resp = response?.data;
      console.log("response", resp);

      if (resp?.status === "SUCCESS") {

        enqueueSnackbar(resp?.message, { variant: 'success' });

      }

      set({ createInquiryLoading: false });
      return resp;
    } catch (error) {
      const err = error as { response?: { data?: string } };
      return err.response?.data ?? null;
    } finally {
      set({ createInquiryLoading: false });
    }
  },

  apiCreateInquirySticky: async (data) => {
    try {
      set({ createInquiryStickeyLoading: true });

      const response = await httpClient.post(`/${API_PREFIX.SUPPORT}/enquiry-submit`, data);
      const resp = response?.data;
      console.log("response", resp);

      if (resp?.status === "SUCCESS") {

        enqueueSnackbar(resp?.message, { variant: 'success' });

      }

      set({ createInquiryStickeyLoading: false });
      return resp;
    } catch (error) {
      const err = error as { response?: { data?: string } };
      return err.response?.data ?? null;
    } finally {
      set({ createInquiryStickeyLoading: false });
    }
  },
}));
