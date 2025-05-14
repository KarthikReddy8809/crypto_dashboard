import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const SearchBar = () => {
    return(
        <div className='flex flex-row relative items-center gap-2'>
         <Input  placeholder='Search Crypto....' className='bg-white w-[350px] md:w-[500px] h-10'/>
         <Button size="sm"className='absolute top-1 right-1  bg-purple-500 text-white'>Search</Button>
        </div>
    )
}