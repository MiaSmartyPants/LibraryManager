import Button from '@mui/material/Button';

const Landing = ({ signIn }) => {
    return (
        <div>
            Sign in to view the rest of this beautiful collection!
            <br />
            <Button onClick={() => signIn()}>Sign In</Button>
        </div>
    )
}

export default Landing;
