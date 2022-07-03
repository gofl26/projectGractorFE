import styled from "styled-components";
import React, {useState,useEffect} from "react";
import axios from 'axios'

const Widget4 = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios({
            method:'GET',
            url:'http://121.132.131.93:28001/api/post'
        }).then((res)=>{
            setPosts(res.data.topics);
        })
    },[])
    
    const topics = posts

    function Weather1(props){
        const lis = []
        for(let i =0; i<props.topics.length; i++) {
            let t = props.topics[i];
            lis.push(
                <Wcontainer key={t.id}>
                    <W1Container>
                        <Date>{t.wdate}</Date>
                        <Weather>
                            <Wimg src={t.img}/>
                            <Wtext>{t.wtext}</Wtext>
                        </Weather>
                        <TemContainer>
                            <TemText>최저</TemText>
                            <Tem>{t.tem}</Tem>
                            <Temgiho>&#176;C</Temgiho> 
                        </TemContainer>
                    </W1Container>
                    <W2Container>
                        <Rainpercent>
                            <RainpercentText>{t.RainpercentText}</RainpercentText>
                            <RainNumber>{t.Rainpercent}</RainNumber>
                            <Percent>%</Percent>
                        </Rainpercent>
                        <TemContainer>
                            <TemText>최고</TemText>
                            <Tem2>{t.Tem2}</Tem2>
                            <Temgiho>&#176;C</Temgiho>
                        </TemContainer>
                    </W2Container>
                </Wcontainer>
                
            )
        }
        return <>
            {lis}
        </>
    }

    return(
        <Widget4Container>
            <Widget4TitleContainer>
                <Widget4Title>날씨정보(3일)</Widget4Title>
                <Gisang>기상청</Gisang>
            </Widget4TitleContainer>
            <WeatherContainer>
                <Weather1 topics={topics}></Weather1>
            </WeatherContainer>
        </Widget4Container>
    )
}

export default Widget4

const Widget4Container = styled.div`
    position: absolute;
    width: 320px;
    height: 230px;
    left: 1581px;
    top: 85px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const Widget4TitleContainer = styled.div`
    position: absolute;
    height: 24px;
    left: 20px;
    right: 20px;
    top: 20px;

    display: flex;
    justify-content: flex-start;

    border-bottom: 2px solid #C1C7CD;
`

const Widget4Title = styled.div`
    position: absolute;
    width: 92px;
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

const Gisang = styled.div`
    position: absolute;
    width: 28px;
    height: 16px;
    left: 252px;
    top: 4px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;

    color: #707781;
`

const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    position: absolute;
    width: 270px;
    height: 158px;
    left: 25px;
    top: 54px;
`

const Wcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;

    width: 270px;
    height: 50px;

    border-bottom: 1px dashed #C1C7CD;;
`

const W1Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 19px;

    width: 270px;
    height: 26px;
`

const Date = styled.div`
    width: 61px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #50575E;
`

const Weather = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 80px;
    height: 26px;
`

const Wimg = styled.img`
    width: 26px;
    height: 26px;
`

const Wtext = styled.div`
    width: 55px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: #50575E;
`

const TemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 3px;

    width: 56px;
    height: 24px;
`

const TemText = styled.div`
    width: 22px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #707781;
`

const Tem = styled.div`
    width: 18px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #11AED7;
`

const Temgiho = styled.div`
    width: 10px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #707781;
`

const W2Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 170px;
    height: 24px;
`

const Rainpercent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 3px;

    width: 87px;
    height: 24px;
`

const RainpercentText = styled.div`
    width: 44px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #707781;
`

const RainNumber = styled.div`
    width: 26px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #4D5358;
`

const Percent = styled.div`
    width: 11px;
    height: 16px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #707781;
`

const Tem2 = styled.div`
    width: 18px;
    height: 24px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #EE6F17;
`