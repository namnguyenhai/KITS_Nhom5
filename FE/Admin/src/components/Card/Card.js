import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import Image from "components/Image";

const cx = classNames.bind(styles);

function Card({ className, label, icon, value, unit, color, ...props }) {
    // Label đặt tên cho tiêu đề, icon là 1 component SVG, value là giá trị của card 
    // unit là đơn vị, color là màu nền của icon
    return ( 
        <Wrapper className={cx('card', className)} {...props}>
            <p className={cx('label')}> {label} </p>
            <div className={cx('content')}>
                <div className={cx('content__icon', color)}>
                    <Image comp={icon} />
                </div>
                <span className={cx('value')}> {value}{unit} </span>
            </div>
        </Wrapper>
    );
}

export default Card;