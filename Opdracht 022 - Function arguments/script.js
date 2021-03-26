const paintWall = function(color, orientation) {
    console.log("The " + orientation + " wall has been painted " + color);
};

paintWall("red", "north");
paintWall("blue", "south");
paintWall("green", "west");
paintWall();  // ongedifinieerde verf
paintWall("east", "transparent");  // maakt uiteraard uit
