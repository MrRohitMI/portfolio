import React from 'react'
import { Flex,Image } from "@chakra-ui/react"
const GitStatistics = () => {
  return (
    <Flex mt={4} gap={4} justifyContent={"space-between"} flexWrap={"wrap"} w="80%" m="auto" mb={6}>
          <Image
          w="100%"
            src={
              "https://github-readme-stats.vercel.app/api?username=MrRohitMI&theme=react&hide_border=false&include_all_commits=true&count_private=true"
            }
          />
          <Image
          w="100%"
            src={
              "https://github-readme-streak-stats.herokuapp.com/?user=MrRohitMI&theme=react&hide_border=false&include_all_commits=true&count_private=true"
            }
          />
        </Flex>

  )
}

export default GitStatistics