import { Typography } from '@mui/material'

const Heading = ({ title }: { title: string }) => {
    return (
        <section className="heading">
            <Typography sx={{ fontWeight: "bold", color: "#259FD9" }} align="center" variant="h4">
                {title}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "#fff" }} align="center" variant="subtitle2">
                Sometiing
            </Typography>
        </section>
    )
}

export default Heading