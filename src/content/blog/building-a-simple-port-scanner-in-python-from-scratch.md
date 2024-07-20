---
title: "Building a Simple Port Scanner in Python from Scratch"
description: "Are you curious about network security or looking to understand how port scanning works? In this beginner-friendly tutorial, we'll walk through building a simple port scanner in Python from scratch."
pubDate: "Mar 06 2024"
heroImage: "https://plus.unsplash.com/premium_photo-1661677814139-14f0f1949dde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["python"]
---

Are you curious about network security or looking to understand how port scanning works? In this beginner-friendly tutorial, we'll walk through building a simple port scanner in Python from scratch. Don't worry if you're new to programming or networking – we'll explain each step along the way.

First, let's take a look at the code we'll be working with:

```py
#!/bin/python

import sys
import socket
from datetime import datetime

# Define our target
if len(sys.argv) == 2:
    # Translate hostname to IPv4
    target = socket.gethostbyname(sys.argv[1])
else:
    # Print error message for incorrect arguments
    print("Invalid amount of arguments")
    print("Syntax: python3 scanner.py <ip>")
    sys.exit()  # Terminate the script if incorrect syntax is provided

# Add a pretty banner
print("-" * 50)
print("Scanning target " + target)
print("Time started: " + str(datetime.now()))
print("-" * 50)

try:
    for port in range(50, 85):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        socket.setdefaulttimeout(1)  # Set timeout for connection attempt
        # Check if the port is open
        result = s.connect_ex((target, port))
        print("Checking port {}".format(port))
        if result == 0:
            print("Port {} is open".format(port))  # Print if port is open
        s.close()

except KeyboardInterrupt:
    # Handle keyboard interrupt gracefully
    print("\nExiting program.")
    sys.exit()

except socket.gaierror:
    # Handle hostname resolution error
    print("Hostname could not be resolved.")
    sys.exit()

except socket.error:
    # Handle generic socket error
    print("Couldn't connect to server.")
    sys.exit()
```

Now, let's break down the code step by step:

1. **Importing Libraries**: We import the necessary libraries including `sys`, `socket`, and `datetime`.

2. **Defining the Target**: We check the command-line arguments to ensure we have the correct number of arguments. If the user provides the IP address of the target, we translate it to IPv4 format.

3. **Banner and Start Time**: We print a banner indicating the start of the scanning process along with the target IP address and the current time.

4. **Scanning Ports**: We loop through a range of ports (in this case, from 50 to 85) and attempt to connect to each port using a TCP socket connection.

5. **Checking for Open Ports**: For each port, we check if the connection attempt (`result`) returns 0, indicating that the port is open. If so, we print a message indicating that the port is open.

6. **Handling Exceptions**: We handle potential exceptions such as keyboard interrupts, hostname resolution errors, and generic socket errors gracefully, providing appropriate error messages.

By understanding and running this code, you've built a basic port scanner in Python! Experiment with different port ranges and targets to further explore how port scanning works.

Feel free to modify and enhance this code as you learn more about Python and networking. You can access the code along with instructions on how to execute the script from [my GitHub repository](https://github.com/tetteis/port-scanner).

Happy coding!✨
