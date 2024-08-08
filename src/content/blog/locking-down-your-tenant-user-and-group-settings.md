---
title: "Locking Down Your Tenant: User and Group Settings for Maximum Microsoft Entra ID Security"
description: "When setting up a new Microsoft Entra ID tenant, it's essential to configure user and group settings to ensure a secure environment. "
pubDate: "Aug 08 2024"
heroImage: "https://images.unsplash.com/photo-1514820402329-de527fdd2e6d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["Microsoft Entra ID"]
---

When setting up a new Microsoft Entra ID tenant, it's essential to configure user and group settings to ensure a secure environment. Default settings are often too permissive, allowing unnecessary access and permissions. In this article, we'll guide you through best practices for securing your tenant.

## User Settings

User settings are global and apply to all users in the tenant. Review and lockdown settings to prevent unnecessary access.

- **Default user role permissions:** Restrict users from registering applications, creating tenants, and forming security groups.
- **Guest user access:** Limit access to properties and members of their own directory objects.
- **Administration center:** Restrict non-administrators from browsing the admin center.
- **LinkedIn account connections:** Prevent users from connecting work or school accounts with LinkedIn.
- **Show keep user signed in:** Hide this option to enhance security.

## Group Settings

Group settings also require review and lockdown.

- **Self-Service Group Management:** Control group membership requests and access to group features.
- **Security Groups:** Restrict users from creating security groups.
- **Microsoft 365 Groups:** Limit users from creating Microsoft 365 Groups.
- **Expiration and Naming Policy:** Avoid using these settings; instead, create detailed guidance and operational processes.

## Configuration Demos

To configure user settings, navigate to `Users > User settings` within the [Microsoft Entra admin center](https://entra.microsoft.com/). Similarly, to configure group settings, go to `Groups > Group settings` in the same admin center.

![Configuring User settings in Microsoft Entra ID](https://delinvon.sirv.com/locking-down-your-tenant-user-and-group-settings/configuring-users-settings-in-microsoft-entra-id.png)_Configuring Users settings in Microsoft Entra ID_

![Configuring Group settings in Microsoft Entra ID](https://delinvon.sirv.com/locking-down-your-tenant-user-and-group-settings/configuring-groups-settings-in-microsoft-entra-id.png)_Configuring Groups settings in Microsoft Entra ID_

## Conclusion

Securing your Microsoft Entra ID tenant requires careful configuration of user and group settings. By following these best practices, you'll significantly enhance your security posture and protect your organization's assets.

Remember to regularly review and update settings to ensure ongoing security and compliance.
