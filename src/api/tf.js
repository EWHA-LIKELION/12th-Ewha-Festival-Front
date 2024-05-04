import { http } from './http';

// GET : TF 부스 목록 조회
export const GetTFBoothList = async type => {
  try {
    const response = await http.get(`/notices/event/?type=${type}`);
    console.log(response.data);
    return Promise.resolve(response.data.events);
  } catch (error) {
    console.error('TF 부스 목록 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : TF 부스 상세 조회
export const GetTFBoothDetail = async boothId => {
  try {
    const response = await http.get(`/notices/event/${boothId}/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('TF 부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : TF 공지 목록 조회
export const GetNoticeList = async page => {
  try {
    const response = await http.get(`/notices/?page=${page}`);
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('TF 공지 목록 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : TF 공지 상세 조회
export const GetNoticeDetail = async id => {
  try {
    const response = await http.get(`/notices/${id}/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('TF 공지 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// POST : TF 공지 작성
export const PostNotice = async (title, content) => {
  try {
    const response = await http.post(`/notices/`, {
      title: title,
      content: content
    });
    return Promise.resolve(response);
  } catch (error) {
    console.error('TF 공지 작성 실패', error.response);
    return Promise.reject(error);
  }
};

// PUT : TF 공지 수정
export const PutNotice = async (id, title, content) => {
  try {
    const response = await http.put(`/notices/${id}/`, {
      title: title,
      content: content
    });
    return Promise.resolve(response);
  } catch (error) {
    console.error('TF 공지 수정 실패', error.response);
    return Promise.reject(error);
  }
};

// DELETE : TF 공지 삭제
export const DeleteNotice = async id => {
  try {
    const response = await http.delete(`/notices/${id}/`);
    return Promise.resolve(response);
  } catch (error) {
    console.error('TF 공지 삭제 실패', error.response);
    return Promise.reject(error);
  }
};

// GET : TF 부스 수정용 조회
export const GetTFBoothInfo = async boothId => {
  try {
    const response = await http.get(`/notices/event/${boothId}/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('TF 부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// PATCH : TF 부스 수정
export const PatchTFBooth = async ({ boothId, formData, otherData }) => {
  // JSON으로 변환
  const jsonPayload = {
    otherData
  };

  formData.append(
    'jsonPayload',
    new Blob([JSON.stringify(jsonPayload)], {
      type: 'application/json'
    })
  );

  try {
    const response = await http.patch(`/notices/event/${boothId}/`, {
      formData: formData
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error('부스 정보 수정에 실패했습니다.');
    }
  } catch (error) {
    console.error('오류:', error);
    throw error;
  }
};
