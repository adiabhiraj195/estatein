import { StaticImageData } from "next/image";

export type PropertyCardPropsType = {
    image: StaticImageData;
    prop_name: string;
    description: string;
    bedroom: number;
    bathroom: number;
    prop_type: string;
    price: number;
    url: string;
    keyFeature?: string
}

export type EstateTypes = {
    id: number;
    estateName: string;
    cityId: number;
    estateType: string;
    floorSpace?: number;
    balconies?: number;
    bedrooms: number;
    bathrooms: number;
    garages?: number;
    parkingSpace: boolean;
    petAllowed?: boolean;
    estateDescription: string;
    keyFeatures?: Array<{feature: string}>;
    // estateImages?: string;
}
