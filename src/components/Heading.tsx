import { Typography } from "@mui/material";

const Heading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <section className="heading">
      <Typography
        sx={{ fontWeight: "bold", color: "#259FD9" }}
        align="center"
        variant="h4"
      >
        {title}
      </Typography>
      <Typography
        sx={{ fontWeight: "bold", color: "#fff" }}
        align="center"
        variant="subtitle2"
      >
        {subtitle}
      </Typography>
    </section>
  );
};

export default Heading;
