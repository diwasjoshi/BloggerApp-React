import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions/index';

class PostShow extends Component{

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render(){
        const { post } = this.props;
        console.log(post);
        if(!post){
            return(
                <div>
                    Loading...
                </div>
            );
        }
        return(
            <div>
                <Link to="/">All Posts</Link>
                <h3>{post.title}</h3>
                <h6>{post.title}</h6>
                <p>{post.title}</p>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return { post: state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
