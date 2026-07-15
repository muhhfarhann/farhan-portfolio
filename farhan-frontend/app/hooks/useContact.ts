import { useState, useEffect } from 'react';
import { submitContactForm } from '../services/contactService';

export const useContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('Silakan isi form');
  const [isNotif, setIsNotif] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-hide notifikasi dalam 3 detik
  useEffect(() => {
    if (isNotif) {
      const timer = setTimeout(() => setIsNotif(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isNotif]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Mengirim pesan...');
    setIsLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Email tidak valid');
      setIsLoading(false);
      return;
    }

    try {
      await submitContactForm(formData);
      setIsNotif(true);
      setFormData({ name: '', email: '', message: '' });
      setStatus('Pesan berhasil dikirim!');
    } catch (error: unknown) {
      console.log(error);
      // Gunakan type guard untuk mendapatkan pesan error yang aman
      const errorMessage = error instanceof Error ? error.message : 'Terjadi kesalahan saat mengirim data';
      setStatus(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, status, isNotif, isLoading, handleChange, handleSubmit };
};