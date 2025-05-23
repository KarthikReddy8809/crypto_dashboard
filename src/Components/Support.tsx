import {z} from 'zod';
import {useForm} from 'react-hook-form';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../components/ui/button';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
const UserSchema = z.object({
  name: z.string().min(3,"Name must be at least 3 characters long"),
  phone: z.coerce.string().regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  email: z.string().email(),
  message:z.string()
})

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit=(data:z.infer<typeof UserSchema>) => {
    emailjs
    .send(
      'service_h9ybqpc', 
      'template_e0qqjre',
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      'fpE6itnuH0QSww2pT'
    )
    .then(() => {
      toast.success('Message sent successfully!');
      reset();
    })
    .catch((error) => {
      console.error(error);
      toast.error('Failed to send message.');
    });
  }  
  return (
    <div className='flex justify-center items-center h-screen'>
    <Card className=' border-b-2 border-gray-200 items-center max-w-xs md:max-w-lg w-full p-6'>
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full'>
    <div className='grid grid-cols-1 gap-2'>
    <label>Name</label>
    <Input type="text"  {...register('name')}/>
    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>
    <div className='grid grid-cols-1 gap-2'>
    <label>Phone</label>
    <Input type="number" {...register('phone')}/>
    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
    </div>
    <div className='grid grid-cols-1 gap-2'>
    <label>Email</label>
    <Input type="email" {...register('email')}/>
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div className='grid grid-cols-1 gap-2'>
    <label>Message</label>
    <Input type="text" {...register('message')}/>
    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
    </div>
    <Button type="submit" className='rounded-full mt-2 bg-purple-500 hover:bg-purple-600'>Submit</Button>
    </form>
  </Card>
  <Toaster position="top-right" richColors />
  </div>
  )
}

export default App