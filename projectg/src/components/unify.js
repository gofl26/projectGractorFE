import styled from "styled-components";

const Unify = () => {
    return(
        <UnifyContainer>
            <Button1>빗물받이</Button1>
            <Button2>스마트폴</Button2>
            <Button3>자가망</Button3>
        </UnifyContainer>
    )
}

export default Unify

const UnifyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px;
    gap: 5px;
    z-index:2;

    position: absolute;
    width: 281px;
    height: 54px;
    left: 360px;
    top: 85px;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const Button1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;

    width: 100px;
    height: 38px;

    background: rgba(2, 127, 194, 0.1);
    border: 1px solid #027FC2;
    border-radius: 3px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #027FC2;
`

const Button2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;

    width: 100px;
    height: 38px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #50575E;
`

const Button3 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    gap: 10px;

    width: 91px;
    height: 38px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #50575E;
`