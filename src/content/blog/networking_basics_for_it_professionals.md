---
title: "Networking Basics for IT Professionals"
description: "IP, which stands for Internet Protocol, is a fundamental concept every IT user or computer enthusiast encounters. Whether you’re a beginner or a mid-to-advanced level enthusiast, this guide serves as a comprehensive refresher on crucial networking concepts."
pubDate: "Dec 12 2023"
heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["networking"]
---

## Understanding IP Addresses: The Heart of Networking

### IP Addresses: The Basics

IP, which stands for Internet Protocol, is a fundamental concept every IT user or computer enthusiast encounters. Whether you’re a beginner or a mid-to-advanced level enthusiast, this guide serves as a comprehensive refresher on crucial networking concepts.

Assuming you're using Linux – specifically, Kali Linux, though other Linux distros work just as well – open your terminal and type:

```bash
ifconfig
```

You should see something like this:

![Albuquerque, New Mexico](https://delinvon.sirv.com/tetteis-cyber/kali-linux-terminal-output-for-ifconfig.png)
_Bash shell output from Kali Linux._

`eth0` is the first Ethernet interface. Additional Ethernet interfaces would be named `eth1`, `eth2`, and so on. After `inet`, you'll find your IPv4 address, which is `192.168.23.128` in my case, and after `inet6`, you'll find your IPv6 address, which is `fe80::b04a:276a:b749:96e1` in my case. IPv4 uses decimal notation, while IPv6 uses hexadecimal.

#### IPv4 Addresses

IPv4 addresses are divided into four sections, each representing an octet. The first octet (e.g., 192) is an eight-bit binary. Each of the four fields comprises 32 bits (8 x 4), equaling 4 bytes. The potential number of IPv4 addresses is 2^32 or over 4 billion, a number that seems vast but is finite compared to the world’s population.

#### IPv6 Addresses

To address the scarcity issue, IPv6 was introduced with 128 bits, providing over 340 trillion, trillion, trillion addresses. Despite IPv6’s advantages, IPv4 remains more prevalent. Network Address Translation (NAT) is a crucial solution to manage IPv4 addresses, particularly in homes with multiple connected devices.

## MAC Addresses: The Link to Switching

MAC (Media Access Control) addresses, operating at Layer 2, are physical addresses essential for switching. When you build a computer and install a Network Interface Card (NIC), you’re assigned a MAC address. These addresses have identifiers in the form of six pairs of two. You can use the first three pairs in a MAC address lookup to identify the associated vendor or company.

For effective troubleshooting and identification, MAC addresses provide valuable insights, especially when IP addresses fall short. Routers, often acting as Layer 2/3 devices, recognize the MAC addresses of connected devices. This recognition facilitates quick identification and lookup.

## Transport Protocols: Navigating the Three-Way Handshake

Layer 4, known as the Transport Layer, comprises TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP is a connection-oriented protocol, emphasizing reliability, making it suitable for websites (HTTP, HTTPS) and file servers (FTP). UDP, on the other hand, is a connectionless protocol, ideal for streaming services, DNS connections, or Voice over IP.

TCP operates using a three-way handshake: SYN > SYNACK > ACK. Imagine it as a conversation with a neighbor – you say “hi” (SYN), receive a response (SYNACK), and then acknowledge (ACK) to continue the conversation. This handshake involves ports, which are vital communication channels for specific protocols.

## Common Ports and Protocols

Understanding common ports and protocols is pivotal for cybersecurity professionals, especially in ethical hacking scenarios. Here are some key TCP and UDP ports:

| TCP             | UDP           |
| --------------- | ------------- |
| FTP (21)        | DNS (53)      |
| SSH (22)        | DHCP (67, 68) |
| Telnet(23)      | TFTP (69)     |
| SMTP (25)       | SNMP (161)    |
| DNS (53)        |               |
| HTTP (80)       |               |
| POP3 (110)      |               |
| SMB (139 + 445) |               |
| IMAP (143)      |               |

For instance, FTP (File Transfer Protocol) on port 21 allows server logins for file transfers. Meanwhile, SSH and Telnet provide remote access to machines, with SSH offering encryption for secure data transfer.

## The OSI Model: A Framework for Networking Understanding

If you find yourself in a network interview or discussing networking with seasoned professionals, knowledge of the OSI model is indispensable. To remember the seven layers, use the mnemonic: P-D-N-T-S-P-A (Please Do Not Throw Sausage Pizza Away). From the Physical Layer (Layer 1) to the Application Layer (Layer 7), each layer has specific functions, from handling data cables to managing application protocols.

When troubleshooting, starting from the bottom (Physical Layer) up to the Application Layer is best practice. This approach ensures a systematic approach to identifying and resolving issues. For example, if a user reports internet issues, checking the physical connection and gradually moving up the layers can pinpoint the problem effectively.

In conclusion, mastering these basic networking concepts lays a strong foundation for a successful journey into cybersecurity. As you embark on this learning adventure, remember that these concepts are stepping stones. Continue your exploration with in-depth tutorials to better understand each topic.

Happy learning! 😊
