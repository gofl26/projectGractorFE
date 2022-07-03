import styled from "styled-components";
import React, {useState,useEffect} from "react";
import axios from 'axios'

const Widget5 = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios({
            method:'GET',
            url:'http://121.132.131.93:28001/api/event'
        }).then((res)=>{
            setPosts(res.data.topics);
        })
    },[])
    
    const topics = posts

    function Event1(props){
        const lis = []
        for(let i =0; i<props.topics.length; i++) {
            let t = props.topics[i];
            if(t.etext==="과전류") {
                lis.push(
                    <Widget5EventItem key={t.id}>
                        <Widget5Button>
                            <Widget5ButtonText>{t.etext}</Widget5ButtonText>
                        </Widget5Button>
                        <Widget5TextContainer>
                            <Widget5Num>{t.edate}</Widget5Num>
                            <Widget5Address>{t.eaddress}</Widget5Address>
                        </Widget5TextContainer>
                    </Widget5EventItem>
                )
            } else if(t.etext==="물감지") {
                lis.push(
                    <Widget5EventItem key={t.id}>
                        <Widget5ButtonW>
                            <Widget5ButtonTextW>{t.etext}</Widget5ButtonTextW>
                        </Widget5ButtonW>
                        <Widget5TextContainer>
                            <Widget5Num>{t.edate}</Widget5Num>
                            <Widget5Address>{t.eaddress}</Widget5Address>
                        </Widget5TextContainer>
                    </Widget5EventItem>
                )
            } else if(t.etext==="접근센서") {
                lis.push(
                    <Widget5EventItem key={t.id}>
                        <Widget5ButtonA>
                            <Widget5ButtonTextA>{t.etext}</Widget5ButtonTextA>
                        </Widget5ButtonA>
                        <Widget5TextContainer>
                            <Widget5Num>{t.edate}</Widget5Num>
                            <Widget5Address>{t.eaddress}</Widget5Address>
                        </Widget5TextContainer>
                    </Widget5EventItem>
                )
            } else if(t.etext==="함체충격") {
                lis.push(
                    <Widget5EventItem key={t.id}>
                        <Widget5ButtonC>
                            <Widget5ButtonTextC>{t.etext}</Widget5ButtonTextC>
                        </Widget5ButtonC>
                        <Widget5TextContainer>
                            <Widget5Num>{t.edate}</Widget5Num>
                            <Widget5Address>{t.eaddress}</Widget5Address>
                        </Widget5TextContainer>
                    </Widget5EventItem>
                )
            }
        }
        return <>
            {lis}
        </>
    }
    
    return(
        <Widget5Container>
            <Widget5TitleContainer>
                <Widget5TitleText>이벤트 현황</Widget5TitleText>
            </Widget5TitleContainer>
            <Widget5Img src="/img/ico-filter 2.png"/>
            <FilterTegContainer>
                <FiterTeg1>
                    <FiterTeg1Text>과전류</FiterTeg1Text>
                    <FiterTeg1Img src="/img/Vector (x).png"/>
                </FiterTeg1>
                <FiterTeg2>
                    <FiterTeg2Text>악취</FiterTeg2Text>
                    <FiterTeg1Img src="/img/Vector (x).png"/>
                </FiterTeg2>
                <FiterTeg3>
                    <FiterTeg3Text>함체충격</FiterTeg3Text>
                    <FiterTeg1Img src="/img/Vector (x).png"/>
                </FiterTeg3>
                <FiterTeg4>
                    <FiterTeg4Text>물감지</FiterTeg4Text>
                    <FiterTeg4Img src="/img/Vector (x1).png"/>
                </FiterTeg4>
            </FilterTegContainer>
            <FilterTegContainer1>
                <FiterTeg5>
                    <FiterTeg5Text>함채개폐</FiterTeg5Text>
                    <FiterTeg4Img src="/img/Vector (x1).png"/>
                </FiterTeg5>
                <FiterTeg5>
                    <FiterTeg5Text>접근센서</FiterTeg5Text>
                    <FiterTeg4Img src="/img/Vector (x1).png"/>
                </FiterTeg5>
                <FiterTeg5Img src="/img/icon-color11.png"/>
            </FilterTegContainer1>
            <DivLine/>
            <Widget5EventListContainer>
                <Event1 topics={topics}></Event1>
            </Widget5EventListContainer>
            <Widget5EventPageContainer>
                <Widget5EventText>전체 317항목 중 1번부터 6번째</Widget5EventText>
                <Widget5EventButtonContainer1>
                    <Widget5EventButton src="/img/icon-color12.png"/>
                </Widget5EventButtonContainer1>
                <Widget5EventButtonContainer>
                <Widget5EventButton src="/img/icon-color13.png"/>
                </Widget5EventButtonContainer>
            </Widget5EventPageContainer>
        </Widget5Container>
    )
}

export default Widget5

const Widget5Container = styled.div`
    position: absolute;
    width: 320px;
    height: 485px;
    left: 1581px;
    top: 574px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const Widget5TitleContainer = styled.div`
    position: absolute;
    height: 24px;
    left: 20px;
    right: 20px;
    top: 20px;

    display: flex;
    justify-content: flex-start;

    border-bottom: 2px solid #C1C7CD;
`

const Widget5TitleText = styled.div`
    position: absolute;
    width: 76px;
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

