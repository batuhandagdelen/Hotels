import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  FilterParams,
  PlaceFormValues,
  PlaceResponse,
  PlacesResponce,
} from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useGetPlaces = (params?: FilterParams) =>
  useQuery({
    queryKey: ["places", params],
    queryFn: () => api.get<PlacesResponce>("/places", { params }),
    retry: 2,
    retryDelay: 1000,
    select: (res) => res.data.places,
  });

export const useCreatePlace = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: PlaceFormValues) => api.post("/places", values),
    onSuccess: (res) => {
      toast.success("Yeni Konaklama Noktası Oluşturuldu");
      navigate(`/place/${res.data.place.id}`);
      queryClient.invalidateQueries({ queryKey: ["places"] });
    },
    onError: (err) => {
      toast.error(`Bir Hata Oluştu: ${err.message}`);
    },
  });
};

export const useGetPlace = (id?: string) => {
  return useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    select: (res) => res.data.place,
    enabled: !!id,
  });
};

export const useDeletePlace = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/place/${id}`),

    onSuccess: () => {
      toast.success("Konaklama Noktası Silindi");
      navigate("/"), queryClient.invalidateQueries({ queryKey: ["place"] });
    },
    onError: () => {
      toast.error("Bir Hata Oluştu");
    },
  });
};
