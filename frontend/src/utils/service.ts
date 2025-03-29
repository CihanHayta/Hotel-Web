import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";
import { PlacesResponse, PlaceData, PlaceResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const usePlaces = (paramsObj?:any) =>
  useQuery({
    queryKey: ["places",paramsObj],
    queryFn: () =>
      api.get<PlacesResponse>("/places",{params:paramsObj}).then((res) => res.data.places),

    retry: 3,
    retryDelay: 1000,
    gcTime: 30000,
    staleTime: 0,
  });


  export const useCreatePlace = () => {
    const navigate = useNavigate();
  
    return useMutation({
      // mutation key
      mutationKey: ["create"],
      // api isteğini atan fonksiyon
      mutationFn: (body: PlaceData) => api.post("/places", body),
      // istek başarılı olduğunda
      onSuccess: (res) => {
        toast.success("Konaklama noktası oluşturuldu");
        navigate(`/`);
      },
      // istek başarısız olduğunda
      onError: (error) => {
        toast.error("Bir hata oluştus");
      },
    });
  };

  export const usePlace = (id: string) => {
    return useQuery({
      queryKey: ["place"],
      queryFn: () =>
        api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data.place),
    });
  };

  export const useRemovePlace = () => {
    const navigate = useNavigate();
    return useMutation({
      mutationFn: (id: number) => api.delete(`/place/${id}`),
      onSuccess: () => {
        toast.success("Konaklama noktası silindi");
        navigate(`/`);
      },
      onError: (error) => {
        toast.error("Bir hata oluştu");
      },
    });
  };
