import styled from "styled-components";

const BoardContainer = styled.div`
    border: 2px solid green;
    padding: 30px;
    width:70%;
    margin: -80px auto;
    background-color: white;
    
`
const BoardTitle = styled.h3`
    text-align: center;
    font-family:'Commissioner', sans-serif;
    font-weight: 700;
    font-size:1.2rem;
    letter-spacing: 1;
`

const BoardText =  styled.div`
 font-weight: 400;
 font-size:0.8rem;
 text-align: center;
`
const SecondBoard =  styled(BoardContainer)`
    border: 2px solid red;
    margin: 100px auto;
`

const ThirdBoard = styled(BoardContainer)`
   border: 2px solid purple;
   margin: -80px auto;
`
const BoardButton = styled.button``
const Board = () => 
    <>
  <BoardContainer>
      <BoardTitle>Mastercraft Bamboo Monitor Riser</BoardTitle>
      <BoardText> 
          A beautiful & handcrafted monitor stand toreduce neck and eye strain.
    </BoardText>  
   <BoardButton>Back this project </BoardButton> 
    <BoardButton>Bookmark </BoardButton>
    </BoardContainer>
    <SecondBoard>
     $89,914 of $100,000
     backed 5,007 total backers 56 days left
    </SecondBoard>
    <ThirdBoard>About this project The Mastercraft
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