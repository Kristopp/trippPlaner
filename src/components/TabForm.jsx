import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Styled, { keyframes } from "styled-components";
import { Context } from "../context/Store";

const boxShdow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
}
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = Styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
z-index: 5;
`;

const CardFormContainer = Styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 50px;
position: absolute;
z-index: 5;
width: 190px;
height: 230px;
overflow: auto;
background: #0f2027; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
                                  45deg,
                                  #02aab0,
                                  #00cdac
                                );
box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.45);
border-radius: 5%;
`;
const TitleInput = Styled.input`
text-align: center;
height: 30px;
width: 150px;
margin: 10px;
box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  };
border-radius: 2%;
background-color: transparent;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 1px;
::placeholder { 
  color: black;
  }
`;
const AddPicture = Styled.label` 
display: flex;
align-items: center;
justify-content: center;
width: 150px;
height: 120px;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
background-color: transparent;
box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`;
const ImgInput = Styled.input`
width: 0;
height: 0;
visibility:hidden;
`;
const PrewImg = Styled.img`
height: 100%;
width: auto;
object-fit: fill;
text-align: center;

`;
const CreateNewTab = Styled.button`
width: 150px;
height: 40px;
margin: 10px;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
background-color: transparent;
box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`;

const CLOUDINARY_ID = process.env.REACT_APP_CLOUDINARY_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_NAME_OF_UPLOAD_PRESET;
const API_KEY = process.env.REACT_APP_CLOUDINARY_API;

const NewCardForm = () => {
  const [
    state,
    dispatch,
    toggleTab,
    setToggleTab,
    loadPage,
    setLoadPage,
    ,
  ] = useContext(Context);
  const [previewUrl, setPreviewUrl] = useState(undefined);
  const [loadPic, setLoadPic] = useState(false);
  const [newTripp, setNewTrippObject] = useState({
    title: "",
    secureImgUrl: undefined,
    object_id: undefined,
  });

  const uploadImgHandler = (file) => {
    setLoadPic(true);
    const data = new FormData();
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("api_key", API_KEY);
    data.append("file", file);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_ID}/image/upload/`,
        data
      )
      .then((res) => {
        let secureUrl = res.data.secure_url;
        axios
          .post("http://localhost:5000/allTrips/create", {
            ...newTripp,
            secureImgUrl: secureUrl,
          })
          .then((res) => {
            console.log(res)
            dispatch({type: "FETCH_LIST_SUCCESS",payload: res.data });
            setToggleTab(false);
          })
          .catch((error) => {
            setLoadPic(false);
            console.log(error);
          });
      })
      .catch((error) => {
        setLoadPic(false);
        console.log(error);
      });
  };
  const titleInputHandler = (event) => {
    const title = event.target.value;
    setNewTrippObject({ ...newTripp, title: title });
  };

  const pickImgHandler = (e) => {
    if (e.target.files[0]) {
      setLoadPic(true);
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = function () {
          let height = this.height;
          let width = this.width;
          console.log(height, width);
          if (height === width || height > width) {
            alert("Pls use picutres with higher width than length");
          } else {
            setPreviewUrl(reader.result);
            setLoadPic(false);
          }
        };
      });
      reader.readAsDataURL(e.target.files[0]);
    } else {
      alert("Error");
    }
  };

  const createHandler = () => {
    const file = previewUrl;
    console.log();
    switch (file) {
      case file !== "":
        alert("Add image!");
        break;
      case newTripp.title === "":
        alert("fill title pls");
        break;
      default:
        uploadImgHandler(file);
    }
  };
  return (
    <React.Fragment>
      {toggleTab ? (
        <CardFormContainer>
          <div>
            <TitleInput
              name="Title"
              label="Title"
              type="text"
              placeholder="Title"
              onChange={titleInputHandler}
            />
          </div>
          <AddPicture name="upLoadImg" type="file" onChange={pickImgHandler}>
            <ImgInput name="file" type="file" />
            {loadPic ? <Spinner /> : null}
            <PrewImg src={previewUrl} />
          </AddPicture>
          <CreateNewTab onClick={createHandler}>create</CreateNewTab>
        </CardFormContainer>
      ) : null}
    </React.Fragment>
  );
};
export default NewCardForm;


