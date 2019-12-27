import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { A, B } from '@/components/HOC/Common';
import WithLog from '@/components/HOC/withLog';
import WithLogin from '@/components/HOC/withLogin';
const ALog = WithLog(WithLogin(A));
const BLog = WithLog(WithLogin(B));

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {

  };

  componentWillUnmount() {

  };

  render() {
    return (
      <Card>
        <ALog a={1} isLogin />
        <BLog b={1} isLogin />
      </Card>
    );
  }
}
