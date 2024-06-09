import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(95vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed hidden lg:block">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Documentation
        </Typography>
      </div>
      <List>
        <a href="#">
          <ListItem>Getting Started</ListItem>
        </a>
        <a href="#citydata">
          <ListItem>City Data</ListItem>
        </a>
        <a href="#popularPlaces">
          <ListItem>Popular Places</ListItem>
        </a>
        <a href="#restaurants">
          <ListItem>Restaurants</ListItem>
        </a>
        <a href="#errorHandling">
          <ListItem>Error Handling</ListItem>
        </a>
        <a href="#apiVersion">
          <ListItem>API Version</ListItem>
        </a>
        <a href="#contribute">
          <ListItem>Contribute</ListItem>
        </a>
      </List>
    </Card>
  );
}
