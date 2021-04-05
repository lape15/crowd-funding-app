import styled from "styled-components";


const BoardContainer = styled.div`
    margin: -80px auto;
    width:50%;
    padding: 35px 30px;
    background-color: white;
    border:1px solid white;
    border-radius: 8px;
    box-shadow: -2px 2px 2px 2px rgba( 215 ,215, 215 , 0.2);
    position: relative;
    @media (max-width: 1200px) {
        margin: -70px auto;
        width: 65%;
       }
    @media (max-width: 768px) {
      width:90%;
      margin: -100px auto;
    }
    @media (max-width: 512px) {
        padding: 30px 20px;
      }
`
const MasterLogo = styled.img`
    position: absolute;
    top: -30px;
    right: 23vw;
    @media (max-width: 1200px) {
        right: 28vw;
       }
       @media(max-width: 768px){
        right: 340px
    };
    @media (max-width: 512px) {
        right: 140px
    }
`

const BoardTitle = styled.h3`
    text-align: center;
    font-family:'Commissioner', sans-serif;
    font-weight: 700;
    font-size:1.2rem;
    letter-spacing: 1.1px;
    line-height: 2;
    @media(max-width: 512px){
       font-size:1.5rem;
    };
`

const BoardText =  styled.div`
 font-weight: 400;
 font-size:0.8rem;
 text-align: center;
 color: grey;
 line-height: 2;
 margin-top: 10px;
 @media(max-width: 512px){
   font-size: 0.9rem;
};
`
const SecondBoard =  styled(BoardContainer)`
    display: flex;
    flex-direction: column;
    padding: 45px 30px;
    margin: 100px auto;
    @media (max-width: 1200px) {
        margin: 100px auto;
    };
    @media(max-width: 768px){
        margin: 125px auto;
    };
`

const ThirdBoard = styled(BoardContainer)`
   margin: -80px auto;
   @media (max-width: 1200px) {
    margin: -70px auto;
   }
   @media(max-width: 768px){
    margin: -90px auto;
};
`

const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top:12px;
        padding: 10px;
        @media (max-width: 1200px) {
         padding: 15px;
        }
        @media(max-width: 768px){
    };
`
const BoardButton = styled.button`
    padding:  5px 20px;
    border: none;
    background: hsl(176, 50%, 47%);
    color: white;
    font-weight: 700;
    border-radius: 20px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    transition: background-color o.3s;
    &:hover{
        background-color: hsl(176, 72%, 28%);
     }

    @media(max-width: 512px){
        padding:  10px 30px;
        font-size: 0.9rem;
    }
`
const GreyButton = styled(BoardButton)`
    background : hsl(176, 72%, 28%);
    color: hsl(0, 0%, 48%);
    background: #F3F3F3;
    padding:  0px 20px 0px 0;
    position: relative;
    outline:none;
    &:hover{
        background-color: transparent
        ;
     }
     &:hover div{
        color: hsl(176, 72%, 28%);
     }
    @media(max-width: 512px){
        background: none;
    }
`
const BookMarkImg = styled.img`
    width: 40px;
    margin-right: 7px;
    @media(max-width: 512px){
        margin-right: 0;
        width: 45px;
    }
`;
const BookMark = styled.div`
    display: inline-block;
    position: relative;
    top: -10px;
    transition: color 0.5s ease;
    ${({bookMarked}) => bookMarked && `
        color: hsl(176, 50%, 47%);
    `}
    @media(max-width: 512px){
        display: none;
    }
`
const BoardItem = styled.div`
    flex: 1;
    border-right: 1px solid hsl(0, 0%, 90%);
    padding: 15px;
    &:nth-of-type(3){
        border-right:none;
    }
    @media(max-width: 512px){
     flex: 100%;
     border-right: none;
     border-bottom: 1px solid hsl(0, 0%, 90%);
     text-align: center;
     &:nth-of-type(3){
        border-bottom:none;
        margin: 1.5rem 0;
    }
    &:nth-of-type(2){
        margin: -20px 0;
    }
    };
`
const BackedAmount =  styled.div`
    font-family:'Commissioner', sans-serif;
    font-weight: 700;
    padding:10px;
    @media(max-width: 512px){
        font-size: 1.5rem;
    }
`;
const BackedDetails = styled.div`
    color: grey;
    font-family:'Commissioner', sans-serif;
    font-size: 0.9rem;
    line-height: 2;
    margin-top:5px;
`;
const ProgressBar = styled.div`
    background-color: hsl(176, 50%, 47%);
    width: 37.39%;
    position: absolute;
    left: 0;
    display: block;
    height: 1rem;
    background-color: hsl(176, 50%, 47%);
    border-radius: 0.5rem;
`;
const BoardItemContainer = styled.div`
display: flex;
flex-direction: row;
flex: 100%;
@media(max-width: 512px){
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
`
const ProgressContainer = styled.div`
    margin-top: 25px;
    position: relative;
    display: block;
    width: 100%;
    height: 1rem;
    background-color: hsl(0, 0%, 90%);
    border-radius: 0.5rem;
`;

const Title = styled.h3`
    line-height: 1.5;
    font-family:'Commissioner', sans-serif;
`;

const ProjectDetails = styled.p`
margin-top: 10px;
font-size: 0.9rem;
line-height: 2;
color: grey;
font-family:'Commissioner', sans-serif;
`

const PledgeBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PledgeBoard = styled.div`
    flex-basis: 100%;
    padding: 2rem 1.5rem;
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 0.5rem;
    margin-top: 2rem;

`
const PledgeTitleSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    `

const PledgeTitlte = styled.div`
    font-size: 1rem;
    font-weight: 700;
    font-family:'Commissioner', sans-serif;
    margin-bottom: 0.75rem;
  ${({green}) => green && `
        color: #3EB4AB;
        margin-top: 10px;
  `}
`

const PledgeAmount = styled.div`
    font-size: 1rem;
    color: hsl(176, 50%, 47%);
    font-weight: 500;
    margin-bottom: 1.05rem;
    margin-top: 15px;
`

const PledgeDetails = styled(ProjectDetails)`
    margin-top: 5px;
    ${({extra}) =>  extra && `
    padding-left: 35px;
    `}
`;
const PledgeRemainderSection = styled(PledgeTitleSection)`
    margin-top: 20px;
    @media(max-width: 512px){
        flex-direction: column;
    }
`;

const PledgeStock = styled(PledgeTitleSection)`
    justify-content: flex-start;
    align-items: center;
    ${({right}) => right && `
        justify-content: flex-end;
    `}
`;
const Stock =  styled.h3`
    font-size: 2.25rem;
    margin-right: 0.75rem; 
`
const RewardButton = styled(BoardButton)`
    paddding: 15px 20px;
    @media(max-width: 512px){
        padding: 15px 20px;
        width: max-content;
        margin: 15px 0 ;
    }
`
export  {
    BoardContainer,
    MasterLogo,
    BoardTitle,
    BoardText,
    ButtonContainer,
    BoardButton,
    GreyButton,
    SecondBoard,
    BoardItemContainer,
    BoardItem,
    BackedAmount,
    BackedDetails,
    ProgressContainer,
    ProgressBar,
    ThirdBoard,
    Title,
    ProjectDetails,
    PledgeBoardContainer,
    PledgeBoard,
    PledgeTitleSection,
    PledgeTitlte,
    PledgeAmount,
    PledgeRemainderSection,
    BookMarkImg,
    BookMark,
    PledgeDetails,
    PledgeStock,
    Stock,
    RewardButton
}