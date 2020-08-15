import React,{useState} from 'react';

/**
 * initial  初始数据
 * pageMax      页面最高显示数据  一页的数据
 * delete add   每次删除数据和增加数据应该相同
 * data 所有数据
 * @param props
 * @returns {*}
 * @constructor
 */
function Pagination(props) {
  const [dataSource, setDataSource] = useState([]);
  const {data,pageMax,initial} = props;
  (function f (data,pageMax,initial) {
    if (data.length <= pageMax) {
      setDataSource(data);
    } else {
      if (initial <= pageMax) {
      }
    }
  }(data,pageMax,initial))
  
  return (
    <div>
      <ul>
        {dataSource.map(ele => (
          <li>{ele}</li>
        ))}
      </ul>
      <button>上一页</button>
      <button>下一页</button>
    </div>
  );
}

export default Pagination;
