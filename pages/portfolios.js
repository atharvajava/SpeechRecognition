import React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import axios from "axios"
import {Link} from '../routes'
import BasePage from "../components/shared/BasePage"

class Portfolios extends React.Component {

    static async getInitialProps(){
        let posts= []
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            posts= response.data
        } catch (error) {
            console.log(error)
        }

        return {posts : posts.splice(0,10)}
    }

    renderPosts(posts) {
        return posts.map((post,index)=>{
            return (
                <li key={index}>
                     <Link route={`/portfoliodetail/${post.id}`} >
                        <a >{post.title}</a>
                    </Link>
                </li>
            )
        })
    }

    render(){
        const {posts} = this.props
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Portfolios Page class</h1>
                    <ul>
                        {this.renderPosts(posts)}
                    </ul>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default Portfolios;