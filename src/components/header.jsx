
import {
    Box,
    Switch,
    FormControlLabel
} from "@mui/material";

const HeaderSection = ({ setDark, dark }) => {

    function handleDarkMode() {
        setDark(!dark)
    }

    return (
        <Box Box component={'header'} className="static" >
            <Box className="bg-[#1a1a63] pr-4" display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
                <FormControlLabel
                    control={<Switch checked={dark} onChange={handleDarkMode} />}
                    label="Dark"
                    className="text-white"
                    labelPlacement="start"
                />

            </Box>
        </Box>
    );
};

export default HeaderSection;
