# react-login

## Installation

Install the library with `npm install gate6reactlogin`


## Example usage

1. Import Login componenet from gate6reactlogin
2. Define "config" variables.
3. Create submit handle function.
4. Pass "config" variables in "props" of Login componenet.
5.

```javascript
import React from "react";
import Login from 'gate6reactlogin';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(user, status){
        console.log(user, status);
    }
	componentWillMount() {
		this.props.onCreate();
	}
 	render() {
        const config = {
            handleSubmit:this.handleSubmit,
            parentClass:'loginWrapper',
            passwordPattern:'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{7,}\S$',
            usernameLabel:'Email',
            passwordLabel:'Password',
            inputClass:'form-input',
            errorClass:'error-text',
        }
    	return <div>
			    <Login config={config} />
    	</div>
  	}
}
export default App;
```

## License (MIT)

```
Copyright (c) 2017 Chris O'Hara <cohara87@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```