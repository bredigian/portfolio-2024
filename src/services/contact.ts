import { TForm } from '@/types/form.types';

const API_URL = import.meta.env.VITE_API_URL;

export const sendEmail = async (payload: TForm) => {
  try {
    await fetch(`${API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error('Ocurrió un error al enviar el email.');
  }
};
