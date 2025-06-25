import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isNotif, setIsNotif] = useState(false);
  const [status, setStatus] = useState('Silahkan isi form'); // Status default

  // Mengatur notifikasi muncul
  useEffect(() => {
    const containerCheck = document.querySelector('#container-check');

    if (isNotif && containerCheck) {
      containerCheck.classList.replace('invisible', 'visible');
      containerCheck.classList.replace('left-[550px]', 'left-0');

      // Setelah 3 detik, kembalikan ke kondisi semula
      setTimeout(() => {
        containerCheck.classList.replace('visible', 'invisible');
        containerCheck.classList.replace('left-0', 'left-[550px]');
        setIsNotif(false);
      }, 3000);
    }
  }, [isNotif]);

  // Handler untuk perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler untuk submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(''); // Kosongkan status saat submit untuk menunjukkan proses

    // Validasi sederhana untuk email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('Email tidak valid');
      return;
    }

    try {
      const res = await fetch(
        'https://farhan-portfolyo.netlify.app/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();
      if (res.ok) {
        setIsNotif(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setStatus('Data berhasil disimpan');
      } else {
        setStatus(data.error || 'Gagal menyimpan data');
      }
    } catch (error) {
      console.log(error);
      setStatus('Terjadi kesalahan saat mengirim data');
    }
  };

  return (
    <section id="kontak" className="w-full pt-36 pb-32">
      <div id="container">
        <div className="w-full px-4">
          <div className="w-full px-4">
            <div className="m-w-xl mx-auto text-center mb-16 flex flex-col items-center">
              <h1 className="text-sky-500">Contact</h1>
              <h2 className="font-bold text-slate-600 text-2xl mb-4">
                Contact Me.
              </h2>
              <p className="font-medium text-[.75rem] text-slate-400 max-w-lg">
                Please fill form for contact me.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4">
          <div
            id="container-check"
            className="invisible fixed left-[175px] top-[200px] z-50 lg:left-[550px] mx-auto p-2.5 w-20 lg:w-1/5 h-auto max-h-auto flex flex-col items-center rounded-md ring-1 ring-slate-300 bg-slate-600 text-white shadow-md shadow-teal-600"
          >
            <div
              id="title"
              className="flex flex-col items-center justify-center lg:flex-row mb-1"
            >
              <h1 className="font-semibold text-[.75rem] lg:text-[1.2rem] flex flex-wrap items-center justify-center w-full">
                Success
              </h1>
              <Image
                width={15}
                height={20}
                src="/img/check.png"
                alt="Success Image"
                className="w-[15px] lg:w-[20px]"
              />
            </div>
            <p className="text-[.5rem] lg:text-[.75rem]">Data Success Saved</p>
          </div>
        </div>

        <form
          method="post"
          className="sm:w-2/3 sm:mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="w-full px-4 mb-8">
            <label
              htmlFor="name"
              className="mb-2 text-base font-bold text-sky-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Write here"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-8 lg:h-8 px-5 mb-4 text-[.75rem] bg-slate-300 placeholder:text-slate-500 rounded-full transition duration-500 ease-in-out focus:shadow-sm focus:shadow-sky-600 focus:outline-none focus:ring-1 focus:ring-slate-300 placeholder:text-[.75rem] flex items-center"
            />
            <label
              htmlFor="email"
              className="mb-2 text-base font-bold text-sky-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 lg:h-8 px-5 text-[.75rem] mb-4 bg-slate-300 placeholder:text-slate-500 rounded-full transition duration-500 ease-in-out focus:shadow-sm focus:shadow-sky-600 focus:outline-none focus:ring-1 focus:ring-slate-300 placeholder:text-[.75rem] flex items-center invalid:focus:ring-red-500 invalid:focus:shadow-red-400 invalid:focus:bg-red-200 peer"
            />
            <p className="invisible relative -top-[.5rem] transition duration-300 ease-in-out text-red-400 text-[.8rem] peer-invalid:visible">
              Email doesn&lsquo;t match..
            </p>
            <label
              htmlFor="message"
              className="mb-2 text-base font-bold text-sky-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-[.8rem] py-1 px-4 mb-1.5 bg-slate-300 placeholder:text-slate-500 rounded-sm transition duration-500 ease-in-out focus:shadow-sm focus:shadow-sky-600 focus:outline-none focus:ring-1 focus:ring-slate-300 placeholder:text-[.75rem] max-h-40"
            ></textarea>
          </div>
          <div className="w-full px-4">
            <button
              type="submit"
              className="relative py-1 px-1 mx-auto bg-teal-500 rounded-full text-[.75rem] transition duration-500 ease-in-out shadow-sm shadow-slate-400 hover:bg-teal-600 hover:shadow-md hover:-top-[1px] font-semibold text-base text-white ring-1 ring-teal-300 w-full sm:w-[15%]"
            >
              Kirim
            </button>
          </div>
          <div className="w-full px-4 mt-4 text-center">
            <p
              className={`text-[.75rem] ${
                status.includes('berhasil')
                  ? 'text-green-500'
                  : status === 'Silahkan isi form'
                  ? 'text-slate-400'
                  : 'text-red-500'
              }`}
            >
              {status}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
