import styled from "styled-components";

const DivMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;

const Video = styled.div`
  display: flex;
  width: 33%;
  padding: 1em;
  margin: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 0.5px solid #ccc;

  &:last-child {
    border-right: none;
  }
`;

const VideoDescription = styled.p`
  text-align: center;
  font-size: 13px;
  width: 65%;
  margin: 0px;
  padding: 0px;
`;

const Button = styled.button`
  width: 30%;
  height: 30px;
  font-size: 15px;
  text-transform: capitalize;
  color: white;
  background: #003c58;
  border-radius: 5%;
  margin-top: 10px;
`;

const Test = () => {
  return (
    <DivMain>
      <Video>
        <Title>¿PRIMERA VEZ AQUÍ?</Title>
        <VideoDescription>Conoce nuestra iglesia</VideoDescription>
        <Button>Ver</Button>
      </Video>
      <Video>
        <Title>{"CULTOS & ACTIVIDADES"}</Title>
        <VideoDescription>Nuestros horarios de cultos</VideoDescription>
        <Button>Ver</Button>
      </Video>
      <Video>
        <Title>MINISTERIOS</Title>
        <VideoDescription>Conoce nuestra iglesia</VideoDescription>
        <Button>Ver</Button>
      </Video>
    </DivMain>
  );
};

export default Test;
