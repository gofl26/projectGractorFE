import styled from "styled-components";
import { AiOutlineBell } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

const Header = () => {
    return(<Headercontainer>
            <LeftBox>
                <Logo src="/img/geumcheon_logo.jpeg"/>
                <Title>우시장 IoT 스마트 서비스</Title>
            </LeftBox>
            <RightBox>
                <ItemContainer className="box1">
                    <ItemTitle>현재시각</ItemTitle>
                    <ItemContent3>15:26:43</ItemContent3>
                </ItemContainer>
                <ItemContainer >
                    <ItemTitle>날씨</ItemTitle>
                    <ItemContent3>
                        <ItemContent1>21&#176;C</ItemContent1>
                        <ItemContent2>30%</ItemContent2>
                    </ItemContent3>
                </ItemContainer>

                <ItemContainer className="box2">
                    <ItemTitle>공기질</ItemTitle>
                    <ItemContent3>
                        <ItemContent1>27</ItemContent1>
                        <ItemContent2>좋음</ItemContent2>
                    </ItemContent3>
                </ItemContainer>
                <AiOutlineBell size={40} color="#707781"/>
                <ItemContainer className="box1">
                    <ItemTitle>192.168.1.221</ItemTitle>
                    <ItemContent3 className="box3">김민준</ItemContent3>
                </ItemContainer>
                <BsThreeDotsVertical size={40} color="#707781"/>
            </RightBox>
        </Headercontainer>
    )
}
export default Header;

const Headercontainer = styled.div`
    position: fixed;
    top: 0px;
    border-bottom: 1px solid #C1C7CD;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    width: 1920px;
`

const LeftBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    gap: 10px;
`

const Logo = styled.img`
    width: 51px;
    height: 36px;
`
const Title = styled.div`
    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-align: left;
`

const RightBox = styled.div`
    display: flex;
    flex-direction: row;

    .box1 {
        border: 0px;
        width: 90px;
    }
    .box2 {
        width: 70px;
    }
    .box3 {
        color: #343A3F;
    }
    
`

const ItemContainer = styled.div`
    width: 103px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    border-left: 1px solid gray;
`

const ItemTitle = styled.div`
// border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #707781;
`

const ItemContent1 = styled.div`

`

const ItemContent2 = styled.div`

`

const ItemContent3 = styled.div`
// border: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #707781;
`