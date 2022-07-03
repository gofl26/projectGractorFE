import styled from "styled-components";
import ECharts from "echarts-for-react";

const option = {
    title: {
        text: '94개소',
        left: 'center',
        top: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 80, name: '빗물받이' },
                { value: 9, name: '스마트폴' },
                { value: 5, name: '자가망' },
            ]
        }
    ]
};

const Widget1 = () => {

    return(
        <Widget1Container>
            <Widget1TitleContainer>
                <Widget1Title>서비스 운영현황</Widget1Title>
            </Widget1TitleContainer>
            <WidgetGraph>
                <ECharts option={option} opts={{width:"250px",height:"250px"}}/>
            </WidgetGraph>
        </Widget1Container>
    )
}

export default Widget1

const Widget1Container = styled.div`
    position: absolute;
    width: 270px;
    height: 330px;
    left: 70px;
    top: 85px;
    z-index:2;

    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const Widget1TitleContainer = styled.div`
    position: absolute;
    height: 24px;
    left: 20px;
    right: 20px;
    top: 20px;

    display: flex;
    justify-content: flex-start;

    border-bottom: 2px solid #C1C7CD;
`

const Widget1Title = styled.div`
    position: absolute;
    width: 105px;
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

const WidgetGraph = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    left: 10px;
    top: 60px;
`
                
