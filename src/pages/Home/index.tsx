import React, { ReactElement, useEffect, useRef } from 'react';
import styles from './index.less';
import * as echarts from 'echarts';

const lineChartOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
        },
    ],
};
const pieChartOption = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
const barChartOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
        },
    ],
};
interface Props {}

export default function index({}: Props): ReactElement {
    const lineChartRef = useRef<HTMLDivElement>(null);
    const pieChartRef = useRef<HTMLDivElement>(null);
    const barChartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myLineChart = echarts.init(
            lineChartRef.current as HTMLDivElement,
        );
        myLineChart.setOption(lineChartOption);
        const myPieChart = echarts.init(pieChartRef.current as HTMLDivElement);
        myPieChart.setOption(pieChartOption);
        const myBarChart = echarts.init(barChartRef.current as HTMLDivElement);
        myBarChart.setOption(barChartOption);
    }, []);
    return (
        <>
            <div className={styles.container}>
                <div
                    ref={lineChartRef}
                    style={{ width: 500, height: 400 }}
                ></div>
                <div
                    ref={pieChartRef}
                    style={{ width: 500, height: 400 }}
                ></div>
            </div>
            <div className={styles.container}>
                <div
                    ref={barChartRef}
                    style={{ width: 900, height: 300 }}
                ></div>
            </div>
        </>
    );
}
