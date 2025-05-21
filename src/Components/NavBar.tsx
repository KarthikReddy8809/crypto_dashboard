import React from 'react'
import logo from '../assets/logo.png'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react';
import useCurrencyStore from '../stores/useCurrencyStore'
import { useEffect } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {useRouter} from '@tanstack/react-router'
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { AlignJustify } from 'lucide-react';
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'


export const NavBar = () => {
    const [open, setOpen] = React.useState(false)
    const {setCurrency,setSymbol}=useCurrencyStore()
    const [value, setValue] = React.useState("")
    const [symbols,setSymbols]=React.useState("")
    console.log("symbols",symbols)
    const frameworks = [
        { label: "USD", value: "USD",symbol:"$" },
        { label: "EUR", value: "EUR",symbol:"€" },
        { label: "GBP", value: "GBP",symbol:"£" },
        { label: "INR", value: "INR",symbol:"₹" },
       
      ]
      const router=useRouter();
      useEffect(()=>{
        setCurrency(value)
        setSymbol(symbols)
        console.log(symbols)
      },[value,symbols])
    return (
        <div className='sticky top-0 z-50 flex flex-row w-full backdrop-blur items-center h-16 border-b-2 border-b-muted-foreground justify-evenly'>
        <div className='md:hidden mt-2'>
        <Sheet>
  <SheetTrigger><AlignJustify size={15} className='text-white'/></SheetTrigger>
  <SheetContent side="left" className='bg-blue-950'>
    <SheetHeader className='flex flex-col gap-5 mt-5'>
      <SheetClose>
      <SheetTitle><h3 className='text-white' onClick={()=>router.navigate({to:"/"})}>Home</h3></SheetTitle>
      <SheetTitle><h3 className='text-white' onClick={()=>router.navigate({to:"/features"})}>Features</h3></SheetTitle>
      <SheetTitle><h3 className='text-white' onClick={()=>router.navigate({to:"/pricing"})}>Pricing</h3></SheetTitle>
      <SheetTitle><h3 className='text-white' onClick={()=>router.navigate({to:"/support"})}>Support</h3></SheetTitle>
      </SheetClose>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
        <img src={logo} alt="logo" className='h-6 md:h-10  cursor-pointer' onClick={()=>router.navigate({to:"/"})} />
        <div className=' flex-row cursor-pointer hidden md:flex items-center text-white min-w-lg  justify-evenly'>
        <h3 onClick={()=>router.navigate({to:"/"})}>Home</h3>
        <h3 onClick={()=>router.navigate({to:"/features"})}>Features</h3>
        <h3 onClick={()=>router.navigate({to:"/pricing"})}>Pricing</h3>
        <h3 onClick={()=>router.navigate({to:"/support"})}>Support</h3>
        </div>
        
        <div className='flex flex-row items-center gap-9'>
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
        size="sm"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="mx-auto md:w-[70px] md:justify-between flex-shrink"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "USD"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">

        <Command>
         
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setSymbols(framework.symbol)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <Button  className='bg-white text-black rounded-full hover:bg-white/80' onClick={()=>router.navigate({to:"/signup"})}>Sign Up <ArrowUpRight size={16}/></Button>
    </div>
        </div>
    )
}
