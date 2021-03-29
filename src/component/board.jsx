import styled from "styled-components";
import bookMark from "../assets/icon-bookmark.svg";
import  masterLogo from "../assets/logo-mastercraft.svg"

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
    font-size: 0.8rem;
    outline: none;
    cursor: pointer;
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
const Board = () => 
    <>
  <BoardContainer>
      <MasterLogo src={masterLogo} alt="master-craft-logo"/>
      <BoardTitle>Mastercraft Bamboo Monitor Riser</BoardTitle>
      <BoardText> 
          A beautiful & handcrafted monitor stand toreduce neck and eye strain.
    </BoardText> 
    <ButtonContainer>
   <BoardButton>Back this project </BoardButton> 
    <GreyButton>
        <BookMarkImg src={bookMark} alt="bookmark"/>
        <BookMark> Bookmark  </BookMark>
        </GreyButton>
    </ButtonContainer> 
    </BoardContainer>
    <SecondBoard>
    <BoardItemContainer>
     <BoardItem>
        <BackedAmount><h2>$89,914 </h2></BackedAmount> 
        <BackedDetails>of $100,000 backed </BackedDetails> 
    </BoardItem>
    <BoardItem>
    <BackedAmount> <h2>5,007 </h2> </BackedAmount> 
   <BackedDetails> total backers </BackedDetails>
    </BoardItem>
    <BoardItem>
    <BackedAmount> <h2>56 </h2> </BackedAmount> 
    <BackedDetails>  days left </BackedDetails> 
     </BoardItem>
     </BoardItemContainer>
     <ProgressContainer>
     <ProgressBar />
    </ProgressContainer>
    </SecondBoard>
    <ThirdBoard>
      <Title>About this project </Title>  
      <ProjectDetails>The Mastercraft
    Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
    screen to a more comfortable viewing height. Placing your monitor at eye
    level has the potential to improve your posture and make you more
    comfortable while at work, helping you stay focused on the task at hand.
    </ProjectDetails> 
    <ProjectDetails>
    Featuring artisan craftsmanship, the simplicity of design creates extra desk
    space below your computer to allow notepads, pens, and USB sticks to be
    stored under the stand. 
    </ProjectDetails>
    <PledgeBoardContainer>
        <PledgeBoard>
        <PledgeTitleSection>
            <PledgeTitlte>
            Bamboo Stand Pledge
            </PledgeTitlte>  
            <PledgeAmount>

            $25 or more 
            </PledgeAmount>
        </PledgeTitleSection>
        < PledgeDetails>
        You get an ergonomic
         stand made of natural bamboo. You've helped us launch our promotional
        campaign, and you’ll be added to a special Backer member list. 
        </PledgeDetails>
        <PledgeRemainderSection>
            <PledgeStock>
             <Stock>101 </Stock>
            <span> left</span>
            </PledgeStock>
         <RewardButton>
         Select Reward 
         </RewardButton>
        </PledgeRemainderSection>
        </PledgeBoard>
        <PledgeBoard>
            <PledgeTitleSection>
            <PledgeTitlte>
            Black Edition Stand Pledge
                </PledgeTitlte>  
                <PledgeAmount>
                $75 or more 
                </PledgeAmount> 
            </PledgeTitleSection>
            <PledgeDetails>
            You get a Black Special
            Edition computer stand and a personal thank you. You’ll be added to our
            Backer member list. Shipping is included. 
            </PledgeDetails>
            <PledgeRemainderSection>
                <PledgeStock>
                    <Stock>
                    64 
                    </Stock>
                    <span>
                    left
                    </span>
                </PledgeStock>
                <RewardButton>
                Select Reward 
                </RewardButton>
            </PledgeRemainderSection>
     </PledgeBoard>
     <PledgeBoard>
         <PledgeTitleSection>
             <PledgeTitlte>
             Mahogany
            Special Edition
             </PledgeTitlte>
             <PledgeAmount>
             Pledge $200 or more 
             </PledgeAmount>
         </PledgeTitleSection>
         <PledgeDetails>

       You get two Special Edition Mahogany
        stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our
        Backer member list. Shipping is included. 0 left Out of Stock
         </PledgeDetails>
         <PledgeRemainderSection>
            <PledgeStock>
                <Stock>
                    2
                </Stock>
                <span>
                    left
                </span>
            </PledgeStock>
            <RewardButton>
                Select Reward
            </RewardButton>
         </PledgeRemainderSection>
    </PledgeBoard>
    </PledgeBoardContainer>
    </ThirdBoard>
  
   { /* Back this project Want to support us in bringing Mastercraft Bamboo Monitor
    Riser out in the world? Pledge with no reward Choose to support us without a
    reward if you simply believe in our project. As a backer, you will be signed
    up to receive product updates via email. Bamboo Stand Pledge $25 or more You
    get an ergonomic stand made of natural bamboo. You've helped us launch our
    promotional campaign, and you’ll be added to a special Backer member list.
   101 left */}

</>
export default Board