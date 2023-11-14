import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const GirisFormu = ({ onSubmit, onChange, buttonText }) => {
  return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control type="text" name="id" onChange={onChange} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" onChange={onChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {buttonText}
        </Button>
      </Form>
  );
};

const KayitFormu = ({ onSubmit, onChange, buttonText }) => {
  return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="ad">
          <Form.Label>Ad:</Form.Label>
          <Form.Control type="text" name="ad" onChange={onChange} />
        </Form.Group>

        <Form.Group controlId="soyad">
          <Form.Label>Soyad:</Form.Label>
          <Form.Control type="text" name="soyad" onChange={onChange} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" onChange={onChange} />
        </Form.Group>

        <Form.Group controlId="telNo">
          <Form.Label>Tel No:</Form.Label>
          <Form.Control type="tel" name="telNo" onChange={onChange} />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" onChange={onChange} />
        </Form.Group>

        <Button variant="success" type="submit">
          {buttonText}
        </Button>
      </Form>
  );
};

const HastaGirisi = () => {
  const [hastaData, setHastaData] = useState({
    id: '',
    password: '',
    ad: '',
    soyad: '',
    email: '',
    telNo: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHastaData({
      ...hastaData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Giriş ID:', hastaData.id);
    console.log('Giriş Password:', hastaData.password);
    // Giriş işlemleri yapabilirsiniz
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Hasta Ad:', hastaData.ad);
    console.log('Hasta Soyad:', hastaData.soyad);
    console.log('Hasta Email:', hastaData.email);
    console.log('Hasta Tel No:', hastaData.telNo);
    console.log('Giriş Password:', hastaData.password);
    // Burada kayıt işlemlerini gerçekleştirmeniz gerekecek
    // setIsRegistered(true); // Kayıt başarılı olduğunda durumu güncelleyebilirsiniz
  };

  return (
      <div style={{ padding: '20px' }}>
        {!isRegistered && (
            <GirisFormu
                onSubmit={handleLoginSubmit}
                onChange={handleChange}
                buttonText="Giriş Yap"
            />
        )}

        {!isRegistered && (
            <Button
                variant="secondary"
                style={{ marginTop: '10px' }}
                onClick={() => setIsRegistered(true)}
            >
              Kayıt Ol
            </Button>
        )}

        {isRegistered && (
            <KayitFormu
                onSubmit={handleRegisterSubmit}
                onChange={handleChange}
                buttonText="Kayıt Ol"
            />
        )}
      </div>
  );
};

export default HastaGirisi;
