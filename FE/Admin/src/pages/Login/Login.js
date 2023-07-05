import Wrapper from '../../components/Wrapper';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '../../components/Button';
import { DashBoardIcon, ArrowBottomIcon, avatar } from '../../components/ImageList';

const cx = classNames.bind(styles);

function Login() {
    return ( 
        <Wrapper className={cx('login')}>
            <h1>Login</h1>
            <Button 
                type="button" 
                srcLeft={avatar} 
                alt="Avatar-error" 
                content="luanvuong" 
                srcRight={<ArrowBottomIcon />}
            />
            <Button 
                srcLeft={<DashBoardIcon />}
                content="Dashboards" 
                comp="div"
                srcRight={<ArrowBottomIcon />}
            />
            <Button 
                type="button" 
                content="Login" 
                srcRight={<ArrowBottomIcon />}
            />

        </Wrapper>
    );
}

export default Login;