import React, {Component}  from 'react'

class About extends Component {
    render() {
        // map my array
        const aboutList = this.props.about.map((a, idx)=>{
            return <li key={idx} >{a}</li>
        })
        const skillList = this.props.skills.map((s, idx)=>{
            return <li key={idx} >{s}</li>
        })
        return (
            <div>
            <h1>About</h1>
            <h3>Things I like:</h3>
            <p>{aboutList} </p>
            <h4>Work Skills:</h4>
            <p>{skillList}</p>
            
            </div>
            
        )
    }
}
export default About