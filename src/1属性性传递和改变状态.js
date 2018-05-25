import  React from 'react';
import  ReactDom  from 'react-dom';
let a={
  name:"ddd",
  age:0
};

/*class B extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return (
      <div>
        {"B"+this.props.a}
      </div>
    )
  }
}*/

class A extends React.Component {
  constructor(props) {
    super();
    this.state = {a:1,b:"hello"}
  }

  a=()=>{
    this.setState((prevState)=>({a:prevState.a+2}))
  }

  render() {
    //这里解构
    let {name,age} =this.props;
    return (<div>
        {this.state.a}
        <button onClick={this.a}>+</button>
        {/*<B a={this.state.a}/>*/}
        {name}{age}
      </div>
    )
  }
}



//直接拿对象的属性 就把｛｝ 里的展开直接放到组件上就可以了
// 再在render中拿解构一下 let｛name,age｝=this.props
ReactDom.render(<A {...a}/>,document.querySelector('.app'));