import styled from "styled-components";

const Frame = () => {
    return(
        <FrameContainer>
            2D
        </FrameContainer>
    )
}

export default Frame

const FrameContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    left: 1518px;
    top: 387px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #C1C7CD;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
`