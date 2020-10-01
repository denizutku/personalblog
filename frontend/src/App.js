import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Posts from "./Posts";
import PostDetail from "./components/PostDetail"
import AddPost from "./components/AddPost"

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" render={(props) => <Homepage contacts={this.state.contacts} {...props} /> } />
                <Route path="/aboutme" component={Aboutme}/>
                <Route exact path="/posts" render={(props) => <Posts contacts={this.state.contacts} {...props} /> } />
                <Route path="/posts/:id" component={PostDetail}/>
                <Route path="/addpost" component={AddPost}/>
            </Router>
        )
    }

state = {
    contacts: []
};

    componentDidMount() {
        fetch('http://localhost:8080/posts')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;
