import React, { useEffect, useState } from 'react';

export default () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/api/studentAll', { method: 'GET' }).then(
      async res => {
        const result = await res.json();
        setStudent(result.datas);
      },
    );
  }, []);
  return student;
};
