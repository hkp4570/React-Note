import React,{useState, useEffect} from 'react';

/**
 * initial  初始数据
 * pageMax  页面最高显示数据  一页的数据
 * data 所有数据
 * @param props
 * @returns {*}
 * @constructor
 */
function Pagination(props) {
  const [dataSource, setDataSource] = useState([]);
  const {data,pageMax = 6,initial = 2} = props;
  const [pageSize,setPageSize] = useState(initial);
  useEffect(() => {
    (async () => {
      if (data.length <= pageMax) {
        setDataSource(data);
      } else {
        if (pageSize <= pageMax) {
          const newData = data.slice(0,pageSize);
          setDataSource(newData);
        } else {
          const newData = data.slice(pageSize - dataSource.length,pageSize);
          setDataSource(newData);
        }
      }
    })()
  },[pageSize])

  const changePage = (direction) => {
    if (direction === 'down') {
      if (pageSize >= data.length) return ;
      setPageSize(pageSize + initial);
    } else {
      if (pageSize <= pageMax) return ;
      setPageSize(pageSize - initial);
    }
  }
  
  return (
    <div>
      {props.render && props.render(dataSource)}
      <button onClick={() => changePage('up')} disabled={pageSize <= pageMax}>上一页</button>
      <button onClick={() => changePage('down')} disabled={pageSize >= data.length}>下一页</button>
    </div>
  );
}

export default Pagination;
