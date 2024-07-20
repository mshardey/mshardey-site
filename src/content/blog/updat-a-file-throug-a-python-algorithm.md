---
title: "Update A File Through A Python Algorithm"
description: "At my workplace, we manage who can see certain content by using a list of approved IP addresses called the `allow_list.txt` file. This file contains the IP addresses that are allowed to access the content."
pubDate: "Feb 07 2024"
heroImage: "https://plus.unsplash.com/premium_photo-1663054500009-d4fc1a8ad953?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
badge: ""
tags: ["python"]
---

At my workplace, we [manage who can see certain content](https://docs.google.com/document/d/1AZ3VzOACGLPwa4aMGPQO6YriTQXYnYRDcRqJndNjI8w/edit?usp=sharing) by using a list of approved IP addresses called the `allow_list.txt` file. This file contains the IP addresses that are allowed to access the content. We also have another list that identifies IP addresses that should no longer have access to this content. I made a program to automatically update the `allow_list.txt` file by removing these IP addresses that should no longer have access.

## Open the file that contains the allow list

To start the algorithm, I opened the `allow_list.txt` file. First, I stored the file name in a variable called import_file as a string.

![Import text file from the same project directory](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/import-text-file.png)
_Importing text file from the same project directory._

I created a sample list called `remove_list`. This list contains four strings, each representing an IP address: `192.168.97.225`, `192.168.158.170`, `192.168.201.40`, and `192.168.58.57`.

![List of the IP addresses to remove](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/remove-list.png)
_List containing the IP addresses to remove._

Next, I opened the file using a `with` statement:

![Open the imported file using the 'with' statement](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/built-with.png)
_Open the imported file using the 'with' statement._

In my algorithm, I used the `with` statement along with the `.open()` function in read mode to open the allow list file for reading. This allowed me to access the IP addresses stored in the file. The `with` keyword helped manage resources by automatically closing the file after the `with` statement ends. In the code `with open(import_file, "r") as file:`, the `open()` function takes two parameters: the file to open and what I want to do with it. Here, `"r"` indicates that I want to read the file. The `as` keyword is used to assign a variable named `file` to store the output of the `.open()` function while I work within the `with` statement.

## Read the file contents

To read the file contents, I used the .read() method to turn it into a string.

![Reading the content of the imported file](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/open-and-read-file.png)
_Reading the content of the imported file._

When using the `.open()` function with `"r"` for "read," I can use the `.read()` function inside the `with` statement. This `.read()` method turns the file into a string, which I can then read. After applying the `.read()` method to the file variable in the `with` statement, I stored the resulting string in the variable `ip_addresses`.

In summary, this code reads the contents of the `"allow_list.txt"` file into a string format, allowing me to organize and extract data later in my Python program.

## Convert the string into a list

To remove individual IP addresses from the allow list, I needed to have it in a list format. So, I used the `.split()` method to turn the ip_addresses string into a list.

![Convert the string into a list with the split()](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/split_ip_addresses.png)
_Converting the string into a list._

The `.split()` function is used by adding it to a string variable. It turns the contents of a string into a list. Splitting `ip_addresses` into a list makes it easier to remove IP addresses from the allow list. By default, `.split()` separates text by whitespace into list elements. In this algorithm, `.split()` takes the data from the variable `ip_addresses`, which is a string of IP addresses separated by whitespace, and converts it into a list of IP addresses. I then assigned this list back to the variable `ip_addresses`.

## Iterate through the remove list

An important part of my algorithm is going through the IP addresses listed in the `remove_list`. To achieve this, I used a for loop.

![Iterate through the remove list with for loop](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/for-loop.png)
_Iterating through the remove list with for loop._

In Python, a for loop repeats code for each item in a sequence. In this algorithm, the for loop is used to apply specific code statements to all elements in the sequence `ip_addresses`. It starts with the keyword `for`, followed by the loop variable `element`, and the keyword `in`. This indicates that it will go through the sequence `ip_addresses` and assign each value to the loop variable `element`.

## Remove IP addresses that are on the remove list

My algorithm needs to remove any IP address from the allow list (`ip_addresses`) that is also found in the `remove_list`. Since there were no duplicates in `ip_addresses`, I could use the following code to achieve this:

![Remove IP addresses on the remove list with the remove() function](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/remove-elements.png)
_Removing IP addresses on the remove list._

First, inside my `for` loop, I made a check to see if the current `element` was present in the `ip_addresses` list. This check was necessary because trying to `.remove()` elements that aren't in `ip_addresses` would cause an error.

After confirming the element's presence, I used the `.remove()` method on `ip_addresses`. I passed the loop variable element as the argument. This ensured that each IP address from the `remove_list` would be removed from `ip_addresses`.

## Update the file with the revised list of IP addresses

Finally, in my algorithm, I needed to update the allow list file with the revised list of IP addresses. To accomplish this, I first converted the list back into a string. I used the `.join()` method for this purpose.

![Convert IP addresses to back string with the join() function](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/convert-addresses-to-string.png)
_Converting IP addresses back to string._

The `.join()` method puts together all items in a list into a single string. It's used with a string that contains the characters to separate the elements in the resulting string. In this algorithm, I used `.join()` to turn the list `ip_addresses` into a string. This string was then passed as an argument to the `.write()` method when updating the `"allow_list.txt"` file. I used (`"\n"`) to separate each element onto a new line.

After that, I used another `with` statement along with the `.write()` method to update the file.

![Write the updated IP addresses to the file with the write() function](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/write-string-to-file.png)
_Writing the updated IP addresses to the file._

This time, I used the second argument `"w"` with the `open()` function in my `with` statement. This tells Python that I want to open a file to overwrite its contents. When using `"w"`, I can then use the `.write()` function within the `with` statement. The `.write()` function writes string data to a specified file, replacing any existing content.

In this case, I wanted to write the updated allow list as a string to the file `"allow_list.txt"`. This ensures that the restricted content will no longer be accessible to any IP addresses that were removed from the allow list. To rewrite the file, I added the `.write()` function to the `file` object identified in the `with` statement. I passed in the `ip_addresses` variable as the argument, specifying that the contents of the file specified in the `with` statement should be replaced with the data in this variable.

## Output the revised list of IP addresses

![Output the result to the console with the print() function](https://delinvon.sirv.com/tetteis-cyber/update-a-file-through-a-python-algorithm/output-result.png)
_Outputting the result to the console._

Finally, the Python code `print(ip_addresses)` simply prints the value of the variable `ip_addresses` to the console. Whatever value is stored in the variable `ip_addresses` will be displayed as output. In this case, the output will be the result after removing the IP addresses that are no longer allowed to access the restricted information.

## Summary

I made a program that removes IP addresses listed in a `remove_lis`t variable from the `"allow_list.txt"` file, which contains approved IP addresses. First, I opened the file and converted its content into a string. Then, I turned this string into a list stored in the variable `ip_addresses`. Next, I went through each IP address in the `remove_list`. For each one, I checked if it was in the `ip_addresses` list. If it was, I used the `.remove()` method to remove it from `ip_addresses`. After that, I used the `.join()` method to convert `ip_addresses` back into a string. This allowed me to overwrite the contents of the `"allow_list.txt"` file with the updated list of IP addresses.

The completed code has been uploaded to [my GitHub repository](https://github.com/tetteis/update-a-file-python-algorithm).
