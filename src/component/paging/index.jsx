import React from 'react';
import styles from './index.less';

/**
 * 属性
 * 1.current 初始页面
 * 2.total 总数据量
 * 3.limit 每页显示多少数量
 * 4.panelNumber 数字页面最多显示多少个
 * 5.onPageChange 点击页面的事件
 * @param props
 * @returns {*}
 * @constructor
 */

export default function Pager(props) {
  const pageTotal = pageNumber(props);
  const min = minNumber(props,pageTotal);
  const max = maxNumber(min,pageTotal,props);
  let member = [];
  for (let i = min; i <= max; i++) {
    member.push(
      <span key={i}
            className={i === props.current ? `${styles.item} ${styles.active}` : `${styles.item}`}
            onClick={() => toPage(i,props)}
      >{i}</span>)
  }
  return(
    <div>
      <span className={props.current === 1 ? `${styles.disabled}` : `${styles.item}`} onClick={() => toPage(1,props)}>首页</span>
      <span className={props.current === 1 ? `${styles.disabled}` : `${styles.item}`}
        onClick={() => toPage(props.current - 1 < 1 ? 1 : props.current - 1,props)}
      >上一页</span>
      {member}
      <span className={props.current === pageTotal ? `${styles.disabled}` : `${styles.item}`}
        onClick={() => toPage(props.current + 1 > pageTotal ? pageTotal : props.current + 1,props)}
      >下一页</span>
      <span className={props.current === pageTotal ? `${styles.disabled}` : `${styles.item}`} onClick={() => toPage(pageTotal,props)}>尾页</span>
      <span className={styles.item}>{props.current}</span>/
      <span className={styles.item}>{pageTotal}</span>
    </div>
  )
}

/**
 * 计算总页数
 * @param props
 * @returns {number}
 */

function pageNumber(props) {
  return Math.ceil(props.total / props.limit);
}

/**
 * 计算最小页树
 * @param props
 * @returns {number}
 */

function minNumber(props,pageTotal){
  let min = props.current - Math.floor(props.panelNumber / 2);
  if(min < 1){
    min = 1;
  }else if(min > pageTotal - 4){
     min = pageTotal - 4;
  }
  return min;
}

/**
 * 计算最大页面
 * @param min
 * @param props
 */

function maxNumber(min,pageTotal,props) {
  let max = min + props.panelNumber - 1;
  if(max > pageTotal){
    max = pageTotal;
  }
  return max;
}

/**
 * 点击页数页面跳转
 * @param target
 * @param props
 */

function toPage(target,props) {
  if(props.current === target){
    return ;
  }
  props.onPageChange && props.onPageChange(target);
}
