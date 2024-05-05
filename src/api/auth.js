import { http } from './http';

// POST : 회원가입
export const PostSignup = async (user_id, password, nickname, navigate) => {
  try {
    const response = await http.post('/accounts/signup/', {
      username: user_id,
      password: password,
      nickname: nickname
    });
    console.log(response.data);
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);
    //아이디(id) 저장
    document.cookie = `id=${response.data.data.id}; expires=${expirationDate.toUTCString()};`;
    //닉네임(nickname) 저장
    document.cookie = `nickname=${response.data.data.nickname}; expires=${expirationDate.toUTCString()};`;
    //토큰 저장
    document.cookie = `token=${response.data.data.access_token}; expires=${expirationDate.toUTCString()};`;
    navigate('/');
    alert('가입이 완료되었습니다.');
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('회원가입 실패', error.response);
  }
};

// POST : 로그인
export const PostLogin = async (user_id, password) => {
  try {
    const response = await http.post('/accounts/login/', {
      username: user_id,
      password: password
    });
    console.log(response.data);
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);

    //아이디(id) 저장
    document.cookie = `id=${response.data.data.user_info.id}; expires=${expirationDate.toUTCString()};`;
    //닉네임(nickname) 저장
    document.cookie = `nickname=${response.data.data.user_info.nickname}; expires=${expirationDate.toUTCString()};`;
    //토큰 저장
    document.cookie = `token=${response.data.data.access_token}; expires=${expirationDate.toUTCString()};`;
    //tf 불리언 저장
    document.cookie = `tf=${response.data.data.user_info.tf}; expires=${expirationDate.toUTCString()};`;
    //booth 불리언 저장
    document.cookie = `booth=${response.data.data.user_info.booth}; expires=${expirationDate.toUTCString()};`;
    //performance 불리언 저장
    document.cookie = `performance=${response.data.data.user_info.performance}; expires=${expirationDate.toUTCString()};`;

    return Promise.resolve(response);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
      window.location.replace('/login');
    }
    console.error('로그인 실패', error.response);
  }
};

// GET : 아이디 중복 확인
export const GetDuplicateId = async username => {
  try {
    const response = await http.post('/accounts/duplicate/', {
      username: username
    });
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('중복확인 실패', error.response);
  }
};

// GET : 카카오 로그인
export const KakaoLogin = async code => {
  try {
    const response = await http.get(`/accounts/kakao/callback/?code=${code}`);
    console.log(response.data);

    if (response.data.data.exist) {
      //이미 접속한 적 있는 경우
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);
      //아이디(id) 저장
      document.cookie = `id=${response.data.data.user_info.id}; expires=${expirationDate.toUTCString()};`;
      //닉네임(nickname) 저장
      document.cookie = `nickname=${response.data.data.user_info.nickname}; expires=${expirationDate.toUTCString()};`;
      //토큰 저장
      document.cookie = `token=${response.data.data.access_token}; expires=${expirationDate.toUTCString()};`;
      window.location.replace('/');
    } else {
      //처음 접속한 경우
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);
      //아이디(username) 저장
      localStorage.setItem('username', response.data.data.username);
      window.location.replace('/signupkakao');
    }
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// POST : 카카오 닉네임 입력
export const PostNickname = async (nickname, username) => {
  try {
    const response = await http.post('/accounts/kakao/nickname/', {
      nickname: nickname,
      username: username
    });
    console.log(response.data);

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 72 * 60 * 60 * 1000);
    //아이디(id) 저장
    document.cookie = `id=${response.data.data.id}; expires=${expirationDate.toUTCString()};`;
    //닉네임(nickname) 저장
    document.cookie = `nickname=${response.data.data.nickname}; expires=${expirationDate.toUTCString()};`;
    //토큰 저장
    document.cookie = `token=${response.data.data.access_token}; expires=${expirationDate.toUTCString()};`;

    window.location.replace('/');
    return Promise.resolve(response.data);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert(error.response.data.error.non_field_errors);
    }
    console.error(error.response);
    return Promise.reject(error);
  }
};

export const Logout = async () => {
  document.cookie = 'id=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제
  document.cookie =
    'nickname=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제
  document.cookie = 'token=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제
  document.cookie = 'tf=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제
  document.cookie = 'booth=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제
  document.cookie =
    'performance=; expires =Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; //쿠키 삭제

  // window.localStorage.clear(); // 로컬 스토리지 초기화
  window.location.replace('/');
};

// GET : 스크랩한 부스 목록 조회, 필터링
export const GetScrapBooth = async (type, page) => {
  try {
    const response = await http.get(
      `/accounts/likes/?type=${type}&page=${page}`
    );
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('스크랩한 부스 목록 조회 실패', error);
    return Promise.reject(error);
  }
};
