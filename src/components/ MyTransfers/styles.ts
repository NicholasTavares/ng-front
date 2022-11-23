import styled from "styled-components";

type TransferProps = {
  typeTransfer: boolean;
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 100%;
  min-height: 8rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors["gray/200"]};
  box-shadow: 1px 3px 15px 1px rgba(0, 0, 0, 0.3);
  max-height: 20rem;
  overflow-y: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.publeNg};
`;

export const Transfer = styled.div<TransferProps>`
  border-radius: 1rem;
  background-color: ${({ theme, typeTransfer }) =>
    typeTransfer ? theme.colors["red/700"] : theme.colors["lime/600"]};
  padding: 1rem;
  font-size: 1.4rem;

  &:not(last-child) {
    margin-bottom: 1rem;
  }
`;

export const ContainerTopic = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const DateTitleTopic = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const Topic = styled.span`
  font-size: 1.4rem;
  margin-right: 0.2rem;
  color: ${({ theme }) => theme.colors["gray/50"]};
  font-weight: bold;
`;

export const TopicContent = styled.span`
  font-size: 1.4rem;
  color: black;
`;
