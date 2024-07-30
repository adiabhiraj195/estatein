"use client"
import { EstateTypes } from "@/lib/types/estate.types"
import PropertieCard from "."
import propImg from "@/assets/Image (1).png";
import { useEstateStore } from "@/states/estate-store";

export default function PropertyCardMaper({
    estates
}: {
    estates: EstateTypes[]
}) {
    const setEstates = useEstateStore(state=> state.setEstates);
    setEstates(estates);
    return (
        <>
            {estates?.map(({
                id,
                estateName,
                estateDescription,
                estateType,
                bathrooms,
                bedrooms,

            }) => {
                return <PropertieCard
                    key={id}
                    image={propImg}
                    prop_name={estateName}
                    description={estateDescription.slice(0, 100) + `...`}
                    bedroom={bedrooms}
                    bathroom={bathrooms}
                    prop_type={estateType}
                    price={5500000}
                    url={`/properties/${id}`}
                />
            })}
        </>
    )
}
