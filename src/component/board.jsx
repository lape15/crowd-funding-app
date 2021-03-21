import styled from "styled-components";
import bookMark from "../assets/icon-bookmark.svg";

const BoardContainer = styled.div`
    padding: 35px 30px;
    width:48%;
    margin: -80px auto;
    background-color: white;
    border:1px solid white;
    border-radius: 8px;
    box-shadow: -2px 2px 2px 2px rgba( 215 ,215, 215 , 0.2);
`
const BoardTitle = styled.h3`
    text-align: center;
    font-family:'Commissioner', sans-serif;
    font-weight: 700;
    font-size:1.2rem;
    letter-spacing: 1.1px;
    line-height: 2;
`

const BoardText =  styled.div`
 font-weight: 400;
 font-size:0.8rem;
 text-align: center;
 color: grey;
 line-height: 2;
 margin-top: 10px;
`
const SecondBoard =  styled(BoardContainer)`
    margin: 100px auto;
    display: flex;
    flex-direction: row;
`

const ThirdBoard = styled(BoardContainer)`
   margin: -80px auto;
`

const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin-top:12px;
`
const BoardButton = styled.button`
    padding:  2px 20px;
    border: none;
    background: hsl(176, 50%, 47%);
    color: white;
    font-weight: 700;
    border-radius: 20px;
    font-size: 0.8rem;
`
const GreyButton = styled(BoardButton)`
    background : hsl(176, 72%, 28%);
    color: hsl(0, 0%, 48%);
    background: #F3F3F3;
    padding:  0px 20px 0px 0;
    position: relative;
`
const BookMarkImg = styled.img`
    width: 40px;
    margin-right: 7px;
`;
const BookMark = styled.div`
    display: inline-block;
    position: relative;
    top: -10px;
`
const BoardItem = styled.div`
    flex: 1;
    border-right: 1px solid hsl(0, 0%, 90%);
    padding: 20px;
    &:nth-of-type(3){
        border-right:none;
    }
`
const BackedAmount =  styled.div`
    font-family:'Commissioner', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
`;
const BackedDetails = styled.div`
    color: grey;
    font-family:'Commissioner', sans-serif;
    font-size: 0.9rem;
    line-height: 2;
`;
const Board = () => 
    <>
  <BoardContainer>
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
     <BoardItem>
        <BackedAmount>$89,914 </BackedAmount> 
        <BackedDetails>of $100,000 backed </BackedDetails> 
    </BoardItem>
    <BoardItem>
    <BackedAmount> 5,007  </BackedAmount> 
   <BackedDetails> total backers </BackedDetails>
    </BoardItem>
    <BoardItem>
    <BackedAmount> 56 </BackedAmount> 
    <BackedDetails>  days left </BackedDetails> 
     </BoardItem>
    </SecondBoard>
    <ThirdBoard>
        About this project The Mastercraft
    Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
    screen to a more comfortable viewing height. Placing your monitor at eye
    level has the potential to improve your posture and make you more
    comfortable while at work, helping you stay focused on the task at hand.
    Featuring artisan craftsmanship, the simplicity of design creates extra desk
    space below your computer to allow notepads, pens, and USB sticks to be
    stored under the stand. Bamboo Stand Pledge $25 or more You get an ergonomic
    stand made of natural bamboo. You've helped us launch our promotional
    campaign, and you’ll be added to a special Backer member list. 101 left
    Select Reward Black Edition Stand Pledge $75 or more You get a Black Special
    Edition computer stand and a personal thank you. You’ll be added to our
    Backer member list. Shipping is included. 64 left Select Reward Mahogany
    Special Edition Pledge $200 or more You get two Special Edition Mahogany
    stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our
    Backer member list. Shipping is included. 0 left Out of Stock
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