import React, {Component} from 'react';

// 错误边界只能是class组件
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state={
            error: null,
            errorInfo: null,
        }
    }
    static getDerivedStateFromError(){
        return { hasError: true } // 不晓得啥用
    }
    componentDidCatch(error, errorInfo) {
        // 打印错误信息
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if(this.state.errorInfo){
            return <div>
                <h2>错误边界</h2>
                <details>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;