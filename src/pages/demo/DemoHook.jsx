/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Card, Pagination } from 'antd';

function DemoHook(props) {
  const [student, setStudent] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  const pagination = {
    current: page,
    defaultPageSize: size,
    total: total,
    position: 'bottom',
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total, range) => `第${range[0]}到第${range[1]}条,共${total}条`,
    onChange(page, pageSize) {
      setPage(page);
    },
    onShowSizeChange(current, size) {
      setSize(size);
    }
  };
  const { dispatch, } = props;
  useEffect(() => {
    (async function () {
      if (dispatch) {
        const resp = await dispatch({
          type: 'student/getStudent',
          payload: {
            page: page,
            size: size
          }
        });
        if (resp) {
          setStudent(resp.findByPage);
          setTotal(resp.cont);
        }
      }
    }())
  }, [page, size]);
  return (
    <Card>
      <ul>
        {
          student.map(item => (
            <li key={item.id}>姓名：{item.name} / 性别：{item.sex === 1 ? '男' : '女'}</li>
          ))
        }
        <Pagination {...pagination} />
      </ul>
    </Card>
  )
}

export default connect()(DemoHook);
