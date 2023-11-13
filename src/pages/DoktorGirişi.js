import React, { useState } from 'react';

const DoktorGirişi = () => {
  const [doktorData, setDoktorData] = useState({ id: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoktorData({
      ...doktorData,
      [name]: value,
    });
  };

  // Form gönderildiğinde yapılacak işlem
  const handleSubmit = (e) => {
    e.preventDefault();
    // formData içindeki ID ve password değerlerini kullanabilirsiniz
    console.log('ID:', doktorData.id);
    console.log('Password:', doktorData.password);
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
          value={doktorData.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={doktorData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
}

export default DoktorGirişi;