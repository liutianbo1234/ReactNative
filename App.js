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
     //POST方式
  //    fetch("http://192.168.9.4/mock/607/waybill/query", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     }).then(function (res) {
  //       console.log("fetch request ", JSON.stringify(res.ok),"2222");
  //      if(res.ok){
  //         res.json().then(function (json) {
  //             console.info(json,9876);
  //             Alert.alert('提示','来自后台数据：名字'+json.name+'、年龄'+json.age,[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
  //         });
  //     }else{
  //           Alert.alert('提示','请求失败',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
  //     }

  // }).catch(function (e) {
  //     console.log("fetch fail");
  //     Alert.alert('提示','系统错误',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
  // });

    const feValue = fetch('http://192.168.9.4/mock/607/waybill/query', {
      method: 'POST',
      mode: "cors",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
          if(res.ok){
            alert('提示');
            return (res.json())
            //  res.json().then( (json)=> {
            //   console.log(json,"21321435")
            //   return json
            //   alert('提示');
            // });
        }else{
              Alert.alert('提示','请求失败');
        }
    }).then((res)=>{
         console.log(res,"哈哈哈就哈哈哈哈哈")
    })
    .catch((error) => {
      console.error(error);
    });

    feValue.then((data)=>{
      console.log(data,"feValuefeValue")
    })
    console.log(feValue,"222")
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
          fetch('http://192.168.9.4/mock/607/waybill/attachment/download?fileId=1').then(response => response.json())//解析为可读数据
             .then(data => console.log(data))//执行结果是 resolve就调用then方法
    .catch(err => console.log("Oh, error", err))//执行结果是 reject就调用catch方法
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
