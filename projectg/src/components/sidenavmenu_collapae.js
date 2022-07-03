import styled from "styled-components";

const SideNavMenu = () => {
    return(
        <Leftcontainer>
            <Dashboard src="/img/icon-color.png"/>
            <Vector src="/img/Vector (Stroke).png"/>
            <Icon2 src="/img/icon-color2.png"/>
            <Icon3 src="/img/icon-color3.png"/>
            <Icon4 src="/img/icon-color4.png"/>
            <Icon5 src="/img/icon-color5.png"/>
        </Leftcontainer>
    )
}

export default SideNavMenu;

const Leftcontainer = styled.div`
    position: fixed;
    top: 64px;
    border-right: 1px solid #C1C7CD;
    display: flex;
    align-items: center;
    justify-content: baseline;
    flex-direction: column;
    gap: 29px;
    padding-top: 15px;
    width: 48px;
    height: 1000px;
`

const Dashboard = styled.img`
    width: 16.2px;
    height: 16.2px;
`

const Vector = styled.img`
    width: 16.2px;
    height: 16.2px;
`

const Icon2 = styled.img`
    width: 16.2px;
    height: 16.2px;
`

const Icon3 = styled.img`
    width: 16.2px;
    height: 16.2px;
`

const Icon4 = styled.img`
    width: 13.5px;
    height: 17px;
`

const Icon5 = styled.img`
    width: 18px;
    height: 18px;
`