import styled from 'styled-components';

const UserContainer = styled.div`
:hover {
background-color: ${props => props.color};
cursor: pointer;
}`;

UserContainer.defaultProps = { color: '#e8e8e8'};

export default UserContainer;