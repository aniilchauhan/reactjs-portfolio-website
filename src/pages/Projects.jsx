import React from "react";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";
import { Box, Typography, useTheme } from "@mui/material";
import Footer from "../components/Footer";
const projectdata = require("../data/projects.json");

const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2px 10px",
        [theme.breakpoints.down("sm")]: {
          paddingBottom: "100px",
        },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Grid xs={12} md={12} lg={12} item>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
          >
            My Projects
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#444" }}
          >
            Check out some of my recent work and see what I've been up to
            lately.
          </Typography>
        </Grid>
        {projectdata.map((value, i) => (
          <Grid key={i} xs={12} md={4} lg={4} sm={4} item>
            <ProjectCard project={value} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};

export default Projects;
