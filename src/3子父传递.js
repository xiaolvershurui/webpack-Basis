import  React from 'react';
import  ReactDom  from 'react-dom';
class B extends React.Component{
  constructor(props){
    super()
  }
  hedClickSun=()=>{
    this.props.hedClick()
  }
  render(){
    return (
      <div>
        {/*方法直接传给了b 属性 b属性就是父组件中的hedClick()这个方法*/}
        <button onClick={()=>this.props.b(1)}>+</button>
      </div>
    )
  }
}
/*B子--> A父*/
class A extends React.Component {
  constructor() {
    super();
    this.state = {a:1,b:"hello"}
  }

  hedClick=(c)=>{
    this.setState({a:this.state.a+c})
  }

  render() {

    return (<div>
        {this.state.a}
        {/*父组件把自己的方法放到子组件的属性上*/}
        <B  b={this.hedClick}/>
      </div>
    )
  }
}


ReactDom.render(<A/>,document.querySelector('.app'));