const Widget5Img = styled.img`
    position: absolute;
    width: 16px;
    height: 16px;
    left: 282px;
    top: 21px;
`

const FilterTegContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    position: absolute;
    width: 269px;
    height: 24px;
    left: 20px;
    top: 57px;
`

const FiterTeg1 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 6px 4px 12px;
    gap: 5px;

    width: 63px;
    height: 24px;

    background: rgba(218, 20, 20, 0.05);

    border: 1px solid #DA1414;
    border-radius: 12px;
`

const FiterTeg2 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 6px 4px 12px;
    gap: 5px;

    width: 54px;
    height: 24px;

    background: rgba(218, 20, 20, 0.05);

    border: 1px solid #DA1414;
    border-radius: 12px;
`

const FiterTeg3= styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 6px 4px 12px;
    gap: 5px;

    width: 72px;
    height: 24px;

    background: rgba(218, 20, 20, 0.05);

    border: 1px solid #DA1414;
    border-radius: 12px;
`

const FiterTeg4 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px 4px 12px;
    gap: 5px;

    width: 65px;
    height: 24px;

    background: rgba(46, 90, 172, 0.05);

    border: 1px solid #2E5AAC;
    border-radius: 12px;
`

const FiterTeg1Text = styled.div`
    width: 28px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #DA1414;
`

const FiterTeg1Img = styled.img`
    width: 9px;
    height: 9px;
`

const FiterTeg2Text = styled.div`
    width: 19px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #DA1414;
`

const FiterTeg3Text = styled.div`
    width: 37px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #DA1414;
`

const FiterTeg4Text = styled.div`
    width: 28px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #2E5AAC;
`

const FiterTeg4Img = styled.img`
    width: 9px;
    height: 9px;
`

const FilterTegContainer1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;

    position: absolute;
    width: 184.25px;
    height: 24px;
    left: 20px;
    top: 89px;

`

const FiterTeg5Text = styled.div`
    width: 37px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #2E5AAC;
`

const FiterTeg5 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px 4px 12px;
    gap: 5px;

    width: 74px;
    height: 24px;

    background: rgba(46, 90, 172, 0.05);

    border: 1px solid #2E5AAC;
    border-radius: 12px;
`

const FiterTeg5Img = styled.img`
    width: 16.25px;
    height: 16px;
`

const DivLine = styled.div`
    position: absolute;
    width: 320px;
    height: 0px;
    left: 0px;
    top: 126px;

    border: 1px solid #C1C7CD;
`

const Widget5EventListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 280px;
    height: 312px;
    left: 20px;
    top: 126px;
`

const Widget5EventItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0px;
    gap: 14px;

    width: 280px;
    height: 52px;

    border-bottom: 1px dashed #C1C7CD;
`

const Widget5Button = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 5px;

    width: 52px;
    height: 24px;

    background: rgba(218, 20, 20, 0.05);

    border: 1px solid #DA1414;
    border-radius: 12px;
`

const Widget5ButtonText = styled.div`
    width: 28px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #DA1414;
`

const Widget5TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 210px;
    height: 36px;
`

const Widget5Num = styled.div`
    width: 138px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    letter-spacing: -0.2px;

    color: #343A3F;

`

const Widget5Address = styled.div`
    width: 181px;
    height: 15px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: -0.2px;

    /* light/font/font-main */

    color: #343A3F;

`

const Widget5EventPageContainer = styled.div`
    position: absolute;
    width: 268px;
    height: 24px;
    left: 20px;
    top: 448px;
`

const Widget5EventText = styled.div`
    position: absolute;
    width: 154px;
    height: 24px;
    left: 114px;
    top: 0px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;

    text-align: right;
    letter-spacing: -0.2px;

    color: #707781;
`

const Widget5EventButtonContainer = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 10px;

    position: absolute;
    width: 36px;
    height: 36px;
    left: 23px;
    top: 0px;

    /* light/bg/background-01 */

    background: #FFFFFF;
    /* light/font/font-caption */

    border: 1px solid #707781;
    border-radius: 0px 3px 3px 0px;
`

const Widget5EventButtonContainer1 = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 10px;

    position: absolute;
    width: 36px;
    height: 36px;
    left: 0px;
    top: 0px;

    background: #FFFFFF;

    border: 1px solid #C1C7CD;
    border-radius: 3px 0px 0px 3px;
`

const Widget5EventButton = styled.img`
    width: 5.4px;
    height: 10.8px;
`

const Widget5ButtonW = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 5px;

    width: 52px;
    height: 24px;

    background: rgba(46, 90, 172, 0.05);

    border: 1px solid #2E5AAC;
    border-radius: 12px;
`

const Widget5ButtonTextW = styled.div`
    width: 28px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #2E5AAC;
`

const Widget5ButtonA = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 5px;

    width: 61px;
    height: 24px;

    background: rgba(46, 90, 172, 0.05);

    border: 1px solid #2E5AAC;
    border-radius: 12px;
`

const Widget5ButtonTextA = styled.div`
    width: 37px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #2E5AAC;
`

const Widget5ButtonC = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    gap: 5px;

    width: 61px;
    height: 24px;

    background: rgba(218, 20, 20, 0.05);

    border: 1px solid #DA1414;
    border-radius: 12px;
`

const Widget5ButtonTextC = styled.div`
    width: 37px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    text-align: center;

    color: #DA1414;
`