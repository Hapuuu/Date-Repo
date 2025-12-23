import { Button } from '@material-ui/core'
import React from 'react'

const DateConfigurer = () => {
    const handleClick = () => {
        window.open('https://wa.me/+94772265151?text=Lets go on a date', '_blank', 'noopener noreferrer');
    }
    return (
        <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ padding: "15px 30px", fontSize: "18px", fontWeight: "bold" }}
            className="heart-button"
            onClick={handleClick}>
            Yes, I Do! 💖
        </Button>
    )
}

export default DateConfigurer