import React, { useState } from "react";
// import axios from 'axios';
import "../App.css";
const DataUploader = () => {
  const [data, setData] = useState({
    text: "",
    image: null,
    video: null,
  });

  const handleTextChange = (event) => {
    setData({ ...data, text: event.target.value });
  };

  const handleImageChange = (event) => {
    console.log(event);
    setData({ ...data, image: event.target.files[0] });
  };

  const handleVideoChange = (event) => {
    setData({ ...data, video: event.target.files[0] });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("text", data.text);
    formData.append("image", data.image);
    formData.append("video", data.video);
    console.log(data);
    console.log("formData:::::");

    // try {
    //   const response = await axios.post('your_server_url', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });

    //   console.log('Data uploaded successfully:', response.data);
    // } catch (error) {
    //   console.error('Error uploading data:', error);
    // }
  };

  return (
    <div className="uploadData">
      <input type="text" value={data.text} onChange={handleTextChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DataUploader;
