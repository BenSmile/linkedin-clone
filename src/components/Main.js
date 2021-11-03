import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="user-icon" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="event-icon" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="video-icon" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="event-icon" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="article-icon" />
            <span>Write an article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.2);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.4;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding-left: 16px;
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap:wrap;
      justify-content: space-around;
      
    }
  }
`;

export default Main;
