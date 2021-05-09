import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

export const Logo = styled.img`
  margin-top: 5.5rem;
  width: 6.5rem;
`;

export const MainContainer = styled.div`
  font-family: Roboto;
  font-size: 1rem;
  letter-spacing: -0.39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1rem;
  
`;
export const Header = styled.div`
  display: flex;
  justify-content:center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

export const HeaderTitle = styled.h3`
  width: 10.938rem;
  height: 2.75rem;
  margin: 1.25rem 5.75rem 0 5.813rem;
  text-align: center;
`;

export const Title = styled.h3`
  width: 10.938rem;
  height: 2.75rem;
  margin: 1.25rem 5.75rem 0 5.813rem;
  padding: 0.813rem 3.344rem 0.75rem;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  gap: 20px;
`;

export const UserContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width: 100%;
  height: 4.75rem;
  margin: 1rem 0;
  padding: 1rem;
  
`;
export const UserData = styled.div`
      width: 20.5rem;
      height: 1.125rem;
      margin: 0 0 0.5rem;
      font-family: Roboto;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: var(--greyish);
  
`;
export const AddressContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width: 100%;
  height: 4.75rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #eeeeee;
  
  
`;
export const AddressData = styled.div`
      width: 20.5rem;
      height: 1.125rem;
      margin: 0 0 0.5rem;
      font-family: Roboto;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
    h4{
      color: var(--greyish);
  }
`;
export const HistoryContainer = styled.div`
  width: 100%;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;
export const ListOrders= styled.div`
  
`;

export const Text = styled.p`
  font-size:1rem;
  font-weight: bold;
  margin-top: 0.3rem;
`
export const TitleProfile = styled.h4`
  font-size: 1rem;
  font-family:  'roboto';
  letter-spacing: -0.39px;
  color: ${props => props.restaurant ? '#e8222e': '#b8b8b8'};
`

export const Date = styled.p`
  font-size: 0.75rem;
  letter-spacing:-0.29px;
  font-family: 'roboto';
  color: black;
`

export const CardOrder = styled.div`
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 0.5rem;
  padding: 1rem;
`
export const useStyles = makeStyles({
  title: {
    fontSize: '1rem',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    letterSpacing: '-0.39px',
  },
  information: {
    fontSize: '1rem',
    fontFamily: 'roboto',
    letterSpacing: '-0.39px',
    paddingTop: '0.3rem',
    paddingRight: '2rem',
    color: '#b8b8b8',
  },
  historyTitle: {
    fontSize: '1rem',
    fontFamily: 'roboto',
    marginTop: '0',
    letterSpacing: '-0.39px',
    color: '#00000',
    fontWeight: 'bold',
    margin: '0.2rem',
    borderBottom: 'solid 1px black'
  },
});