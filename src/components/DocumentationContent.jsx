import React, { useRef } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { ClipboardWithTooltip } from "./ClipboardWithTooltip";
import { motion, useInView } from "framer-motion";

export function DocumentationContent() {
  const apiBaseUrl = "https://moroccocityexplorer-api.onrender.com";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full md:w-[32rem] mx-auto mt-40 px-4">
      <motion.div
        className="bg-gray-900 text-white p-10 mb-8 text-center rounded-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h4" color="white">
            Getting Started
          </Typography>
        </motion.div>
      </motion.div>

      <div ref={containerRef}>
        <Timeline>
          <motion.div
            id="citydata"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineItem className="mt-28">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Get cities
                  </Typography>
                </motion.div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    To access cities data, use fetch: <br />
                    <ClipboardWithTooltip
                      text={`fetch('${apiBaseUrl}/cities')\n.then(response => response.json())\n.then(data => console.log(data));`}
                    />
                  </Typography>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </motion.div>

          <motion.div
            id="popularPlaces"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineItem className="mt-28">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Popular Places
                  </Typography>
                </motion.div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    To access popular places data, use fetch:
                    <br />
                    <ClipboardWithTooltip
                      text={`fetch('${apiBaseUrl}/cities/:cityId')\n.then(response => response.json())\n.then(data => console.log(data.most_popular_places));`}
                    />
                    <br />
                    Replace <code>:cityId</code> with the ID of the city you want to
                    retrieve popular places for.
                  </Typography>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </motion.div>

          <motion.div
            id="restaurants"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineItem className="mt-28">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Restaurants
                  </Typography>
                </motion.div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    To access restaurants data, use fetch:
                    <ClipboardWithTooltip
                      text={`fetch('${apiBaseUrl}/cities/:cityId')\n.then(response => response.json())\n.then(data => console.log(data.restaurants));`}
                    />
                    <br />
                    Replace <code>:cityId</code> with the ID of the city you want to
                    retrieve restaurants for.
                  </Typography>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </motion.div>

          <motion.div
            id="errorHandling"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineItem className="mt-28">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Error Handling
                  </Typography>
                </motion.div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    When fetching data from the API, it's important to handle errors
                    properly. Here's an example of how to handle errors using fetch:
                    <br />
                    <ClipboardWithTooltip
                      text={`fetch('${apiBaseUrl}/cities/:cityId')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));`}
                    />
                    <br />
                    This code snippet demonstrates how to check the response status
                    and handle errors accordingly.
                  </Typography>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </motion.div>

          <motion.div
            id="apiVersion"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineItem className="mt-20">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    API Version
                  </Typography>
                </motion.div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    This documentation corresponds to the first version of the API.
                    Future updates may include additional features, improvements, or
                    changes. Please refer to the latest documentation for the most
                    up-to-date information.
                  </Typography>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </motion.div>

          <motion.div
            id="contribute"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <TimelineItem className="mt-20">
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="leading-none"
                  >
                    Contribute
                  </Typography>
                </motion.div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    If you have suggestions, feature requests, or additional data
                    that can improve the API, don't hesitate to contribute! Fork the
                    repository on{" "}
                    <a target="_blank" href="https://github.com/abdellatifatm/MoroccoCityExplorer-API" className="underline font-bold">
                      GitHub
                    </a>
                    , make your changes, and submit a pull request. Your
                    contributions are greatly appreciated and help make the API
                    better for everyone.
                  </Typography>
                </motion.div>
              </TimelineBody>
            </TimelineItem>
          </motion.div>
        </Timeline>
      </div>
    </div>
  );
}
