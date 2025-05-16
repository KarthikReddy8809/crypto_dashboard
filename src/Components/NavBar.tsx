import React from 'react'
import logo from '../assets/logo.png'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react';
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
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'

export const NavBar = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const frameworks = [
        { label: "USD", value: "USD" },
        { label: "EUR", value: "EUR" },
        { label: "GBP", value: "GBP" },
       
      ]
      const router=useRouter();
    return (
        <div className='sticky top-0 z-50 flex flex-row w-full backdrop-blur items-center h-16 border-b-2 border-b-muted-foreground justify-evenly'>
        <img src={logo} alt="logo" className='h-5 md:h-10  cursor-pointer' onClick={()=>router.navigate({to:"/"})} />
        <div className=' flex-row cursor-pointer hidden md:flex items-center text-white min-w-lg  justify-evenly'>
        <h3 onClick={()=>router.navigate({to:"/"})}>Home</h3>
        <h3>Features</h3>
        <h3>Pricing</h3>
        <h3>Support</h3>
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
    <Button  className='bg-white text-black rounded-full hover:bg-white/80'>Sign Up <ArrowUpRight size={16}/></Button>
    </div>
        </div>
    )
}
