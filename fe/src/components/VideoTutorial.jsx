import { Box, Typography } from "@mui/material";
import "../App.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function VideoTutorial(pros) {
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <Box
      component="div"
      sx={{
        margin: "60px auto",
        width: "90%",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "400",
          fontFamily: "'Fredoka One', cursive",
          marginBottom: "40px",
        }}
      >
        How to get your first NFTVERSE NFT?
      </Typography>
      <Box
        component="div"
        sx={{
          height: isMobile ? "230px" : "600px",
          marginLeft: !isMobile ? "15%" : "none",
          marginRight: !isMobile ? "15%" : "none",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src=""
          title="How to buy your first NFTVERSE NFT?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          id="tutorialVideo"
        />
      </Box>
    </Box>
  );
}
