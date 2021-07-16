import React, { Component } from 'react'
import { Link,Route,Redirect,Switch } from 'react-router-dom'
import Messages from './Messages'
import News from './News'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <Link to='/home/messages'>messages</Link>
                        </li>
                        <li>
                            <Link to='/home/news'>news</Link>
                        </li>
                    </ul>
                    <Switch>
                    <Route path='/home/messages' component={Messages}></Route>
                    <Route path='/home/news' component={News}></Route>
                    <Redirect to='/home/messages'></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
