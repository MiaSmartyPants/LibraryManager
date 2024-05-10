import Button from '@mui/material/Button';

const Landing = ({ login }) => {
    return (
        <div>
            Sign in to view the rest of this beautiful collection!
            <br />
            <Button onClick={() => login()}>Sign In</Button>
        </div>
    )
}

export default Landing;
