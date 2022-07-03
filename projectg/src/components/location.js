import styled from "styled-components";

const Location = () => {
    return(
        <LocationContainer>
            <Vector1 src="/img/Vector.png"/>
        </LocationContainer>
    )
}

export default Location

const LocationContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    left: 1518px;
    top: 85px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #C1C7CD;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Vector1 = styled.img`
    width: 16.5px;
    height: 16.5px;
`