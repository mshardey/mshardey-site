---
title: "Tracking User Events and Generating Reports in Python"
description: "In the world of IT and Cybersecurity, tracking user events and generating reports are common tasks. Python, with its simplicity and versatility, offers powerful tools to automate such tasks."
pubDate: "Apr 07 2024"
heroImage: "https://plus.unsplash.com/premium_photo-1661870912512-840fac2ffd45?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["python", "automation"]
---

In the world of IT and Cybersecurity, tracking user events and generating reports are common tasks. Python, with its simplicity and versatility, offers powerful tools to automate such tasks. In this tutorial, we'll break down a Python script that tracks user login and logout events on machines and generates a report of current users.

## Step 1: Defining Functions

Let's start by defining two functions:

```py
def get_event_date(event):
    return event.date
```

This function extracts the date of an event.

```py
def current_users(events):
    events.sort(key=get_event_date)
    machines = {}
    for event in events:
        if event.machine not in machines:
            machines[event.machine] = set()
        if event.type == "login":
            machines[event.machine].add(event.user)
        elif event.type == "logout":
            if event.user in machines[event.machine]:
                machines[event.machine].remove(event.user)
    return machines
```

This function tracks current users on machines. It sorts events by date, iterates over them, and updates the dictionary machines accordingly based on login and logout events.

## Step 2: Generating Reports

Now, let's define a function to generate a report of current users on machines:

```py
def generate_report(machines):
    for machine, users in machines.items():
        if len(users) > 0:
            user_list = ", ".join(users)
            print("{}: {}".format(machine, user_list))
```

This function iterates over the machines dictionary, checks if there are any users logged in, joins the users into a string, and prints the machine name along with the list of users.

## Step 3: Defining Event Class

Next, let's define a class to represent events:

```py
class Event:
    def __init__(self, event_date, event_type, machine_name, user):
        self.date = event_date
        self.type = event_type
        self.machine = machine_name
        self.user = user
```

This class initializes event attributes such as date, type, machine, and user.

## Step 4: Creating Events

Now, let's create a list of events:

```py
events = [
    Event('2020-01-21 12:45:56', 'login', 'myworkstation.local', 'jordan'),
    Event('2020-01-22 15:53:42', 'logout', 'webserver.local', 'jordan'),
    Event('2020-01-21 18:53:21', 'login', 'webserver.local', 'lane'),
    Event('2020-01-22 10:25:34', 'logout', 'myworkstation.local', 'jordan'),
    Event('2020-01-21 08:20:01', 'login', 'webserver.local', 'jordan'),
    Event('2020-01-23 11:24:35', 'logout', 'mailserver.local', 'chris'),
]
```

These events represent various login and logout activities on different machines.

## Step 5: Generating Reports

Finally, let's get current users on machines using the current_users function and generate and print a report of current users on machines using the generate_report function:

```py
users = current_users(events)
generate_report(users)
```

This retrieves current users from events, generates a report, and prints it.

## Conclusion

In this tutorial, we've learned how to track user events and generate reports using Python. This script can be extended and customized for various IT and Cybersecurity automation tasks. The complete code for this project is available on [my GitHub repository](https://github.com/tetteis/user-event-tracker).

Happy coding!✨
