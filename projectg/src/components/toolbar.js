import styled from "styled-components";

const Toolbar = () => {
    return(
        <ToolbarContainer>
            <DomainContainer>
                <Zone src="/img/zone.png"/>
                <ZoneText>영역</ZoneText>
            </DomainContainer>
            <RadiusContainer>
                <Diameter src="/img/diameter.png"/>
                <DiameterText>반경</DiameterText>
            </RadiusContainer>
            <GroupContainer>
                <Group src="/img/groups.png"/>
                <GroupText>그룹</GroupText>
            </GroupContainer>
        </ToolbarContainer>
    )
}

export default Toolbar

const ToolbarContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 128px;
    left: 1518px;
    top: 443px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #C1C7CD;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
`

const DomainContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #C1C7CD;
`

const RadiusContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    left: 0px;
    top: 43px;

    border-bottom: 1px solid #C1C7CD;
`

const GroupContainer = styled.div`
    position: absolute;
    width: 42px;
    height: 42px;
    left: 0px;
    top: 86px;
`

const Zone = styled.img`
    position: absolute;
    left: 11px;
    top: 9px;

    width: 20px;
    height: 20px;
`

const ZoneText = styled.div`
    position: absolute;
    width: 18px;
    height: 10px;
    left: 12px;
    top: 30px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 9px;

    color: #707781;
`

const Diameter = styled.img`
    position: absolute;
    left: 11px;
    top: 9px;

    width: 20px;
    height: 20px;
`

const DiameterText = styled.div`
    position: absolute;
    width: 18px;
    height: 10px;
    left: 12px;
    top: 30px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 9px;

    color: #707781;
`

const Group = styled.img`
    position: absolute;
    left: 11px;
    top: 9px;

    width: 20px;
    height: 20px;
`

const GroupText = styled.div`
    position: absolute;
    width: 18px;
    height: 10px;
    left: 12px;
    top: 30px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 8px;
    line-height: 9px;

    color: #707781;
`