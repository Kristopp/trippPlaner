import React, { useState } from "react";
import Styled, { keyframes } from "styled-components";


const TrippForm = (props) => {

  const [usersTripp, setUsersTripp] = useState()
  const [trippFormState, setFormState] = useState(true);
  const [id, setId] = useState(0);
  const [forObject, setFormObject] = useState({
    id: 0,
    category: "",
    details: "",
    whoPays: "",
    pictures: "",
    expense: 0,
  });

  const [expenseCount, setExpenseCount] = useState({
    expenseCount: 0,
  });
  const [formRowArrays, setRowArrays] = useState([]);

  const handleNewRow = () => {
    let newObject = new Object(
      { 
        id: id,
        category: "",
        details: "",
        whoPays: "",
        pictures: "",
        expense: 0,
      }
    );
    setId(id + 1);
    formRowArrays.push(newObject);
  };
  const handleFormInput = (index, event) => {
    //use spread so i wont mutate
    const values = [...formRowArrays];
    values[index][event.target.name] = event.target.value;
    setFormObject(values);
  };
  const handleRemoveItem = id => {
    setRowArrays(formRowArrays.filter(item => item.id !== id))
}

  return (
    <AddFormCont >
      <AddForm>
        <CloseButtonWrapper>
          <CloseTab  onClick={props.onClick}>
            x
          </CloseTab>
        </CloseButtonWrapper>
        <BudgetContainer>
          <BudgetText>Budget</BudgetText>
          <BudgetNumber>0</BudgetNumber>
        </BudgetContainer>
        <MainText>
          <TitleText>category</TitleText>
          <TitleText>details</TitleText>
          <TitleText>who pays</TitleText>
          <TitleText>picture</TitleText>
          <TitleText>expense</TitleText>
        </MainText>
        {formRowArrays.map((formRowArray, index) => (
          <ListWrapper 
          id={id} 
          key={index + id}>
            <ChildText>
              <FormInput
                name="category"
                label="category"
                type="text"
                value={formRowArray.category}
                onChange={(event) => handleFormInput(index, event)}
              />
            </ChildText>
            <ChildText>
              <FormInput
                name="details"
                label="details"
                type="text"
                value={formRowArray.details}
                onChange={(event) => handleFormInput(index, event)}
              />
            </ChildText>
            <ChildText>
              <FormInput
                name="whoPays"
                label="whoPays"
                type="text"
                value={formRowArray.whoPays}
                onChange={(event) => handleFormInput(index, event)}
              />
            </ChildText>
            <Image></Image>
            <ChildText style={{ width: "100px"}}>
              <FormInput
                name="expense"
                label="expense"
                type="number"
                value={formRowArray.expense}
                onChange={(event) => handleFormInput(index, event)}
                style={{ width: "100px"}}
              />
            </ChildText>
            <DeleteRow onClick={() =>handleRemoveItem(formRowArray.id)}></DeleteRow>
          </ListWrapper>
        ))}
        <AddNewRow onClick={handleNewRow}>add new row</AddNewRow>
      </AddForm>
    </AddFormCont>
  );
};



const boxShdow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
}
`;
const CloseButtonWrapper = Styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
`;

const CloseTab = Styled.button`
border-radius: 50%;
background-color: transparent;
`;

const DeleteRow = Styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 20px;
height: 20px;
margin: 5px;
border-radius: 50%;
background-color: transparent;
`;
const AddNewRow = Styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
background-color: transparent;
color: #041e29;
border: 1px #041e29 solid;
box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.15);
  &:hover { 
    animation: ${boxShdow} cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
`;

const AddFormCont = Styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
margin: 50px;
z-index: 10;
overflow: auto;
background: #0f2027; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
                                  45deg,
                                  #02aab0,
                                  #00cdac
                                );
box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.45);
border-radius: 2%;
`;
const ListWrapper = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
border: 1px black solid;
width: 100%;
height: 70px;
margin-bottom: 10px;
`;
/*  */
const AddForm = Styled.div`
width: 1360px;
height: 600px;
padding: 20px;
`;
const BudgetContainer = Styled.div`
display: flex;
flex-direction: row;

`;
const BudgetText = Styled.p`
font-family: "Yeseva One";
font-size: 2em;
letter-spacing: 1px;
margin-left: 13px;
`;
const BudgetNumber = Styled.p`
font: 2em 'Yeseva One', sans-serif;
padding-left: 100px;
`;
const MainText = Styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 15px;
`;
const TitleText = Styled.div`
font: 2em 'Yeseva One', sans-serif;
letter-spacing: 1px;
`;
const ChildText = Styled.p`
display: flex;
justify-content: space-between;
align-items: center;
font: 1.5em 'Roboto', sans-serif;
letter-spacing: 1px;
margin: 14px;
width: 200px;
height: 100px;
appearance: none;
`;
const FormInput = Styled.input`
background-color: transparent;
border: none;
outline: none;
font: 1em 'Roboto', sans-serif;
letter-spacing: 1px;
color: black;
::placeholder,
  ::-webkit-input-placeholder {
    color: black;
  }
  :-ms-input-placeholder {
     color: black;
  }
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
`;
const Image = Styled.img`
display: flex;
flex-direction: column;
width: 80px;
height: 65px;
margin: 14px;
`;

export default TrippForm;
