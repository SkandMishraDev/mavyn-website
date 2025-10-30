import React from 'react';
import { useRouter } from '@/contexts/RouterContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // Standard link behavior checks
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !props.target &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={`#${href}`} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
