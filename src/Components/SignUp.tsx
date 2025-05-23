import {z} from 'zod';
import {useForm} from 'react-hook-form';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/ui/button';
import {UserData} from "../api/SignUpApi";
import useCurrencyStore from '../stores/useCurrencyStore'
import {useRouter} from '@tanstack/react-router'
import { Toaster,toast } from 'sonner';
const UserSchema = z.object({
  firstname: z.string().min(3,"Name must be at least 3 characters long"),
  lastname: z.string().min(3,"Name must be at least 3 characters long"),
  email: z.string().email(),
  password:z.string()
})

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
  });
  const router =useRouter();
  const {coinId,flag}=useCurrencyStore();
  const onSubmit=async(data:z.infer<typeof UserSchema>) => {
    const res = await UserData(data.firstname+" "+data.lastname,data.email,data.password);

    if(res)
    {

      toast.success('SignedUp Successfully');
      localStorage.setItem("token",res);
      reset();
      console.log("coinId",coinId);
      console.log("flag",flag);
      if(!flag)
      {
      router.navigate({to:`/coin/${coinId}`})
      }
      else{
        router.navigate({to:"/"})
      }
    
    }
  }  
  return (
    <div className='flex justify-center items-center h-screen'>
    <Card className=' border-b-2 border-gray-200 items-center max-w-xs md:max-w-lg w-full p-6'>
    <h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full'>
    <div className='flex flex-row gap-2 w-full'>
    <div className='grid grid-cols-1 gap-2 w-full'>
    <label>First Name</label>
    <Input type="text"  {...register('firstname')}/>
    {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
    </div>
    <div className='grid grid-cols-1 gap-2 w-full'>
    <label>Last Name</label>
    <Input type="text"  {...register('lastname')}/>
    {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
    </div>
    </div>
    <div className='grid grid-cols-1 gap-2'>
    <label>Email</label>
    <Input type="email" {...register('email')}/>
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div>
        <label>Password</label>
        <Input type="password" {...register('password')}/>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>
    <div>
        <label>Confirm Password</label>
        <Input type="password" {...register('password')}/>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>

    <Button type="submit" className='rounded-full mt-2 bg-purple-500 hover:bg-purple-600'>Sign Up</Button>
    </form>
  </Card>
  <Toaster position="top-right" richColors />
  </div>
  )
}

export default Signup
