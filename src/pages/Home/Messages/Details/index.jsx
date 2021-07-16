import React, { Component } from 'react'
import qs from 'querystring'

export default class Details extends Component {
    state = {
        detialContent:[
            {id:'01',content:'张扬好可爱'},
            {id:'02',content:'张扬好坏坏'},
            {id:'03',content:'张扬恶心心'}
        ]
    }
    render() {
        console.log(this.props)
        //const {id,title} = this.props.match.params
       // const {id,title} = qs.parse(this.props.location.search.slice(1))
        const {id,title} = this.props.location.state
        const {detialContent} = this.state
        const content = detialContent.find((element)=>element.id===id)||{}
        console.log(id,title,content)
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{content.content}</li>
            </ul>
        )
    }
}
