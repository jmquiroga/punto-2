import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../estilos/listapan.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function Listapan() {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);

  const handleProductos = () => {
    axios
      .get('http://89.116.25.43:3500/api/productos/listar', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data && response.data.result) {
          setData(response.data.result);
        } else {
          setData([]); // Si no hay datos válidos, asigna un array vacío
        }
      })
      .catch((error) => {
        console.error('Error al obtener la lista de productos', error);
        setError('Error al cargar la lista de productos');
      });
  };

  useEffect(() => {
    handleProductos();
  }, []);

  return (
    <Container >
      <Row>
        {data.map((result) => (
          <Col key={result._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={result.imagen} alt={result.nombre} />
              <Card.Body>
                <Card.Title>{result.descripcion}</Card.Title>
                <Card.Text>Valor: ${result.valor}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Listapan;

