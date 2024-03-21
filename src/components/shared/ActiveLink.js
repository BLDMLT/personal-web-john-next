import React, { Children } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavLink } from 'reactstrap';

const ActiveLink = ({children, ...props}) => {
  const router = useRouter();
  const child = Children.only(children);
  let className = child.props.className || '';

  if (router.asPath === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`
  }

  delete props.activeClassName;

  return <NavLink {...props}>{React.cloneElement(child, {className})}</NavLink>
}

export default ActiveLink;
