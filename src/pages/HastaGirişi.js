import React, { useState } from 'react';

const HastaGirişi = () => {
  const [hastaData, setHastaData] = useState({ id: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHastaData({
      ...hastaData,
      [name]: value,
    });
  };

  // Form gönderildiğinde yapılacak işlem
  const handleSubmit = (e) => {
    e.preventDefault();
    // formData içindeki ID ve password değerlerini kullanabilirsiniz
    console.log('ID:', hastaData.id);
    console.log('Password:', hastaData.password);
    // Burada giriş işlemlerini yapabilirsiniz
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={hastaData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={hastaData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default HastaGirişi;
