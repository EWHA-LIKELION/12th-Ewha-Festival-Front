import React, { useEffect, useState } from 'react';
import { S } from './components/Signup.style';

import TopBar from '../../_common/TopBar';
import Modal from '../../_common/Modal';
import { ReactComponent as NameIcon } from './images/namelogo.svg';
import { getCookie } from '../../api/auth';

//recoil
import { PostNickname } from '../../api/auth';

const SignupKakaoPage = () => {
  const [nickname, setNickname] = useState('');
  const kakaoUsername = getCookie('username');

  const isFieldSatisfied = nickname;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickComplete = () => {
    if (isFieldSatisfied) {
      setIsModalOpen(true);
    }
  };

  //닉네임 변경 post 함수
  const onSubmitNickname = () => {
    console.log('nickname ' + nickname);
    console.log('kakaoUsername ' + kakaoUsername);
    PostNickname(nickname, kakaoUsername);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setNickname(nickname);
    }, 500);

    //clean up
    return () => clearTimeout(delayTimer);
  }, [nickname, setNickname]);

  return (
    <>
      <S.Wrapper>
        <TopBar isMenu={false} isMain={false} isWhite={true} />
        <S.Title>회원가입</S.Title>
        <S.RowBox>
          <S.InputBox num='250px'>
            <NameIcon />
            <input
              placeholder='닉네임(최대 8자)'
              name='nickname'
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              maxLength={8}
            ></input>
          </S.InputBox>
        </S.RowBox>
        <S.LoginBtn isFieldSatisfied={isFieldSatisfied} onClick={clickComplete}>
          회원가입
        </S.LoginBtn>
      </S.Wrapper>
      {isModalOpen && (
        <Modal
          msgType={1}
          title='회원가입 완료'
          msg1='회원가입을 완료하시겠습니까?'
          msg2='작성한 회원 정보는 이후 변경이 어려워요.'
          setIsModalOpen={setIsModalOpen}
          onClickYes={onSubmitNickname}
        />
      )}
    </>
  );
};

export default SignupKakaoPage;
