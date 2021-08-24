import styled from "styled-components";
import temploImg from "../assets/images/templo.png";

const Button = styled.button`
  width: 10%;
  height: 30px;
  font-size: 15px;
  text-transform: capitalize;
  color: white;
  background: #003c58;
  border-radius: 5%;
  margin-top: 10px;
`;

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${temploImg})`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#003c58",
          }}
        >
          IGlesia bautista reformada de santiago
        </h2>
      </div>

      {/* <h1>¿QUÉ CREEMOS?</h1>
      <p
        style={{
          width: "80%",
          textAlign: "justify",
          color: "#003c58",
          wordSpacing: "5px",
        }}
      >
        Somos una iglesia formada por un grupo de hombres y mujeres salvados por
        la gracia de Dios por medio de la fe en Jesucristo. (Efesios 2:8-10).
        Por la enseñanza de la Biblia creemos que Dios nos creó a Su imagen y
        semejanza para Su gloria. (Génesis 1:26-28 & 1 Corintios 10:31). Creemos
        que el pecado entró al mundo por la desobediencia de nuestros primeros
        padres según está narrado en el capítulo tres del libro de Génesis.
        Creemos que Dios en su misericordia dio la promesa del Redentor en
        Génesis 3:15 y a través de toda la Biblia se nos narra ese Plan de Dios
        de salvación de Su pueblo por medio de Jesucristo, el único Mediador
        entre Dios y los hombres. (1 Timoteo 2:1-6, Hechos 4:11-12). Solo
        creyendo en Jesús somos reconciliados con Dios, librados de Su ira,
        perdonados de nuestros pecados y recibimos el regalo de la vida eterna.
        (Romanos 5:8; Juan 6:47).
      </p>
      <Button>Ver mas</Button> */}
    </div>
  );
};

export default About;
