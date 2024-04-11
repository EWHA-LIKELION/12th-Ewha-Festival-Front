import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  width: 350px;
  padding: 11px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  background: linear-gradient(334deg, #fff 71.49%, #fff 169%);
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.5px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 350px;
  height: 197px;
  padding-top: 143px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background:
    linear-gradient(
      336deg,
      rgba(0, 0, 0, 0.2) -23.55%,
      rgba(0, 0, 0, 0) 129.38%
    ),
    url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 0px 0px 9px 0px rgba(255, 255, 255, 0.25) inset;
`;

const ImgEditBtn = styled.div`
  position: absolute;
  display: flex;
  width: 350px;
  height: 54px;
  padding: 10px 133px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.34);
  border-radius: 0px 0px 15px 15px;

  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: -0.5px;

  cursor: pointer;
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  padding: 10px 146px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #03d664;
  background: #07fb77;

  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
  letter-spacing: -0.5px;

  cursor: pointer;
  outline: none;
`;

export const B = {
  InputContainer,
  Title,
  ImgContainer,
  ImgEditBtn,
  SubmitBtn
};
