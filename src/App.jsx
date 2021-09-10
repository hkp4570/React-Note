import React from 'react';
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

function App() {
  return (
      <div>
          <h1>一个组件</h1>
          <ErrorBoundary>
              <BuggyCounter/>
          </ErrorBoundary>
          <h1>多个组件</h1>
          <ErrorBoundary>
              <BuggyCounter/>
              <BuggyCounter/>
          </ErrorBoundary>
      </div>
  );
}

export default App;