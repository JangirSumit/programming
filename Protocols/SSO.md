Single Sign-On (SSO) is a method of authentication that allows users to log in once and gain access to multiple related systems without re-entering credentials. SSO protocols enable this secure, seamless experience across different platforms or applications. The most common SSO protocols include:

### 1. **SAML (Security Assertion Markup Language)**
   - **How it works**: SAML is an XML-based protocol that exchanges authentication and authorization data between an identity provider (IdP) and a service provider (SP).
   - **Use case**: Mostly used for web-based applications, especially in enterprise environments for employee access to systems.
   - **Key components**:
     - **Identity Provider (IdP)**: Authenticates the user.
     - **Service Provider (SP)**: Provides the service or resource being accessed.
   - **Workflow**:
     1. The user tries to access a service provider.
     2. The service provider requests authentication from the identity provider.
     3. The identity provider authenticates the user and sends a token (assertion) back to the service provider.
     4. The service provider grants access based on the assertion.
   
### 2. **OAuth 2.0 (Open Authorization)**
   - **How it works**: OAuth 2.0 is an authorization protocol that allows third-party services to exchange limited access to a user's resources (like a social media profile) without exposing their credentials.
   - **Use case**: Widely used for authorization in mobile apps, APIs, and web apps. Think of "Sign in with Google" or "Sign in with Facebook" options.
   - **Key components**:
     - **Resource Owner**: The user.
     - **Client**: The application requesting access.
     - **Authorization Server**: Issues access tokens after authenticating the user.
     - **Resource Server**: The server holding the user’s data.
   - **Workflow**:
     1. The user logs in to the identity provider (e.g., Google).
     2. The identity provider returns an access token to the client.
     3. The client uses the token to access resources on the resource server.

### 3. **OpenID Connect (OIDC)**
   - **How it works**: Built on top of OAuth 2.0, OpenID Connect adds an authentication layer, allowing users to authenticate themselves and get identity tokens.
   - **Use case**: Common for authenticating users in modern web and mobile apps. It supports single sign-on while being lightweight.
   - **Key components**:
     - **Identity Token**: Used to authenticate the user.
     - **Access Token**: Used to access user data.
   - **Workflow**:
     1. The user authenticates via the identity provider.
     2. The identity provider sends an identity token and an access token.
     3. The client uses the identity token to verify the user's identity.

### 4. **Kerberos**
   - **How it works**: Kerberos is a network authentication protocol that uses secret-key cryptography to authenticate client-server interactions.
   - **Use case**: Often used in enterprise environments for authenticating users to multiple services within a local network, such as in Windows domains.
   - **Key components**:
     - **Key Distribution Center (KDC)**: Issues tickets.
     - **Ticket Granting Ticket (TGT)**: A ticket used to request service tickets for accessing services.
   - **Workflow**:
     1. The user authenticates to the Key Distribution Center (KDC).
     2. The KDC issues a Ticket Granting Ticket (TGT).
     3. The user presents the TGT to request service tickets for specific services.

### 5. **CAS (Central Authentication Service)**
   - **How it works**: CAS is an open-source protocol designed to enable SSO for web applications.
   - **Use case**: Popular in academic institutions and open-source projects.
   - **Key components**:
     - **Ticket**: A token granted after the user logs in, used to authenticate with different services.
   - **Workflow**:
     1. The user logs into CAS.
     2. CAS provides a ticket that the user presents to the desired service.
     3. The service verifies the ticket with CAS to authenticate the user.

### 6. **WS-Federation**
   - **How it works**: WS-Federation is a web services protocol used for federated identity management. It enables the sharing of security tokens across different security domains.
   - **Use case**: Mainly used in Microsoft environments and enterprise applications for federating identity.
   - **Key components**:
     - **Relying Party (RP)**: The service that relies on the security token.
     - **Identity Provider (IdP)**: The entity issuing the security token.
   - **Workflow**:
     1. The user requests access to a relying party.
     2. The relying party redirects the user to the identity provider.
     3. The identity provider issues a security token.
     4. The relying party uses the token to authenticate the user.

### 7. **LDAP (Lightweight Directory Access Protocol)**
   - **How it works**: LDAP is not an SSO protocol per se, but it is commonly used for directory services like Active Directory, which in turn can be integrated with SSO protocols.
   - **Use case**: Used for accessing and maintaining distributed directory information services.
   - **Workflow**: User authentication and access to directories and resources is managed by querying an LDAP server.

### Differences and Use Cases:
- **SAML**: Better for complex enterprise environments, especially when multiple applications need to authenticate users.
- **OAuth 2.0 + OIDC**: Best for consumer-facing applications (web and mobile) where you need a combination of authentication and API access.
- **Kerberos**: More suited for internal enterprise networks, like Windows domains.
- **WS-Federation**: Used in legacy Microsoft systems.
- **CAS**: Simple open-source SSO solution, mainly used in academic institutions.

Each protocol offers different strengths depending on your use case—whether it's for internal enterprise applications or customer-facing services.