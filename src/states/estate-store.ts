import { create } from "zustand";
import { EstateTypes } from "@/lib/types/estate.types";

export type EstateStore = {
    estates: EstateTypes[],
    setEstates: (newEstates: EstateTypes[]) => void
}

export const useEstateStore = create<EstateStore>()((set) => ({
    estates: [],
    setEstates: (newEstates: EstateTypes[]) => set((state) => ({ estates: newEstates })),
}));



