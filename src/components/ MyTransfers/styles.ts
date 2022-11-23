import styled from "styled-components";
import media from "styled-media-query";

type TransferProps = {
  typeTransfer: boolean;
};

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  max-height: 30rem;

  ${media.greaterThan("medium")`
    max-height: 40rem;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
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

export const NoTransactionMsg = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
`;
