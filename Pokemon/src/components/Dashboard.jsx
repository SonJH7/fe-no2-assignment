import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  flex: 1;
  border: 2px solid #444;
  padding: 1rem;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background: #f66;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
`;

export default function Dashboard({ selected, onRemove }) {
  return (
    <Box>
      <Title>내 포켓몬 ({selected.length}/6)</Title>
      {selected.map(p => (
        <Item key={p.id}>
          <span>{p.name}</span>
          <Button onClick={() => onRemove(p.id)}>삭제</Button>
        </Item>
      ))}
      {selected.length === 0 && <p>추가된 포켓몬이 없습니다.</p>}
    </Box>
  );
}
