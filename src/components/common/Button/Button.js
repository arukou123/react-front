import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

//전달받은 className, onClick 등 값들이 ...rest 안에 들어있습니다.
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
  children, to, onClick, disabled, theme = 'default',
}) => {
  //to 값이 존재하면 Link, 없으면 div를 사용. disabled 상태여도 div를 사용
  const Element = (to && !disabled) ? Link : Div ;

  //비활성화면 OnClick은 실행되지 않음
  return (
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}



export default Button;