import styled from 'styled-components';

const Bloc = styled.div`
  background: ${({ theme }) => theme.main.colors.white};
  border-radius: ${({ theme }) => theme.main.sizes.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export default Bloc;
