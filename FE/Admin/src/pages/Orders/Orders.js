import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './Orders.module.scss'
import Card from "components/Card";
import PieeChart from "components/PieeChart";
import { Money } from 'components/ImageList'
import Table from 'components/Table';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from "react";

const cx = classNames.bind(styles);

const Orders = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productList);
    const orderStatistics = useSelector(state => state.orders.orderStatistics);

    useEffect(() => {
        dispatch.orders.statisticOrderByMonth();
    }, [])

    const totalRevenue = () => {
        let sum = 0;
        orderStatistics && orderStatistics.map(order => {
            sum += order.totalpricemonth;
        })
        return sum;
    }

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const card = {
        label: 'Total Products',
        icon: <Money />,
        color: 'red',
        value: USDollar.format(totalRevenue()),
        unit: false,
    };
    // data pieChart
    const dataPieChart = [
        { label: 'Digital', percent: 42, color: '#EF4444' },
        { label: 'Dress', percent: 21, color: '#22C55E' },
        { label: 'Hoodie', percent: 15, color: '#0EA5E9' },
        { label: 'Hat', percent: 12, color:'#7DD3FC' },
        { label: 'Accesories', percent: 10, color:'#FCA5A5'},
    ];
    
    // content chart
    const chart = (
        <>
            <div className={cx('tooltip')}>
                { dataPieChart.map((category, index) => (
                    <div className={cx('tooltip__item')} key={index}>
                        <div style={{backgroundColor: category.color}} className={cx('tooltip__item-color')}></div>
                        <span className={cx('tooltip__item-label')}> {category.label} ({category.percent}%)</span>
                    </div> 
                )) }   
            </div>
            <PieeChart className={cx('pie-chart')} db={dataPieChart} />
        </>
    )

    // Create head cell
    const headCells = [
        {
            id: 'id',
            numeric: 'center',
            disablePadding: true,
            label: 'ID',
        },
        {
            id: 'name',
            numeric: 'center',
            disablePadding: true,
            label: 'Name',
        },
        {
            id: 'brand',
            numeric: 'center',
            disablePadding: false,
            label: 'Brand',
        },
        {
            id: 'category',
            numeric: 'center',
            disablePadding: false,
            label: 'Category',
        },
        {
            id: 'action',
            numeric: 'center',
            disablePadding: false,
            label: 'Action',
        },
    ];

    // Create keys data
    function createData(id, name, brand, category) {
        return {
            id,
            name,
            brand,
            category,
        };
    }
    // Create values data
    const rows = products?.map(pd => 
        createData(pd.productId, pd.productName, pd.brand, pd.category_name)
    );

    // Handle edit product
    const handleEdit = (id) => {
        console.log(id)
    }

    // Handle delete product
    const handleDelete = useCallback((id) => {
        dispatch.products.deleteProduct(id);
    }, [dispatch.products])

    // Handle selectedAll product
    const handleSelectedAll = (arr) => {
        console.log(arr)
    }

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
                <h3>Orders</h3>
                <div className={cx('content__table')}>
                    <Table 
                        key={1}
                        headCells={headCells}
                        rows={rows}
                        deleteById={handleDelete} 
                        EditById={handleEdit} 
                        selectedAll={handleSelectedAll}
                    />
                </div>
            </div>
        </Wrapper>
    )
}

export default Orders;