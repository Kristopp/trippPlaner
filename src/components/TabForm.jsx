import React, { useContext, useState } from "react";
import axios from "axios";
import Styled, { keyframes } from "styled-components";
import { Context } from "../context/Store";

const CLOUDINARY_ID = process.env.REACT_APP_CLOUDINARY_ID;
const UPLOAD_PRESET = process.env.REACT_APP_NAME_OF_UPLOAD_PRESET;
const API_KEY = process.env.REACT_APP_CLOUDINARY_API;

const uploadImage = async (file) => {
  let formData = new FormData();
  formData.append("api_key",API_KEY);
  formData.append("file", file);
  console.log(file)
  formData.append("public_id", CLOUDINARY_ID);
  formData.append("upload_preset",UPLOAD_PRESET); 
  axios
    .post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_ID}/image/upload`, formData)
    .then((res) => console.log(res))
    .catch((err) => { 
      console.log(err)
    })
};

const NewCardForm = () => {
  const [state, dispatch] = useContext(Context);
  const [selectedFile, setselectedFile] = useState("");
  const [newTripp, setNewTrippObject] = useState({
    title: "",
    imageURL: null,
  });

  const [togglePrewImg, setTogglePrewImg] = useState();
  const [loaded, setStateLoaded] = useState(false);

  const titleInputHandler = (event) => {
    const title = event.target.value;
    setNewTrippObject({ ...newTripp, title: title });
  };
  const imgUploadHandler = (event) => {
    const getImg = URL.createObjectURL(event.target.files[0]);
    setNewTrippObject({ ...newTripp, imageURL: getImg });
  };
  const createHandler = () => {
    console.log(newTripp.imageURL)
    const file = newTripp.imageURL
    console.log(file)
    switch (file) {
      case file > 1024:
        alert("File size to big try less then 1mb");
        break;
      case newTripp.title === "":
        alert("fill title pls");
        break;
      default:
        uploadImage(file);
    }

    /*     
   if ( file.size > 1024 || newTrippObject.title === "") {
      alert("fill all fields");
    } else {
      e.preventDefault();
      if(file.size > 1024) { 
        alert("File size to big try less than 1mb");
      else uploadImage(file);

      }  */
  };
  return (
    <CardFormContainer>
      <TitleInput
        name="Title"
        label="Title"
        type="text"
        placeholder="Title"
        value={newTripp.title}
        onChange={titleInputHandler}
      />
      <AddPicture
        name="upLoadImg"
        type="file"
        value={selectedFile}
        onChange={imgUploadHandler}
      >
        <ImgInput
          name="file"
          type="file"
          className="file-upload"
          data-cloudinary-field="image_id"
          data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':300,'height':200}}"
          style={{ visibility: "hidden" }}
        />
        <PrewImg src={newTripp.imageURL} alt="add img"></PrewImg>
      </AddPicture>
      <CreateNewTab onClick={createHandler}>create</CreateNewTab>
    </CardFormContainer>
  );
};
export default NewCardForm;

const boxShdow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
}
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