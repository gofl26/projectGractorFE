import styled from "styled-components";

const ToolTop = () => {
    return(
        <ToolTopContainer>
            <ToolTopMainContainer>
                <ToolTopButton>
                    <ToolTopButtonText>장치상세보기</ToolTopButtonText>
                </ToolTopButton>
                <ToolTopLine/>
                <ToolTopText></ToolTopText>
                <ToolTopTitle>스마트 빗물받이</ToolTopTitle>
                <ToolTopBasic>
                    <ToolTopIdContainer>
                        <ToolTopId>장치ID</ToolTopId>
                        <ToolTopIdV>0123456789ABCDEF</ToolTopIdV>
                    </ToolTopIdContainer>
                    <ToolTopAdContainer>
                        <ToolTopAd>설치위치</ToolTopAd>
                        <ToolTopAdV>서울 금천구 벗꽃로 18길 진도아파트 앞</ToolTopAdV>
                    </ToolTopAdContainer>
                    <ToolTopStContainer>
                        <ToolTopSt>장치상태</ToolTopSt>
                        <ToolTopStButtonContainer>
                            <ToolTopStButton1>
                                <ToolTopStButton1T>정상</ToolTopStButton1T>
                            </ToolTopStButton1>
                            <ToolTopStButton2>
                                <ToolTopStButton1T>실패</ToolTopStButton1T>
                            </ToolTopStButton2>
                        </ToolTopStButtonContainer>
                    </ToolTopStContainer>
                </ToolTopBasic>
            </ToolTopMainContainer>
        </ToolTopContainer>
    )
}

export default ToolTop

const ToolTopContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 212px;
    left: 739px;
    top: 267px;
    z-index:2;

    border: 1px solid red;
`

const ToolTopMainContainer = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 300px;
    height: 160px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;

    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const ToolTopButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    gap: 10px;

    position: absolute;
    width: 72px;
    height: 20px;
    right: 20px;
    top: 17px;

    background: #1479C9;
    border-radius: 1px;
`

const ToolTopButtonText = styled.div`
    width: 66px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    text-align: right;

    color: #FFFFFF;
`

const ToolTopLine = styled.div`
    position: absolute;
    width: 260px;
    height: 0px;
    left: 20px;
    top: 55px;

    border: 1px solid #C1C7CD;
`

const ToolTopText = styled.div`
    position: absolute;
    width: 106px;
    height: 26px;
    left: 20px;
    top: 20px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;

    color: #343A3F;
`

const ToolTopIdContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    position: absolute;
    width: 167px;
    height: 24px;
    left: 12px;
    top: 0px;
`

const ToolTopBasic = styled.div`
    position: absolute;
    width: 254px;
    height: 72px;
    left: 20px;
    top: 65px;
`

const ToolTopId = styled.div`
    width: 33px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;

    text-align: right;
    letter-spacing: -0.2px;

    color: #50575E;
`

const ToolTopIdV = styled.div`
    width: 114px;
    height: 20px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    letter-spacing: -0.2px;

    color: #50575E;
`

const ToolTopAdContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    position: absolute;
    width: 254px;
    height: 24px;
    left: 0px;
    top: 24px;
`

const ToolTopAd = styled.div`
    width: 44px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;

    text-align: right;
    letter-spacing: -0.2px;

    color: #50575E;
`

const ToolTopAdV = styled.div`
    width: 190px;
    height: 20px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    letter-spacing: -0.2px;

    color: #50575E;
`

const ToolTopStContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    position: absolute;
    width: 147px;
    height: 24px;
    left: 0px;
    top: 48px;
`

const ToolTopSt = styled.div`
    width: 44px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;

    text-align: right;
    letter-spacing: -0.2px;

    color: #50575E;
`

const ToolTopStButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 83px;
    height: 20px;
`

const ToolTopStButton1 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    gap: 5px;

    width: 40px;
    height: 20px;

    background: rgba(2, 127, 194, 0.1);

    border: 1px solid #027FC2;
    border-radius: 12px;
`

const ToolTopStButton1T = styled.div`
    width: 19px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #027FC2;
`

const ToolTopStButton2 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    gap: 5px;

    width: 40px;
    height: 20px;

    background: rgba(2, 127, 194, 0.1);

    border: 1px solid #027FC2;
    border-radius: 12px;
`

const ToolTopTitle = styled.div`
    position: absolute;
    width: 106px;
    height: 26px;
    left: 20px;
    top: 20px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;

    color: #343A3F;
`