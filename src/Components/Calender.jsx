import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import {Box,Heading} from "@chakra-ui/react"

function Calendar() {
  return (
    <Box ml={['0%','0%','0%','11%','11%']} maxWidth='100%'>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Heading paddingBottom='0px' textAlign="center" fontSize='40px' fontWeight='bold' marginRight={['0%','0%','10%']} mb='40px'>
        Days I <strong className="purple">Code</strong>
      </Heading>
      <GitHubCalendar
        username="MrRohitMI"
        blockSize={15}
        blockMargin={5}
        color="rgba(66, 153, 225, 0.6)"
        fontSize={16}
      />
    </Row>
    </Box>
  );
}
export default Calendar;