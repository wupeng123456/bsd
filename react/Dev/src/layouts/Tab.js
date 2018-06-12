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
   
        this.state = {
          activeKey: '',
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
      render () {
        const { children, hasPermission } = this.props 
        return (
          <div >
            <Tabs
              hideAdd
              className={styles.tabs}
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              size="small"
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.tabList.map(pane => <TabPane style={{backgroundColor: 'red', margin: 0}} tab={pane.title} key={pane.key} closable={pane.closable}>{hasPermission ? children : <Error />}</TabPane>)}
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