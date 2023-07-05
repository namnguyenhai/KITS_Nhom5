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

    const cardList = cards.map(card => (
        <Card 
        label={card.label}
        icon={card.icon}
        value={card.value}
        unit={card.unit}
        color={card.color}
        />
    ));
    return ( 
        <Wrapper className={cx('home')}>
            <div className={cx('cards')}>
                { cardList }
            </div>
            
            <ColumnChart />
        </Wrapper>
    );
}

export default Home;