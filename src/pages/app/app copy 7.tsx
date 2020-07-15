// import React, { Component } from 'react'

// /**
//  * 对比更新
//  */
// export default class App extends Component {
//   state = {
//     visible: false
//   }
//   render() {
//     // if (this.state.visible) {
//     //     return <div>
//     //         <h1>标题</h1>
//     //         <button onClick={() => {
//     //             this.setState({
//     //                 visible: !this.state.visible
//     //             })
//     //         }}>显示/隐藏</button>
//     //     </div>;
//     // }
//     const h1 = this.state.visible ? <h1>标题</h1> : null;
//     return (
//       <div>
//         {h1}
//         <button onClick={() => {
//           this.setState({
//             visible: !this.state.visible
//           })
//         }}>显示/隐藏</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';

// class app extends Component {
//   state = {
//     visible:false
//   }
//   render() {
//     return (
//       <div>
//         {
//           this.state.visible ? <h1>标题</h1> : null
//         }
//         <button onClick={() => this.setState({ visible:!this.state.visible })}>显示/隐藏</button>
//       </div>
//     );
//   }
// }

// export default app;

import React, { Component } from 'react';

class app extends Component {
  state = {
    visible: true,
  };
  render() {
    {
      if (this.state.visible) {
        return (
          <div>
            <h1>标题</h1>
            <button
              onClick={() => {
                this.setState({
                  visible: !this.state.visible,
                });
              }}
            >
              显示/隐藏
            </button>
          </div>
        );
      } else {
        return <div>xxx</div>;
      }
    }
  }
}

export default app;
