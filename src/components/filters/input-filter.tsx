"use client"
import HybridButton from '../ui/hybrid-button'
import InputField from '../ui/inputs'
import { useFilterStore } from '@/states/filter-store';

export default function InputFilter() {
    // const [searchValue, setSearchValue] = useState("");
    const setSearchValue = useFilterStore(state=> state.setSearchValue);
    const searchValue = useFilterStore(state=> state.searchValue);
    // console.log(searchValue)
    
    return (
        <div className='flex items-center justify-between bg-black p-2 rounded-md'>
            <InputField
                name='search-input'
                placeholder='Search for a Property'
                value={searchValue}
                type='text'
                onInput={(e: React.SetStateAction<string>) => { setSearchValue(e as string) }}
                className="bg-transparent px-1"
            />

            <HybridButton className='px-4 py-3 bg-[#703BF7] font-light text-sm rounded-md hover:bg-[#693adffc] min-w-fit'>
                Find Property
            </HybridButton>
        </div>
    )
}
