import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class AddressCas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
      const { iconPre, name, size, color, style } = this.props
      const pre = {
        name,
        size,
        color: color ? color : '#2db7f5',
        style,
      }
      switch (iconPre) {
          case 'MaterialIcons':
          return <MaterialIcons {...pre} />
          case 'Entypo':
          return <Entypo {...pre} />
          case 'EvilIcons':
          return <EvilIcons {...pre} />
          case 'Feather':
          return <Feather {...pre} />
          case 'MaterialCommunityIcons':
          return <MaterialCommunityIcons {...pre} />
          case 'Octicons':
          return <Octicons {...pre} />
          case 'SimpleLineIcons':
          return <SimpleLineIcons {...pre} />
          default:
          return null
      }
  }
}