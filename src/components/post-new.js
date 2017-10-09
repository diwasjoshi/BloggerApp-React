import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';


class PostNew extends Component{

    renderField(field){
        return(
            <div>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }
    render(){
        return(
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

function validate(values){
    const errors = {};
    if(!values.title)
        errors.title = "Enter a title";
    if(!values.categories)
        errors.categories = "Enter some categories";
    if(!values.content)
        errors.content = "Enter some content please";

    return error;
}
export default reduxForm({
    validate,
    form: 'PostNewForm'
})(PostNew);
/*function mapStateToProps(state){
    return {posts: state.posts};
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);*/
