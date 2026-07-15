export const submitContactForm = async (data: { name: string; email: string; message: string }) => {
  const res = await fetch('https://farhan-portfolyo.netlify.app/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Gagal menyimpan data');
  }

  return res.json();
};