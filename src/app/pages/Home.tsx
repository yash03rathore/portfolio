import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/logo.jpg";
import { useLocation } from "react-router-dom";
import { links } from "./links";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            <img src={logo} width="300px" style={{borderRadius: '50%'}} alt="logo" />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="h3">{process.env.REACT_APP_NAME}</Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography variant="subtitle1" gutterBottom>
                <br></br>
              I am a Computer Science graduate from San Francisco State University with experience in software development, business operations, and project coordination. I enjoy using technology to solve practical problems, improve processes, and build tools that are useful for people and businesses. <br></br><br></br>
              Since 2020, I have managed a small trucking and logistics business, where I oversee daily operations, coordinate driver onboarding and training, maintain documentation, manage user access, work with external partners, and use data to support better decisions. This experience has strengthened my ability to take ownership, manage risk, communicate clearly, and solve problems under pressure. <br></br><br></br>
              I have also worked as a Software Engineer on projects for businesses in areas such as education, finance, and marketing. I have helped build websites, integrate APIs, add AI-powered features, troubleshoot technical issues, and support applications across cloud environments. Earlier, as a Student Assistant at the California Department of Water Resources, I supported engineers with project tracking, SharePoint access management, Excel spreadsheets, VBA macros, invoice reviews, and administrative tasks. <br></br><br></br>
              My technical background includes Java, Python, JavaScript, SQL, HTML, CSS, React, Angular, Node.js, Express.js, MongoDB, MySQL, GitHub, Docker, Jira, Postman, AWS, Azure, and Google Cloud. I have also worked with tools such as OpenAI API, Azure OpenAI, and GitHub Copilot. I am always interested in learning new technologies and contributing to projects that create meaningful and efficient solutions. <br></br><br></br>
              


                {/* Better an{' '}
                <Box fontWeight="fontWeightMedium" display="inline">
                  oops
                </Box>{' '}
                than a{' '}
                <Box fontWeight="fontWeightMedium" display="inline">
                  what if
                </Box> */}
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
