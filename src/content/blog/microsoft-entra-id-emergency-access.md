---
title: "Microsoft Entra ID Emergency Access: Best Practices and Configuration Guide"
description: "Learn about emergency access accounts, also known as break glass accounts, and how they ensure access to Microsoft Entra ID environments in critical situations."
pubDate: "Aug 12 2024"
heroImage: "https://images.unsplash.com/photo-1637570119853-1a6a4ff87461?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["Microsoft Entra ID", "Break Glass", "Emergency Access"]
---

Emergency access accounts, also known as break glass accounts, are highly privileged accounts used to restore access to [Microsoft Entra ID environments](https://entra.microsoft.com/) in critical situations. These accounts ensure business continuity and prevent lockout scenarios.

## Why Emergency Access Accounts are Necessary

- Conditional access malfunctions
- Federation outages
- Multifactor authentication unavailability
- Global Administrator account deletion or disablement
- Unforeseen circumstances like natural disasters

## Configuring Emergency Access Accounts

| Configuration                      | Value                                                                                                     | Description                                                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Username                           | Unique, non-descriptive username (e.g., "EmergencyAccess1")                                               | Choose a username that doesn't identify an individual user, ensuring anonymity and minimising potential attacks.                                       |
| Account Type                       | Cloud-only accounts using the `*.onmicrosoft.com` domain                                                  | Microsoft recommends using cloud-only accounts with the `*.onmicrosoft.com` domain for emergency access, ensuring isolation from on-premises accounts. |
| Password Policy                    | Passwords set to never expire                                                                             | Prevents password expiration, ensuring access during emergencies. **Note**: Regular password rotations are still recommended.                          |
| Roles                              | Global Administrator role                                                                                 | Assigns permanent `Global Administrator` privileges, enabling full access to resolve emergencies.                                                      |
| Multi-Factor Authentication (MFA)  | Exclude emergency access accounts from MFA                                                                | Ensures access during emergencies when MFA devices might be unavailable.                                                                               |
| Conditional Access                 | Exclude at least one account from all Conditional Access policies                                         | Prevents policies from blocking access during emergencies, ensuring swift resolution.                                                                  |
| Physical Access to Account Details | Store account details on paper, divided into 2-3 parts, in secure, fireproof safes at disparate locations | Secures account information, minimising unauthorised access and ensuring availability during emergencies.                                              |
| Monitoring of Accounts             | Monitor account usage via Microsoft Defender for Cloud Apps                                               | Tracks account activity, detecting potential misuse and ensuring accounts are only used during genuine emergencies.                                    |

## Best Practices for Emergency Access Accounts

- Create two or more accounts
- Store account details securely
- Monitor usage
- Follow organisational security policies

## Demo - Creating Break Glass Accounts

### Step 1: Create a new group for break glass accounts

- Navigate to `Identity > Groups > All groups` in the Microsoft Entra admin center
- Click `New group` and create a group

![Setting up a break glass account group for emergency access](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/setting-up-a-break-glass-account-group-for-emergency-access.png)_Setting up a break glass account group for emergency access_

### Step 2: Create a new user for the break glass account

- Navigate to `Users > All users` and click `New user`
- Create new user

![Setting up a break glass account for emergency access](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/setting-up-a-break-glass-account-for-emergency-access.png)_Setting up a break glass account for emergency access_

### Step 3: Assign the created break glass account to the break glass group

- Navigate to `Groups > All groups` and select the break glass accounts group
- Click `Members > Add members > Users`
- Select the newly created break glass account
- Click `Select` and refresh the page if necessary

![Adding emergency access account to Break Glass group](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/adding-emergency-access-account-to-break-glass-group.png)_Adding emergency access account to break glass group_

### Step 4: Assign the Global Administrator role

1. Navigate to `Identity Governance > Privileged Identity Management > Manage > Microsoft Entra roles > Assignments > Add assignments`
2. Select the `Global Administrator` role
3. Assign it to the break glass accounts group:
   - Click the `No member selected` link under `Select member(s)`
   - Choose the newly created break glass group
   - Click `Select`, then `Next`
4. Set:
   - `Assignment type` to `Active`
   - `Permanently eligible` to selected
5. Enter a justification (e.g., "Must be active for the break glass account")
6. Click `Assign`

![Assigning global administrator role to break glass group](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/assigning-global-administrator-role-to-break-glass-group.png)_Assigning global administrator role to break glass group_

![Finalising break glass account assignment to group](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/finalising-break-glass-account-assignment-to-group.png)_Finalising break glass account assignment to group_

### Step 5: Verifying Break Glass Account Access

Now that we've created and configured our break glass account, let's verify its access and Global Administrator role.

#### Step-by-Step Verification

1. Go to [portal.azure.com](https://portal.azure.com/) and sign in with your break glass account credentials.
2. Enter your username and password.
3. You'll be prompted to change your password. Create a strong password and complete the change.
4. After successful login, navigate to `Microsoft Entra ID > Manage > Roles and administrators`.
5. Verify your break glass account is assigned the `Global Administrator` role.

![Global Admin role assigned to break glass account](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/break-glass-account-elevated-to-global-admin.png)_Break glass account elevated to Global Admin_

#### Expected Outcome

- Successful login with the break glass account
- `Global Administrator` role assigned and visible in the Microsoft Entra ID portal

This demonstration confirms our break glass account is fully functional and has the necessary privileges to perform critical administrative tasks in emergency situations.

### Step 6: Set password to never expire using PowerShell and Microsoft Graph API

1. Open PowerShell and connect to your Microsoft Entra environment
   - Ensure [Azure PowerShell is installed](https://learn.microsoft.com/en-us/powershell/azure/install-azps-windows?view=azps-12.2.0&tabs=powershell&pivots=windows-psgallery))
2. Run the following PowerShell commands:

   Set execution policy to allow remote-signed scripts:

   - `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

   Install Microsoft Graph PowerShell module:

   - `Install-Module Microsoft.Graph -Scope CurrentUser`

   Connect to Microsoft Graph with necessary permissions:

   - `Connect-MgGraph -Scopes "Directory.AccessAsUser.All"`

   Check password expiration status for break glass account (replace `break-glass-account` with your actual break glass account username)

   - `Get-MGUser -UserId <break-glass-account> -Property UserPrincipalName, PasswordPolicies | Select-Object UserPrincipalName, @{N="PasswordNeverExpires";E={$_.PasswordPolicies -contains "DisablePasswordExpiration"}}`

   Set password to never expire (replace `break-glass-account` with your actual break glass account username):

   - `Update-MgUser -UserId <break-glass-account> -PasswordPolicies DisablePasswordExpiration`

#### Descriptions

- `Set-ExecutionPolicy`: Sets the execution policy to allow remote-signed scripts, enabling the installation of the Microsoft Graph module.
- `Install-Module Microsoft.Graph`: Installs the Microsoft Graph PowerShell module, required for connecting to Microsoft Graph.
- `Connect-MgGraph`: Connects to Microsoft Graph with the necessary permissions to manage user accounts.
- `Get-MGUser`: Retrieves the break glass account's password expiration status.
- `Update-MGUser`: Updates the break glass account's password policy to never expire.

![Break glass account subject to password expiration](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/break-glass-account-subject-to-password-expiration-by-default.png)_Get-MGUser cmdlet output: Break glass account subject to password expiration_

**Note:** All accounts created in Entra ID are subject to password expiration by default, with a 90-day expiration period.

![Break glass account password set to never expire (verified via Get-MGUser cmdlet output)](https://delinvon.sirv.com/tetteis-cyber/microsoft-entra-id-emergency-access/break-glass-account-password-set-to-never-expire.png)_Break glass account password set to never expire (verified via Get-MGUser cmdlet output)_

## Custom Domains Aren't Suitable for Break Glass Accounts

Registering a custom domain in Entra ID or with a third-party registrar doesn't provide sufficient isolation for break glass accounts. This is because custom domains, including those registered externally (e.g., `tetteis.com`), are not equivalent to cloud-only (`*.onmicrosoft.com`) domains.

To align with Microsoft's best practices, create break glass accounts using the `*.onmicrosoft.com` domain (e.g., `emergency1@tettei.onmicrosoft.com`). This ensures:

- Isolation from on-premises accounts
- Cloud-only access, reducing compromise risks
- Adherence to recommended emergency access configurations

Using custom domains for break glass accounts introduces risks like:

- Domain registrar vulnerabilities
- DNS configuration errors
- External dependencies

Switching to a `*.onmicrosoft.com` domain minimises these risks, ensuring a more secure emergency access account setup.

If you've already created a break glass account with a custom domain, consider replacing it with a new `*.onmicrosoft.com` account and updating your configurations. Always adapt break glass account settings to your organisation's security policies.

By following these steps, you've successfully created a break glass account with a password set to never expire, ensuring access to your Microsoft Entra ID environment in critical situations.
