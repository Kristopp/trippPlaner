import React, { useContext, useState } from "react"
import Styled, { keyframes } from "styled-components";
import { Context } from "../context/Store"

const NewCardForm = () => { 
  
  const [state, dispatch] = useContext(Context);
  const [selectedFile,setselectedFile] = useState("");
  const [newTrippObject, setNewTrippObject] = useState({
    title: "",
    imgURl: "",
  });
  const [togglePrewImg, setTogglePrewImg] = useState()
  const [loaded, setStateLoaded] = useState(false);

    const titleInputHandler = (event) => { 
      const title = event.target.value;
      setNewTrippObject({...newTrippObject, title: title});
    };
    const imgUploadHandler = (event) => { 
      const getImg = URL.createObjectURL(event.target.files[0]);
      setNewTrippObject({...newTrippObject, imgURl: getImg})
    };
    const createHandler = () => { 
      dispatch({type: "ADD_NEW_TRIPP", payload: newTrippObject})
    }
  return ( 
        <CardFormContainer>
            <TitleInput 
            name="Title"
            label="Title"
            type="text"
            placeholder="Title"
            value={newTrippObject.title} 
            onChange={titleInputHandler}
            />
            <AddPicture
               name="upLoadImg"
               type="file"
               value={selectedFile}
               onChange={imgUploadHandler}
            >
              <ImgInput type="file" style={{visibility:"hidden"}}/>
              <PrewImg src={newTrippObject.imgURl} alt="add img" ></PrewImg>
            </AddPicture>
            <CreateNewTab>createHandler</CreateNewTab>
        </CardFormContainer>
    )
}
export default NewCardForm

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
`
const PrewImg = Styled.img`
height: 100%;
width: auto;
object-fit: fill;
text-align: center;

`
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