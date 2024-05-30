import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ReloadIcon } from '@radix-ui/react-icons';
import { TForm } from '@/types/form.types';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TForm>();

  const onSubmit = async (values: TForm) => {
    try {
      console.log(values);
      toast.success('Email enviado exitosamente.', { position: 'top-center' });
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Label htmlFor='form'>Contactame</Label>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-3 flex flex-col gap-2'>
          <Input
            id='form'
            {...register('name', {
              required: {
                value: true,
                message: 'El nombre es requerido.',
              },
            })}
            className='w-full'
            placeholder='Nombre'
          />
          {errors?.name && (
            <small className='text-red-500'>{errors?.name.message}</small>
          )}
        </div>
        <div className='col-span-3 flex flex-col gap-2'>
          <Input
            {...register('email', {
              required: {
                value: true,
                message: 'El email es requerido.',
              },
            })}
            className='w-full'
            placeholder='Email'
          />
          {errors?.email && (
            <small className='text-red-500'>{errors.email.message}</small>
          )}
        </div>
        <div className='col-span-6 flex flex-col gap-2'>
          <Textarea
            {...register('message', {
              required: {
                value: true,
                message: 'El mensaje es requerido.',
              },
              minLength: {
                value: 25,
                message: 'El mensaje debe contener al menos 25 caracteres.',
              },
            })}
            className='w-full'
            placeholder='Mensaje'
          />
          {errors?.message && (
            <small className='text-red-500'>{errors.message.message}</small>
          )}
        </div>
      </div>
      <Button type='submit' disabled={!isValid}>
        {isSubmitting ? (
          <>
            <ReloadIcon className='mr-2 animate-spin' />
            Enviando
          </>
        ) : (
          'Enviar'
        )}
      </Button>
    </form>
  );
}
