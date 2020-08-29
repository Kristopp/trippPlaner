import React from "react";
import Styled from "styled-components";
import demoPic from "../Assets/pictures/demoPicture1.jpg";

const AddFormCont = Styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
margin: 50px;
z-index: 10;
`;
const FormWrapper = Styled.div`
`;
const TabTop = Styled.div`
width: 205px;
height: 41px;
border: 1px solid black;
border-radius: 10px 10px 0 0;
border-bottom: none;
background: #0f2027; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
                                  45deg,
                                  #02aab0,
                                  #00cdac
                                );
`;
const AddForm = Styled.div`
border: 1px solid black;
width: 1360px;
height: 600px;
background: #0f2027; /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
                                  45deg,
                                  #02aab0,
                                  #00cdac
                                );
box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.45);
border-radius: 0 0 3% 3%;
`;
const BudgetContainer = Styled.div`
display: flex;
flex-direction: row;
margin: 15px;

`;
const BudgetText = Styled.p`
font-family: "Yeseva One";
font-size: 2em;
letter-spacing: 1px;
`;
const BudgetNumber = Styled.p`
font: 2em 'Quicksand', sans-serif;
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
font: 0.7em 'Roboto', sans-serif;
letter-spacing: 1px;
width: 200px;
height: 300px;
`;
const Image = Styled.img`
display: flex;
flex-direction: column;
width: 120px;
height: 90px;
`;

const TrippForm = () => {
  return (
    <AddFormCont>
      <FormWrapper>
        <TabTop></TabTop>
        <AddForm>
          <BudgetContainer>
            <BudgetText>Budget</BudgetText>
            <BudgetNumber>0</BudgetNumber>
          </BudgetContainer>
          <MainText>
            <TitleText>
              category
              <ChildText>autoga</ChildText>
            </TitleText>
            <TitleText>
              details
              <ChildText>tallinn - p2rnu</ChildText>
            </TitleText>
            <TitleText>
              who pays
              <ChildText>Kristo</ChildText>
            </TitleText>
            <TitleText>
              picture
              <Image src={demoPic}></Image>
            </TitleText>
            <TitleText>
              expense
              <ChildText>50e</ChildText>
            </TitleText>
          </MainText>
        </AddForm>
      </FormWrapper>
    </AddFormCont>
  );
};

export default TrippForm;
