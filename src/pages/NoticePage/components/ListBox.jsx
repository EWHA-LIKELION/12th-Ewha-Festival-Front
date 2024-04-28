import styled from 'styled-components';

const ListBox = () => {
  return (
    <Container>
      <div>[공지] 공지사항</div>
      <div>
        <span>(준)축제준비위원회</span>
        <span>2024-02-15</span>
      </div>
    </Container>
  );
};

export default ListBox;

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  height: 87px;
  border-radius: 0.9375rem;
  border: 1px solid var(--gray04);
  background: var(--wh);

  div:nth-child(1) {
    color: var(--bk01);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.375rem;
    letter-spacing: -0.03125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    height: 15px;
    gap: 0.625rem;

    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: -0.03125rem;

    span:nth-child(1) {
      color: var(--green01);
      line-height: 0.75rem;
    }

    span:nth-child(2) {
      color: var(--gray05);
      line-height: 1.375rem;
    }
  }
`;
