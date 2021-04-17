import { Container, Grow } from '@material-ui/core';
import Login from './Login';
const Auth = () => {
    return (
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    
                    <Login />
                </Container>
            </Grow>
        </Container>
    )
}
export default Auth;