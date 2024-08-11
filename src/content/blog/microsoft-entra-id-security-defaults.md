---
title: "Microsoft Entra ID Security Defaults: Your First Line of Defence"
description: "Discover how Microsoft Entra ID's security defaults protect your organisation from identity-related attacks. Learn about the five pre-configured security policies and how to enable them."
pubDate: "Aug 11 2024"
heroImage: "https://images.unsplash.com/photo-1612701592234-02b91dc2450b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["Microsoft Entra ID", "Security Defaults"]
---

[Microsoft Entra ID](https://entra.microsoft.com/)'s security defaults provide an essential layer of protection against identity-related attacks, such as password spraying and man-in-the-middle attacks. In this article, we'll delve into the five pre-configured security policies, their benefits, and how to enable them.

## What are Security Defaults?

Security defaults are a set of pre-configured security policies designed to enhance your organisation's security posture. These policies are enabled by default for tenants created after October 2019 and are available at no extra cost.

## Five Pre-Configured Security Policies

1. Require all users to register for Microsoft Entra MFA
2. Require administrators to use MFA
3. Require users to use MFA when necessary
4. Block legacy authentication protocols
5. Protect privileged activities

## Who Should Use Security Defaults?

Organisations using the free tier of Microsoft Entra ID licensing and those seeking to enhance their security posture without complex configurations.

## Enabling Security Defaults

1. Navigate to `Identity > Overview` in the [Microsoft Entra ID portal](https://entra.microsoft.com/)
2. Click on Properties
3. Manage security defaults
4. Enable security defaults

## Best Practices and Recommendations

- Organisations with Microsoft Entra P1 and P2 licenses should consider using conditional access policies for more complex security requirements.
- Security defaults are suitable for organisations without existing conditional access policies.
- MFA significantly mitigates identity threats; enable security defaults or conditional access policies to ensure robust protection.

![Enabling security defaults in Microsoft Entra ID](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-security-defaults/enable-security-defaults-in-microsoft-entra-id.png)_Enabling security defaults in Microsoft Entra ID_

By understanding and enabling security defaults, you'll significantly enhance your organisation's security posture and protect against identity-related attacks.
