import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { BagIcon, SearchIcon } from 'components/ImageList'
import Card from "components/Card";
import PieeChart from "components/PieeChart";
import Input from "components/Input";
import Button from "components/Button";

const cx = classNames.bind(styles);

function Products() {
    const card = {
        label: 'Total Products',
        icon: <BagIcon />,
        color: 'red',
        value: 77,
        unit: false,
    };
    const data = [
        { label: 'Digital', percent: 42, color: '#EF4444' },
        { label: 'Dress', percent: 21, color: '#22C55E' },
        { label: 'Hoodie', percent: 15, color: '#0EA5E9' },
        { label: 'Hat', percent: 12, color:'#7DD3FC' },
        { label: 'Accesories', percent: 10, color:'#FCA5A5'},
    ];
    const chart = (
        <>
            <div className={cx('tooltip')}>
                { data.map((category, index) => (
                    <div className={cx('tooltip__item')} key={index}>
                        <div style={{backgroundColor: category.color}} className={cx('tooltip__item-color')}></div>
                        <span className={cx('tooltip__item-label')}> {category.label} ({category.percent}%)</span>
                    </div> 
                )) }   
            </div>
            <PieeChart className={cx('pie-chart')} db={data} />
        </>
    )
    return (
        <Wrapper className={cx('products')}>
            <div className={cx('statistics')}>
                <Card 
                    className={cx('card')}
                    label={card.label}
                    icon={card.icon}
                    color={card.color}
                    value={card.value}
                    unit={card.unit}
                />
                <Card 
                    label="Product Category Ratio"
                    selector={<p>(235 total)</p>}
                    contentCenter={chart}
                />
            </div>
            <div className={cx('content')}>
                <h3>Products</h3>
                <div className={cx('content__btn')}>
                    <Input className={cx('content__btn-search')} label="Press / to search" icon={<SearchIcon />} />
                    <Button className={cx('content__btn-add')} content="Create Product" />
                </div>
                <div className={cx('content__table')}>

                </div>
            </div>
        </Wrapper>
    )
}

export default Products;