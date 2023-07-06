import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { BagIcon, SearchIcon } from 'components/ImageList'
import Card from "components/Card";
import PieeChart from "components/PieeChart";
import Input from "components/Input";
import Button from "components/Button";
import Table from 'components/Table';

const cx = classNames.bind(styles);

function Products() {
    const card = {
        label: 'Total Products',
        icon: <BagIcon />,
        color: 'red',
        value: 77,
        unit: false,
    };

    const dataPieChart = [
        { label: 'Digital', percent: 42, color: '#EF4444' },
        { label: 'Dress', percent: 21, color: '#22C55E' },
        { label: 'Hoodie', percent: 15, color: '#0EA5E9' },
        { label: 'Hat', percent: 12, color:'#7DD3FC' },
        { label: 'Accesories', percent: 10, color:'#FCA5A5'},
    ];
    
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
          label: 'Dessert (100g serving)',
        },
        {
          id: 'calories',
          numeric: 'center',
          disablePadding: false,
          label: 'Calories',
        },
        {
          id: 'fat',
          numeric: 'center',
          disablePadding: false,
          label: 'Fat (g)',
        },
        {
          id: 'carbs',
          numeric: 'center',
          disablePadding: false,
          label: 'Carbs (g)',
        },
        {
          id: 'protein',
          numeric: 'center',
          disablePadding: false,
          label: 'Protein (g)',
        },
        {
          id: 'action',
          numeric: 'center',
          disablePadding: false,
          label: 'Action',
        },
    ];

    // Create keys data
    function createData(id, name, calories, fat, carbs, protein) {
        return {
            id,
            name,
            calories,
            fat,
            carbs,
            protein,
        };
    }
    // Create values data
    const rows = [
        createData(1,'Cupcake', 305, 3.7, 67, 4.3),
        createData(2,'Donut', 452, 25.0, 51, 4.9),
        createData(3,'Eclair', 262, 16.0, 24, 6.0),
        createData(4,'Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
        createData(6,'Honeycomb', 408, 3.2, 87, 6.5),
        createData(7,'Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData(8,'Jelly Bean', 375, 0.0, 94, 0.0),
        createData(9,'KitKat', 518, 26.0, 65, 7.0),
        createData(10,'Lollipop', 392, 0.2, 98, 0.0),
        createData(11,'Marshmallow', 318, 0, 81, 2.0),
        createData(12,'Nougat', 360, 19.0, 9, 37.0),
        createData(13,'Oreo', 437, 18.0, 63, 4.0),
    ];

    const handleEdit = (id) => {
        console.log(id)
    }
    const handleDelete = (id) => {
        console.log(id)
    }
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
                <h3>Products</h3>
                <div className={cx('content__btn')}>
                    <Input className={cx('content__btn-search')} label="Press / to search" icon={<SearchIcon />} />
                    <Button className={cx('content__btn-add')} content="Create Product" />
                </div>
                <div className={cx('content__table')}>
                    <Table 
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

export default Products;