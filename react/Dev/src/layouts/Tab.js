import React from 'react'
import PropsType from 'prop-types'
import { Tabs } from 'antd'
import router from 'umi/router'
import { connect } from 'dva'
// import { Link } from 'react-router-dom'
import Error from '../pages/404'
import styles from './app.less'
const TabPane = Tabs.TabPane

@connect(state => ({
    app: state.app,
}))
class Tab extends React.Component {

    constructor (props) {
        super(props)
        this.newTabIndex = 0
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
          { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ]
        this.state = {
          activeKey: '',
          panes,
          tabList: [],
        }
      }
    componentDidMount () {
        const { tabList } = this.props
        this.setState({
            tabList,
            activeKey: tabList[0].key,
        })
        router.push(tabList[0].route)
    }
    UNSAFE_componentWillReceiveProps (nextProps) {
        const { location, tabList } = nextProps
        const activeKey = tabList.filter((item)=>{return(item.route === location.pathname)})
        console.log('456', activeKey)
        if (activeKey.length === 1) {
            this.setState({
                activeKey: activeKey[0].key,
            })
        }
    }
      onChange = (activeKey) => {
        const { tabList } = this.props
        const route = tabList.filter((item)=>{return(item.name === activeKey)})[0].route
        router.push(route)
        this.setState({ activeKey })
      }
      onEdit = (targetKey) => {
        const { tabList } = this.state
        for (let i = 0; i < tabList.length; i++) {
            if (tabList[i].key === targetKey) {
                tabList.splice(i, 1)
                this.setState({
                    tabList,
                }, ()=>{
                    router.push(tabList[tabList.length - 1].route)
                })
                return
            }
        }
      }
      remove = (targetKey) => {
        let activeKey = this.state.activeKey
        let lastIndex
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1
          }
        })
        const panes = this.state.panes.filter(pane => pane.key !== targetKey)
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key
        }
        this.setState({ panes, activeKey })
      }
      render () {
        const { children, hasPermission } = this.props 
        return (
          <div>
            <Tabs
              hideAdd
              className={styles.tabs}
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              size="small"
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.tabList.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{hasPermission ? children : <Error />}</TabPane>)}
            </Tabs>
          </div>
        )
      }
}
Tabs.propsType = {
    children: PropsType.object,
    hasPermission: PropsType.Boolean,
    location: PropsType.Object,
    menu: PropsType.Array,
}
export default Tab