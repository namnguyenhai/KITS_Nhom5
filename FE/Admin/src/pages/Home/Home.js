import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { BarIcon, CartIcon, BagIcon, EmojiiIcon } from 'components/ImageList'
import Card from "components/Card";
import ColumnChart from "components/ColumnChart";
const cx = classNames.bind(styles);

function Home() {
    const cards = [
        {
            label: 'Total Visits',
            icon: <BarIcon />,
            color: 'red',
            value: 7.7,
            unit: 'M',
        },
        {
            label: 'Total Sales',
            icon: <CartIcon />,
            color: 'primary',
            value: 777,
            unit: 'k',
        },
        {
            label: 'Total Products',
            icon: <BagIcon />,
            color: 'green',
            value: 77,
            unit: false,
        },
        {
            label: 'Total Customers',
            icon: <EmojiiIcon />,
            color: 'gray',
            value: 7.7,
            unit: 'k',
        },
    ];

    const cardList = cards.map((card, index) => (
        <Card 
            key={index}
            label={card.label}
            icon={card.icon}
            value={card.value}
            unit={card.unit}
            color={card.color}
        />
    ));

    const data = [
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
    ]

    return ( 
        <Wrapper className={cx('home')}>
            <div className={cx('cards')}>
                { cardList }
            </div>
            
            <ColumnChart db={data} />
        </Wrapper>
    );
}

export default Home;