import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Typography from '@material-ui/core/Typography';

const Highlighted = ({children, href}) => {
    const style = {
        backgroundColor: "#f0f0f0",
        textDecoration: 'none',
        borderRadius: '5px',
        padding: "5px",
        margin: "0 0.2em 0 0.2em",
    }

    return (
        <OutboundLink style={style} href={href} target="_blank" rel="noopener noreferrer">
            <Typography display="inline">
                {children}
            </Typography>
        </OutboundLink>
    )
}

export default Highlighted;