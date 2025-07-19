import { Alert, Box } from '@mui/material'

const Error = ({ error }) => {


    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <Alert severity="error">{error}</Alert>
        </Box>
    )

}

export default Error