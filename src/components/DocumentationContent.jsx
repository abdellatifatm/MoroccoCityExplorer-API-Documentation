import React from "react";
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

export function DocumentationContent() {
  // Replace 'YOUR_API_LINK_HERE' with your actual API link
  const apiBaseUrl = "https://moroccocityexplorer-api.onrender.com";

  return (
    <div className="w-full md:w-[32rem] mx-auto mt-40 px-4">
      <div className="bg-gray-900  text-white p-10 mb-8 text-center rounded-md">
        <Typography variant="h4" color="white">
          Getting Started
        </Typography>
      </div>

      <Timeline>
        <div id="citydata">
          <TimelineItem className="mt-28">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Get cities
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
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
            </TimelineBody>
          </TimelineItem>
        </div>
        <div id="popularPlaces">
          <TimelineItem className="mt-28">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Popular Places
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
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
            </TimelineBody>
          </TimelineItem>
        </div>
        <div id="restaurants">
          <TimelineItem className="mt-28">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Restaurants
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
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
            </TimelineBody>
          </TimelineItem>
        </div>

        <div id="errorHandling">
          <TimelineItem className="mt-28">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Error Handling
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
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
            </TimelineBody>
          </TimelineItem>
        </div>
        <div id="apiVersion">
          <TimelineItem className="mt-20">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                API Version
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
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
            </TimelineBody>
          </TimelineItem>
        </div>

        <div id="contribute">
          <TimelineItem className="mt-20">
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Contribute
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-600"
              >
                If you have suggestions, feature requests, or additional data
                that can improve the API, don't hesitate to contribute! Fork the
                repository on{" "}
                <a href="#" className="underline font-bold">
                  GitHub
                </a>
                , make your changes, and submit a pull request. Your
                contributions are greatly appreciated and help make the API
                better for everyone.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </div>
      </Timeline>
    </div>
  );
}
