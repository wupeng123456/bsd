import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './app/Home'
import About from './app/About'

class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <ul>
         <li><Link to="/">首页</Link></li>
         <li><Link to="/about">关于</Link></li>
         <li><Link to="/topices">主题列表</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topices" component={Topics} />
       </div>
      </Router>
    );
  }
}

const Topics = ({ match }) => (
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用react熏染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          属性 v. 状态
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/wUPENG`}>
          属性 v. 状态wUPENG
        </Link>
      </li>
    </ul>
    <hr />
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>选择主题</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App;
