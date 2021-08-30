import React, { ReactElement, useEffect, useRef } from 'react';
import { Card, Statistic, Descriptions } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
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
                <Card className={styles.item}>
                    <Statistic title="Active Users" value={112893} />
                </Card>
                <Card className={styles.item}>
                    <Statistic
                        title="Account Balance (CNY)"
                        value={112893}
                        precision={2}
                    />
                </Card>
                <Card className={styles.item}>
                    <Statistic
                        title="Feedback"
                        value={1128}
                        prefix={<LikeOutlined />}
                    />
                </Card>
                ,
                <Card className={styles.item}>
                    <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Card>
            </div>
            <div className={styles.container}>
                <Card className={styles.item}>
                    <div ref={lineChartRef} className={styles.chart}></div>
                </Card>

                <Card className={styles.item}>
                    <div ref={pieChartRef} className={styles.chart}></div>
                </Card>
                <Card className={styles.item}>
                    <div ref={barChartRef} className={styles.chart}></div>
                </Card>
            </div>
            <div className={styles.container}>
                <Card className={styles.item}>
                    <Descriptions title="User Info">
                        <Descriptions.Item label="UserName">
                            Zhou Maomao
                        </Descriptions.Item>
                        <Descriptions.Item label="Telephone">
                            1810000000
                        </Descriptions.Item>
                        <Descriptions.Item label="Live">
                            Hangzhou, Zhejiang
                        </Descriptions.Item>
                        <Descriptions.Item label="Remark">
                            empty
                        </Descriptions.Item>
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou,
                            Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        </>
    );
}
