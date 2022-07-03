import styled from "styled-components";
import ECharts from "echarts-for-react";

const option = {
    xAxis: {
        type: 'category',
        data: ['쾌적', '양호', '보통', '불량', '불쾌']
    },
    yAxis: {
        type: 'value'
    },
    backgroundStyle: {
        color: '#F2F4F8'
    },
    series: [
        {
            data: [{
                value: 1,
                itemStyle: {
                  color: '#AE6BE1',
                  opacity: 0.8
                }
              }, {
                value: 4,
                itemStyle: {
                  color: '#AE6BE1',
                  opacity: 0.8
                }
              }, {
                value: 43,
                itemStyle: {
                  color: '#AE6BE1',
                  opacity: 0.8
                }
              }, {
                value: 27,
                itemStyle: {
                  color: '#AE6BE1',
                  opacity: 0.8
                }
              }, {
                value: 5,
                itemStyle: {
                  color: '#AE6BE1',
                  opacity: 0.8
                }
              }],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }
    ]
}

const Widget6 = () => {
    return(
        <Widget6Container>
            <Widget6TitleContainer>
                <Widget6Title>빗물받이 악취 현황</Widget6Title>
            </Widget6TitleContainer>
            <Widget6Graph>
                <Widget6count>개소</Widget6count>
                <Widget6Date>2021.05.14</Widget6Date>
                <ECharts option={option} opts={{width:"250px",height:"250px"}}/>
            </Widget6Graph>
        </Widget6Container>
    )
}

export default Widget6

const Widget6Container = styled.div`
    position: absolute;
    width: 270px;
    height: 270px;
    left: 70px;
    top: 435px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const Widget6TitleContainer = styled.div`
    position: absolute;
    height: 24px;
    left: 20px;
    right: 20px;
    top: 20px;

    display: flex;
    justify-content: flex-start;

    border-bottom: 2px solid #C1C7CD;
`

const Widget6Title = styled.div`
    position: absolute;
    width: 123;
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

const Widget6Graph = styled.div`
    position: absolute;
    width: 231px;
    height: 197px;
    left: 20px;
    top: 20px;
`

const Widget6count = styled.div`
    position: absolute;
    width: 22px;
    height: 14px;
    left: 1px;
    top: 40px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    text-align: center;
    letter-spacing: -0.2px;

    color: #343A3F;
`

const Widget6Date = styled.div`
    position: absolute;
    width: 64px;
    height: 16px;
    left: 167px;
    top: 40px;

    font-family: 'NanumSquare';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #343A3F;
`