import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { header: '',
  context: '',
date: today };

  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 };

  handleSubmit(event) {
    event.preventDefault();
    const myObj = {
      id: '1',
      name_surname: "Deniz Utku Beydogan",
      username: 'denizutku'
    };
    (async () => {
      const rawResponse = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({header: this.state.header, context: this.state.context,date: this.state.date, user: myObj})
      })
      const content = await rawResponse.json()
      .then(data => {
        console.log('Success:', data);
        alert("Post saved!")
        window.location.href = "/posts";

      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Error! Could not save!")
      });
    
    })();

  }

  render() {
    return (
            <form>
              <div style={{ marginBottom: 50 }}>
                <TextField
                  id="standard-textarea"
                  label="Post Header"
                  placeholder="Header"
                  multiline
                  type="text"
                  name="header"
                  value={this.state.header}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ marginBottom: 50 }}>
                <TextField
                  id="standard-textarea"
                  label="Post Context"
                  placeholder="Context"
                  multiline
                  type="text"
                  name="context"
                  value={this.state.context}
                  onChange={this.handleChange}
                />
              </div>
              <Button variant="contained" onClick={this.handleSubmit}>Submit Post</Button>
            </form>
    );
  }
}

export default PostForm;