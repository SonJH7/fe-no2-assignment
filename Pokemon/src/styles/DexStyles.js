import styled from 'styled-components';

/** 페이지 전체 백그라운드 + 세로 패딩 */
export const PageWrapper = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  padding: 2rem 0;
`;

/** 가운데 고정 컨테이너 */
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

/** 선택된 포켓몬 섹션 */
export const SelectedSection = styled.section`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;

/** 섹션 타이틀 */
export const SelectedTitle = styled.h2`
  color: #e63946;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

/** 슬롯 그리드 (고정 6칸) */
export const SelectedGrid = styled.div`
  display: flex;
  gap: 1rem;
`;

/** 빈 슬롯 박스 */
export const Placeholder = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** 메인 도감 그리드 래퍼 */
export const Main = styled.main``;

/** 카드 그리드 */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  gap: 1.5rem;
`;

/** 공통 카드 스타일 */
export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform .2s;
  &:hover { transform: scale(1.05); }
`;

/** 카드 이미지 */
export const CardImage = styled.img`
  width: 80px;
  height: 80px;
`;

/** 정보 영역 */
export const Info = styled.div`
  margin: .75rem 0;
  p { margin: 0; }
  p:first-child { font-weight: bold; }
  p:last-child {
    color: #666;
    font-size: .9rem;
  }
`;

/** 추가 버튼 */
export const AddButton = styled.button`
  background: #e63946;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: .4rem .8rem;
  cursor: pointer;
  font-weight: bold;
  &:hover { opacity: 0.9; }
`;

/** 삭제 버튼 */
export const DeleteButton = styled.button`
  background: #e63946;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: .4rem .8rem;
  cursor: pointer;
  font-weight: bold;
  &:hover { opacity: 0.9; }
`;
