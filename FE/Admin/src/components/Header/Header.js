import Wrapper from "components/Wrapper";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Wrapper className={cx('header')}>
            Header
        </Wrapper>
    );
}

export default Header;