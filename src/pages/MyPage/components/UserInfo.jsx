import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSetRecoilState } from 'recoil';
import { SignupState } from '../../../assets/recoil/apiRecoil';
import { getCookie } from '../../../api/http.js';
import { Logout } from '../../../api/auth.js';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const setCookieNickname = useSetRecoilState(SignupState);
  const nickname = getCookie('nickname');
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      const storedNickname = getCookie('nickname');
      setCookieNickname(prev => ({
        ...prev,
        nickname: storedNickname
      }));
    } else {
      alert('로그인 정보를 찾을 수 없습니다.');
      navigate('/login');
    }
  }, [setCookieNickname]);

  return (
    <>
      <User>
        <Name>{nickname} 님</Name>
        <LogoutBtn onClick={() => Logout()}>로그아웃</LogoutBtn>
      </User>
    </>
  );
};

export default UserInfo;

const User = styled.div`
  display: flex;
  width: 95%;
  height: 5.4375rem;
  padding: 1.6875rem 1.31rem 1.6875rem 1.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray03);
  background: linear-gradient(158deg, #43ff9966, #f7f7f7);
  margin: 5.81rem 0 2.5rem 0;
`;

const Name = styled.div`
  color: #006c31;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.0625rem; /* 183.333% */
  letter-spacing: -0.03125rem;
`;

const LogoutBtn = styled.div`
  color: var(--gray05);
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 200% */
  letter-spacing: -0.03125rem;
  text-decoration-line: underline;
  cursor: pointer;
`;
