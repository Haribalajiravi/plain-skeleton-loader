import * as React from 'react';
import './index.css';

const SkeletonLoader = ({ children, isLoading }) => {
  return isLoading ? (
    <>
      {React.Children.map(children, (child) => {
        return (
          <child.type
            {...child.props}
            style={{
              minHeight: '2rem',
              maxWidth: '100%',
              border: '0',
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#e6e6e6 !important',
              animation: 'pulse 1s ease-in-out infinite',
            }}
          />
        );
      })}
    </>
  ) : (
    <>{children}</>
  );
};

export default SkeletonLoader;
