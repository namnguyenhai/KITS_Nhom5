import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './ColumnChart.module.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";
import Button from "components/Button";
import { ArrowBottomIcon } from "components/ImageList";

const cx = classNames.bind(styles);

function ColumnChart() {
    const [data, setData] = useState([]); 

    useEffect(() => {
        setData([
                {
                    name: 'Jan',
                    total: 0,                   
                    quantity: 30,
                },
                {
                    name: 'Feb',
                    total: 40,
                    quantity: 50,
                },
                {
                    name: 'Mar',
                    total: 40,
                    quantity: 50,
                },
                {
                    name: 'Apr',
                    total: 60,
                    quantity: 70,
                },
                {
                    name: 'May',
                    total: 30,
                    quantity: 40,
                },
                {
                    name: 'Jun',
                    total: 80,
                    quantity: 90,
                },
                {
                    name: 'Jul',
                    total: 45,
                    quantity: 55,
                },
                {
                    name: 'Aug',
                    total: 35,
                    quantity: 45,
                },
                {
                    name: 'Sep',
                    total: 25,
                    quantity: 35,
                },
                {
                    name: 'Oct',
                    total: 35,
                    quantity: 50,
                },
                {
                    name: 'Nov',
                    total: 20,
                    quantity: 30,
                },
                {
                    name: 'Dec',
                    total: 10,
                    quantity: 20,
                },
            ]);
    }, []);

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Wrapper className={cx('column-chart')}>
            <div className={cx('total-revenue')}>
                <div className={cx('total-revenue__content')}>
                    <h3>Total Revenue</h3>
                    <h2> {USDollar.format(980273)} </h2>
                </div>
                <div className={cx('total-revenue__filter')}>
                    <Button 
                        content="This year"
                        srcRight={<ArrowBottomIcon />}
                    />
                </div>
            </div>
            <ResponsiveContainer width="99%" aspect={3}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barGap={0}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="name" 
                        fontSize={20}
                        fontWeight={500}
                        color='#A7A7A7'
                        height={50}
                    />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar barSize={30} dataKey="total" radius={[20, 20, 0, 0]} fill="#94A3B8" background={{ fill: '#eee' }} />
                    <Bar barSize={30} dataKey="quantity" radius={[20, 20, 0, 0]} fill="#EB5757" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

export default ColumnChart;