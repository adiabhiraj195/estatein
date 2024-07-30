"use client"
import { EstateTypes } from "@/lib/types/estate.types"
import PropertyCardTwo from "./propety-card-two";
import propImg from "@/assets/Image (1).png";
import { useEstateStore } from "@/states/estate-store";

export default function PropertyCardTwoMaper() {
    const estates = useEstateStore(state=> state.estates);
    if(estates == null){
        console.log("estates are null")
    }

    return (
        <>
            {
                estates.map(({
                    id,
                    estateName,
                    estateDescription,
                    keyFeatures,

                }) => {
                    return (
                        <PropertyCardTwo
                            key={id}
                            image={propImg}
                            prop_name={estateName}
                            description={estateDescription.slice(0, 100) + `...`}
                            // keyFeature={keyFeatures[0].feature as string}
                            price={5500000}
                            url={`/properties/${id}`}
                        />
                    )
                })
            }
        </>
    )
}
