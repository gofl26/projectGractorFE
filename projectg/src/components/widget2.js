import styled from "styled-components";

const Widget2 = () => {
    return(
        <Widget2Container>
            <Widget2TitleContainer>
                <Widget2Title>스마트 빗물받이 제어</Widget2Title>
                <Total80>총 80개소</Total80>
            </Widget2TitleContainer>
            <UpdateContainer>
                <UpdateTextContainer>
                    <FinallyUpdate>최종 업데이트:</FinallyUpdate>
                    <UpdateText>2021.05.14 13:31:03</UpdateText>
                </UpdateTextContainer>
                <UpdategihoContainer>
                        <Updategiho src="/img/icon-color11.png"/>
                    </UpdategihoContainer>
            </UpdateContainer>
            <DeviceInfoContainer>
                <OpenContainer>
                    <OpenText>열림</OpenText>
                    <OpenNum>27</OpenNum>
                </OpenContainer>
                <CloseContainer>
                    <OpenText>닫힘</OpenText>
                    <OpenNum>49</OpenNum>
                </CloseContainer>
                <ErrorContainer>
                    <OpenText>오류</OpenText>
                    <ErrorNum>4</ErrorNum>
                </ErrorContainer>
            </DeviceInfoContainer>
            <ControlButtonContainer>
                <TotalOpenContainer>
                    <TotalOpenText>전체열림</TotalOpenText>
                </TotalOpenContainer>
                <TotalCloseContainer>
                    <TotalCloseText>전체 닫힘</TotalCloseText>
                </TotalCloseContainer>
            </ControlButtonContainer>
        </Widget2Container>
    )
}

export default Widget2

const Widget2Container = styled.div`
    position: absolute;
    width: 320px;
    height: 220px;
    left: 1581px;
    top: 335px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const Widget2TitleContainer = styled.div`
    position: absolute;
    height: 24px;
    left: 20px;
    right: 20px;
    top: 20px;

    display: flex;
    justify-content: flex-start;

    border-bottom: 2px solid #C1C7CD;
`

const Widget2Title = styled.div`
    position: absolute;
    width: 138px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.2px;

    color: #50575E;
    border-bottom: 2px solid #B95000;
`

const Total80 = styled.div`
    position: absolute;
    width: 51px;
    height: 16px;
    right: 0px;
    top: 3px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
`

const UpdateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;

    position: absolute;
    width: 222.25px;
    height: 22px;
    left: 78px;
    top: 54px;
`

const UpdateTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 195px;
    height: 16px;
`

const FinallyUpdate = styled.div`
    width: 73px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #707781;
`

const UpdateText = styled.div`
    width: 117px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #343A3F;
`

const UpdategihoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px;
    gap: 10px;

    width: 22.25px;
    height: 22px;
`

const Updategiho = styled.img`
    width: 16.25px;
    height: 16px;
`

const DeviceInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 30px;

    position: absolute;
    width: 240px;
    height: 55px;
    left: 20px;
    top: 81px;

    background: #F2F4F8;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`

const OpenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 1px;

    width: 60px;
    height: 49px;
`

const CloseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 1px;

    width: 60px;
    height: 49px;
`

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 1px;

    width: 60px;
    height: 49px;
`

const OpenText = styled.div`
    width: 26px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: #343A3F;
`

const OpenNum = styled.div`
    width: 60px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 24px;

    text-align: center;
    text-decoration-line: underline;

    color: #50575E;
`

const ErrorNum = styled.div`
    width: 60px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 24px;

    text-align: center;
    text-decoration-line: underline;
    color: #DA1414;
`

const ControlButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 5px;

    position: absolute;
    width: 280px;
    height: 30px;
    left: 20px;
    top: 170px;

`

const TotalOpenContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 12px;

    width: 137.5px;
    height: 25px;

    background: #027FC2;

    border: 1px solid #027FC2;
    border-radius: 3px;
`

const TotalCloseContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 12px;

    width: 137.5px;
    height: 25px;

    background: #027FC2;

    border: 1px solid #027FC2;
    border-radius: 3px;
`

const TotalOpenText = styled.div`
    width: 51px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #FFFFFF;
`

const TotalCloseText = styled.div`
    width: 55px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #FFFFFF;
`