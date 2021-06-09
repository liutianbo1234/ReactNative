import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import HomeDetails from './component/HomeDetails';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickText: "开始点击按钮",
      count: 1,
      detailContent: true,
      isLoading: true
    }
  }

  componentWillMount() {
    console.log("componentWillMount1111");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.state.detailContent,'detailContent');
    if (this.state.count !== nextState.count) {
      console.log("shouldComponentUpdate1111---组件需要更新");
      return true;
    }
    return false;
  }

  componentWillUpdate(){
    console.log("componentWillUpdate1111---组件将要更新");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate1111---组件更新完毕");
  }

  componentDidMount() {
    console.log("componentDidMount1111");
    fetch('http://192.168.9.4/mock/607/waybill/query', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageSize: 10,
        currentPage:1
      })
    }).then((res)=>{
      console.log(res,999999)
    }).catch((error) => {
      console.error(error);
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount1111");
  }

  clickButton(){
    const { count } = this.state;
    this.setState({
      clickText: "我点击了按钮",
      count: count + 1,
      detailContent: false
    })
  }

  render() {
    console.log("render1111");
    return (
      <View style={styles.container}>
        <Text>欢迎来到首页</Text>
        <TouchableOpacity

        >
          <Text>跳转到公告页</Text>
        </TouchableOpacity>
        <Text style={{color: 'blue', fontSize: 40}}>{this.state.count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.clickButton()}
        >
          <Text>{this.state.clickText}</Text>
        </TouchableOpacity>
        <HomeDetails detailContent={this.state.detailContent}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
