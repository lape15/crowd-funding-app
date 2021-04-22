import { useState, useContext, useEffect, useRef } from 'react';
import bookMark from '../assets/icon-bookmark.svg';
import masterLogo from '../assets/logo-mastercraft.svg';
import bookMarked from '../assets/icon-bookmarked.svg';
import { PledgeContext } from '../context/modal';
import {
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
  RewardButton,
  BoardWrapper,
} from '../common/style';

const Board = ({ PledgeRefOne, PledgeRefTwo, PledgeRefThree, progressRef }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const {
    dispatch,
    state: {
      backedAmount,
      backers,
      daysLeft,
      bambooLeft,
      blackLeft,
      mahoganyLeft,
      progressTransition,
      progressLength,
    },
  } = useContext(PledgeContext);

  const handleBookmarked = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <BoardWrapper>
      <BoardContainer>
        <MasterLogo src={masterLogo} alt="master-craft-logo" />
        <BoardTitle>Mastercraft Bamboo Monitor Riser</BoardTitle>
        <BoardText>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </BoardText>
        <ButtonContainer>
          <BoardButton
            onClick={() =>
              dispatch({
                type: 'SWITCH_MODAL',
              })
            }
          >
            Back this project
          </BoardButton>
          <GreyButton onClick={handleBookmarked}>
            {!bookmarked ? (
              <BookMarkImg src={bookMark} alt="bookmark" />
            ) : (
              <BookMarkImg src={bookMarked} alt="bookmark" />
            )}
            <BookMark bookMarked={bookmarked}>
              {!bookmarked ? 'Bookmark' : 'Bookmarked'}
            </BookMark>
          </GreyButton>
        </ButtonContainer>
      </BoardContainer>
      <SecondBoard ref={progressRef}>
        <BoardItemContainer>
          <BoardItem>
            <BackedAmount>
              <h2>${backedAmount.toLocaleString()}</h2>
            </BackedAmount>
            <BackedDetails>of $100,000 backed </BackedDetails>
          </BoardItem>
          <BoardItem>
            <BackedAmount>
              {' '}
              <h2>{backers.toLocaleString()} </h2>{' '}
            </BackedAmount>
            <BackedDetails> total backers </BackedDetails>
          </BoardItem>
          <BoardItem>
            <BackedAmount>
              {' '}
              <h2>{daysLeft}</h2>{' '}
            </BackedAmount>
            <BackedDetails> days left </BackedDetails>
          </BoardItem>
        </BoardItemContainer>
        <ProgressContainer>
          <ProgressBar
            progressTransition={progressTransition}
            progressLength={progressLength}
          />
        </ProgressContainer>
      </SecondBoard>
      <ThirdBoard>
        <Title>About this project </Title>
        <ProjectDetails>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </ProjectDetails>
        <ProjectDetails>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </ProjectDetails>
        <PledgeBoardContainer>
          <PledgeBoard>
            <PledgeTitleSection>
              <PledgeTitlte>Bamboo Stand Pledge</PledgeTitlte>
              <PledgeAmount>$25 or more</PledgeAmount>
            </PledgeTitleSection>
            <PledgeDetails>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </PledgeDetails>
            <PledgeRemainderSection>
              <PledgeStock>
                <Stock>{bambooLeft}</Stock>
                <span> left</span>
              </PledgeStock>
              <RewardButton
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_MODAL',
                  });
                  if (PledgeRefOne.current) {
                    PledgeRefOne.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest',
                    });
                  }
                  dispatch({
                    type: 'BAMBOO_ACTIVE',
                  });
                }}
              >
                Select Reward
              </RewardButton>
            </PledgeRemainderSection>
          </PledgeBoard>
          <PledgeBoard>
            <PledgeTitleSection>
              <PledgeTitlte>Black Edition Stand Pledge</PledgeTitlte>
              <PledgeAmount>$75 or more</PledgeAmount>
            </PledgeTitleSection>
            <PledgeDetails>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </PledgeDetails>
            <PledgeRemainderSection>
              <PledgeStock>
                <Stock>{blackLeft}</Stock>
                <span>left</span>
              </PledgeStock>
              <RewardButton
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_MODAL',
                  });
                  if (PledgeRefTwo.current) {
                    PledgeRefTwo.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest',
                    });
                  }

                  dispatch({
                    type: 'BLACK_ACTIVE',
                  });
                }}
              >
                Select Reward
              </RewardButton>
            </PledgeRemainderSection>
          </PledgeBoard>
          <PledgeBoard mahoganyLeft={mahoganyLeft}>
            <PledgeTitleSection>
              <PledgeTitlte>Mahogany Special Edition</PledgeTitlte>
              <PledgeAmount>Pledge $200 or more</PledgeAmount>
            </PledgeTitleSection>
            <PledgeDetails>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included. 0 left Out of Stock
            </PledgeDetails>
            <PledgeRemainderSection>
              <PledgeStock>
                <Stock>{mahoganyLeft}</Stock>
                <span>left</span>
              </PledgeStock>
              <RewardButton
                onClick={() => {
                  dispatch({
                    type: 'SWITCH_MODAL',
                  });
                  if (PledgeRefThree.current) {
                    PledgeRefThree.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                  dispatch({
                    type: 'MAHOGANY_ACTIVE',
                  });
                }}
              >
                Select Reward
              </RewardButton>
            </PledgeRemainderSection>
          </PledgeBoard>
        </PledgeBoardContainer>
      </ThirdBoard>
    </BoardWrapper>
  );
};
export default Board;
