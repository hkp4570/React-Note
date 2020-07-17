import React, { useEffect } from 'react';

type FuncType = {
  (): void;
};
/* 自定义定时器hook */
export default (func: FuncType, duration: number) => {
  useEffect(() => {
    const timer = setInterval(func, duration);
    return () => {
      clearInterval(timer);
    };
  }, []);
};
