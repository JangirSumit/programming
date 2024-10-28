Here's a table comparing the **Azure Load Balancing Services** displayed in your image:

| Feature                 | Application Gateway                | Front Door and CDN Profiles          | Load Balancer                          | Traffic Manager                       |
|-------------------------|------------------------------------|--------------------------------------|----------------------------------------|---------------------------------------|
| **Purpose**             | Application-level (Layer 7) load balancing with advanced routing | Global load balancing and acceleration for web applications | Network-level (Layer 4) load balancing within a region | DNS-based global traffic routing |
| **OSI Layer**           | Layer 7 (Application)             | Layer 7 (Application)                | Layer 4 (Transport)                    | Layer 7 (DNS)                         |
| **Scope**               | Regional                          | Global                               | Regional                               | Global                                |
| **Traffic Routing**     | URL-based routing, path-based, session affinity, SSL termination | Latency-based, geographic, priority, session affinity | Round-robin, hash-based, or based on session persistence | Priority, performance, weighted, geographic |
| **Health Monitoring**   | Application-level health checks   | Application-level health checks      | Network-level (TCP/UDP) health probes  | DNS-based endpoint monitoring         |
| **Best for**            | Web applications with complex routing needs and security requirements | Web applications needing global reach, CDN integration, and failover | Load balancing within a single region or virtual network | Multi-region failover, geo-routing for DNS-based traffic |
| **SSL Offloading**      | Yes                               | Yes                                  | No                                     | No                                    |
| **Additional Features** | Web Application Firewall (WAF), URL rewrite, custom error pages | CDN caching, SSL offloading, HTTP/2, dynamic site acceleration | N/A                                    | DNS redirection only                  |

### When to Use Each
- **Application Gateway**: For web applications that need advanced layer 7 routing, security with WAF, SSL termination, and path-based routing within a region.
- **Front Door**: For global applications requiring content acceleration, smart routing, and edge-based load balancing.
- **Load Balancer**: For network-level load balancing within a single region, especially for backend services without application-specific routing.
- **Traffic Manager**: For DNS-based global routing across multiple regions, useful for disaster recovery and global load distribution based on geography or latency.