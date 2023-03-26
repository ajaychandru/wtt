import  React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import styles from "./Cards.module.css"

export default function AboutCard() {
  return (
    <Card sx={{ maxWidth: "100%" }}  >
      <CardContent >
        <Typography  className={styles.font} textAlign="center" variant="h5" component="div">
          About
        </Typography>

        <Typography p={1} className={styles.font} variant="body2">
          Visit the World Tech Travel blog if you're interested in world politics and technological breakthroughs.WTT makes an effort to break down complex world news into digestible chunks. The blog's creator has experience in political science and world affairs from his time spent studying for the UPSC. The author is also a software developer who is up to date on technological changes.

        </Typography>
      </CardContent>
    </Card>
  );
}