import styled from "styled-components";

const ZoomControl = () => {
    return(
        <ZoomControlContainer>
            <PlusContainer>
                <PlusPng src="/img/Path.png"/>
            </PlusContainer>
            <ZoomscrollContainer>
                <ZoomBar src="/img/Rectangle Copy 16.png"/>
                <ZoomBar2 src="/img/Rectangle Copy 18.png"/>
                <Oval src="/img/Oval.png"/>
            </ZoomscrollContainer>
            <MinusContainer>
                <MinusPng src="/img/Rectangle Copy 10.png"/>
            </MinusContainer>
        </ZoomControlContainer>
    )
}

export default ZoomControl

const ZoomControlContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 250px;
    left: 1518px;
    top: 132px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #C1C7CD;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;

    display: flex;
    flex-direction: column;
`

const PlusContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 40px;
    left: 0px;
    top: 0px;

    border-bottom: 1px solid #C1C7CD;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PlusPng = styled.img`
    width: 16px;
    height: 16px;
`

const ZoomscrollContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 170px;
    left: 0px;
    top: 41px;

    border-bottom: 1px solid #C1C7CD;;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ZoomBar = styled.img`
    width: 6px;
    height: 140px;
    background: #C1C7CD;
    border-radius: 3px;
    position: absolute;
`

const Oval = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
`

const ZoomBar2 = styled.img`
    width: 6px;
    height: 80px;
    top: 80px;
    position: absolute;
`

const MinusContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 38px;
    left: 0px;
    top: 210px;

    display: flex;
    align-items: center;
    justify-content: center;
`

const MinusPng = styled.img`
    width: 16px;
    height: 2px;

    background: #50575E;
`