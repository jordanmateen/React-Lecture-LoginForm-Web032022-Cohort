import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// react-redux imports
import {useSelector, useDispatch} from 'react-redux'

//slice imports
import {setUserInfo} from './loginFormSlice'

function LoginForm(props) {
    
    const dispatch = useDispatch();
    const [formInfo, setInfo] = useState({
        formName: '',
        formEmail: '',
        formPass: ''
    });
    
    const loginUser = (e) => {
        e.preventDefault();
        const { handleLogin } = props
        handleLogin(formInfo)
        dispatch(setUserInfo(formInfo))
    }
    
    return (
        <>
            <h2>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="email" placeholder="" onChange={(event) => setInfo({...formInfo, formName:event.target.value}) }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="" onChange={(event) => setInfo({...formInfo, formEmail:event.target.value})} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="" onChange={(event) => setInfo({...formInfo, formPass:event.target.value})} />
                </Form.Group>
                
                <Button onClick={loginUser} variant="success" type="submit"> Take me to my account </Button>
            </Form>
        </>
    )
}

export default LoginForm
