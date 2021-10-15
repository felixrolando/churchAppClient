import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRequest } from "../http/axiosVerbs";

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
`;

const Video = styled.div`
  display: flex;
  width: 33%;
  padding: 1em;
  margin: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoTitle = styled.p`
  text-align: justify;
  font-size: 12px;
  width: 80%;
  margin: 0px;
  padding: 0px;

  a {
    margin-left: 5px;
    font-size: 12px;
  }
`;

const VideoDescription = styled.p`
  text-align: center;
  font-size: 10px;
  width: 65%;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`;

const VideoImg = styled.img`
  width: 80%;
  height: 80%;
`;

const Sermones = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getRequest(
      `https://www.googleapis.com/youtube/v3/search?channelId=UCVs8yhRKamLNDsKfxRpICXg&key=AIzaSyBPnqrWLDo3DqKZhpNLkQRtZVpHtYM9Vz8&part=snippet&maxResults=3&order=date&type=video`
    ).then((res: any) => {
      setData(res.data.items);
    });
  }, []);

  return (
    <div>
      <Title>Últimos Sermones</Title>
      <DivMain>
        {data.map((video, index) => {
          return (
            <Video key={index.toString()}>
              <VideoImg src={video.snippet.thumbnails.medium.url}></VideoImg>
              <VideoDescription>{`Descripción: ${video.snippet.description}`}</VideoDescription>
              <VideoTitle>
                {video.snippet.title}
                <a
                  href={`https://www.youtube.com/embed/${video.id.videoId}`}
                  target="_blank"
                >
                  Ver
                </a>
              </VideoTitle>
            </Video>
          );
        })}
      </DivMain>
    </div>
  );
};

export default Sermones;
