import React, { useEffect, useState } from 'react';
import './App.css';
import { Col, Row, Button } from "antd";
import VideoCard from "./components/VideoCard"
import CreateVideoModal from "./components/CreateVideoModal"
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchVideosAsync } from './reducer/videosReducer';

function App() {
  const dispatch = useAppDispatch()
  
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchVideosAsync())
  }, [])

  const videos = useAppSelector((state) => state.videos)

  return (
    <div className="App">
      <Row gutter={[16, 24]}>
        {videos.videos.map((v) =><Col key={v.id} className="gutter-row" span={6}>
          <VideoCard id={v.id} name={v.name} url={v.url} createdAt={v.createdAt} updatedAt={v.updatedAt} />
        </Col>)}
        <Col className="gutter-row" style={{display: "flex", alignItems: "center", justifyContent: "center"}} span={6}>
          <Button onClick={() => setModalOpen(true)}>Create</Button>
          <CreateVideoModal isOpen={modalOpen} dismissModal={() => setModalOpen(false)}></CreateVideoModal>
        </Col>
      </Row>
    </div>
  );
}

export default App;
