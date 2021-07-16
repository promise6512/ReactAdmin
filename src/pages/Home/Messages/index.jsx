import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Details from './Details'
export default class Messages extends Component {
    state = {
        megArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }
    replace = (id,title)=> {
        return ()=>{
           // this.props.history.replace(`/home/messages/details?id=${id}&title=${title}`)
           this.props.history.replace('/home/messages/details',{id:id,title:title})
        }
    }
    push = (id,title) => {
        return () => {
           // this.props.history.push(`/home/messages/details?id=${id}&title=${title}`)
           this.props.history.push('/home/messages/details',{id,title})
        }
    }
    render() {
        console.log('meg',this.props)
        const {megArr} = this.state
        return (
            <div>
                <ul>
                    {
                        megArr.map((element) => {
                            return (
                                <li key={element.id}>
                                    {/* <Link to={`/home/messages/details/${element.id}/${element.title}`}>{element.title}</Link>&nbsp;&nbsp; */}
                                    {/* <Link to={`/home/messages/details?id=${element.id}&title=${element.title}`}>{element.title}</Link>&nbsp;&nbsp; */}
                                    <Link to={{pathname:'/home/messages/details',state:{id:element.id,title:element.title}}}>{element.title}</Link>&nbsp;&nbsp;
                                    <button onClick={this.replace(element.id,element.title)}>replace</button>&nbsp;
                                    <button onClick={this.push(element.id,element.title)}>push</button>
                                </li>
                            )
                        })
                    }

                </ul>
                {/* <Route path='/home/messages/details/:id/:title' component={Details}></Route> */}
                <Route path='/home/messages/details' component={Details}></Route>
            </div>

        )
    }
}

