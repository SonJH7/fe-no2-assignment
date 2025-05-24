import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MOCK_DATA from '../mock';
import {
  PageWrapper,
  Container,
  SelectedSection,
  SelectedTitle,
  SelectedGrid,
  Placeholder,
  Main,
  CardGrid,
  Card,
  CardImage,
  Info,
  AddButton,
  DeleteButton
} from '../styles/DexStyles';

// 포켓몬볼 아이콘 URL
const POKEBALL_URL = 
  'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fysfx0%2FbtsBB8HF65I%2F5SAuBMWppNvW04F3v2EZ30%2Fimg.png';

export default function Dex() {
  // 고정 6칸 슬롯: null = 빈칸, 객체 = 선택된 포켓몬
  const [slots, setSlots] = useState(Array(6).fill(null));
  const navigate = useNavigate();

  const handleAdd = (poke) => {
    if (slots.some(s => s?.id === poke.id)) {
      return alert('이미 선택된 포켓몬입니다.');
    }
    const idx = slots.indexOf(null);
    if (idx === -1) {
      return alert('포켓몬은 최대 여섯개까지만 선택 할 수 있어요.');
    }
    const next = [...slots];
    next[idx] = poke;
    setSlots(next);
  };

  const handleRemove = (id) => {
    setSlots(prev =>
      prev.map(s => (s?.id === id ? null : s))
    );
  };

  return (
    <PageWrapper>
      <Container>
        {/* ─── 상단: 6칸 슬롯 ─── */}
        <SelectedSection>
          <SelectedTitle>나만의 포켓몬</SelectedTitle>
          <SelectedGrid>
            {slots.map((poke, i) => (
              <React.Fragment key={i}>
                {poke ? (
                  <Card>
                    <CardImage
                      src={poke.img_url}
                      alt={poke.korean_name}
                    />
                    <Info>
                      <p>{poke.korean_name}</p>
                      <p>
                        No. {String(poke.id).padStart(3, '0')}
                      </p>
                    </Info>
                    <DeleteButton
                      onClick={() => handleRemove(poke.id)}
                    >
                      삭제
                    </DeleteButton>
                  </Card>
                ) : (
                  <Placeholder>
                    <img
                      src={POKEBALL_URL}
                      alt="Pokeball Icon"
                      width={48}
                      height={48}
                    />
                  </Placeholder>
                )}
              </React.Fragment>
            ))}
          </SelectedGrid>
        </SelectedSection>

        {/* ─── 하단: 전체 도감 ─── */}
        <Main>
          <CardGrid>
            {MOCK_DATA.map(poke => (
              <Card key={poke.id}>
                <div
                onClick={() => navigate(`/detail/${poke.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <CardImage src={poke.img_url} alt={poke.korean_name} />
                <Info>
                  <p>{poke.korean_name}</p>
                  <p>No. {String(poke.id).padStart(3, '0')}</p>
                </Info>
              </div>
                <AddButton
                  onClick={() => handleAdd(poke)}
                >
                  추가
                </AddButton>
              </Card>
            ))}
          </CardGrid>
        </Main>
      </Container>
    </PageWrapper>
  );
}
