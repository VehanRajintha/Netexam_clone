export interface Question {
    id: number;
    type: 'single' | 'multiple';
    text: string;
    options: string[];
    marks: number;
}

export interface ModuleData {
    title: string;
    code: string;
    questions: Question[];
    answers: Record<number, string>;
}

export const DSNM_DATA: ModuleData = {
    title: "DSNM - Distributed Systems & Network Management",
    code: "DSNM",
    questions: [
        { id: 1, text: "Which specific area of the ISO Network Management framework is concerned with gathering statistics to establish usage quotas and ensuring users have a fair share of resources?", options: ["Configuration Management", "Fault Management", "Accounting Management", "Performance Management"], type: 'single', marks: 1.0 },
        { id: 2, text: "In the context of fault management, what is a primary disadvantage of relying solely on an interrupt-driven approach for data collection?", options: ["It consumes significantly higher bandwidth than polling.", "It is unable to detect critical events like link failures.", "It relies on periodic test packets that distort network behavior.", "It may not facilitate effective fault management due to its reactive nature."], type: 'single', marks: 1.0 },
        { id: 3, text: "When implementing a Storage Area Network (SAN) which protocol is typically used for data transmission between servers and storage elements?", options: ["Encapsulated SCSI", "CIFS (Common Internet File System)", "HTTP (Hypertext Transfer Protocol)", "NFS (Network File System)"], type: 'single', marks: 1.0 },
        { id: 4, text: "Statistically, at which levels of the OSI reference model do approximately network errors occur?", options: ["Physical, Data link, and Network layers", "Transport and Network layers only", "Application, Presentation, and Session layers", "Data link and Transport layers"], type: 'single', marks: 1.0 },
        { id: 5, text: "Network baselining is defined as the act of measuring and rating network performance in real-time. What is the primary purpose of comparing this data to historical metrics?", options: ["To identify trends and determine the effectiveness of configuration changes.", "To eliminate the need for future network hardware upgrades.", "To replace active monitoring with passive data collection.", "To automate the process of physical layer connectivity testing."], type: 'single', marks: 1.0 },
        { id: 6, text: "In the context of Network Mapping, why is 'Non-network information' such as service contracts and vendor lists considered vital?", options: ["It allows the NMS to automatically map the Data link layer.", "It provides the technical parameters needed for configuring OSPF and RIP.", "It is essential for day-to-day management tasks and authorizing purchases.", "It defines the encryption standards used for LDAP Security."], type: 'single', marks: 1.0 },
        { id: 7, text: "When storing configuration management data, what is a significant disadvantage of using a Structured (DBMS) approach compared to an Unstructured (ASCII) approach?", options: ["It is unable to provide complex data relationships or versioning.", "It is significantly slower to search through large datasets.", "It cannot be accessed from remote locations over the network.", "It involves higher administrative overheads and requires learning a query language."], type: 'single', marks: 1.0 },
        { id: 8, text: "Active Monitoring involves sending test traffic into the network. What is the main 'cost' associated with this method of monitoring?", options: ["It cannot gather statistics for administration or fine tuning.", "It is limited to the physical layer and cannot monitor protocols.", "It is unable to measure performance on-demand.", "It imposes extra traffic and can distort the true behavior of the network."], type: 'single', marks: 1.0 },
        { id: 9, text: "Which component of a Network Management System (NMS) is responsible for providing the 'generic/basic functionality' used to manage diverse network devices?", options: ["The query language (SQL)", "The set of applications built on top", "The platform (architecture)", "The Management Information Base (MIB)"], type: 'single', marks: 1.0 },
        { id: 10, text: "Performance management involves setting utilization thresholds. What is the primary reason for performing simulations as the final step in the performance management process?", options: ["To collect real-time data on current device utilization.", "To eliminate the need for statistical analysis and workload modeling.", "To automatically bill users based on their peak bandwidth consumption.", "To determine how the network can be altered to maximize performance."], type: 'single', marks: 1.0 },
        { id: 11, text: "In the context of network storage, which of the following is a key characteristic of Network Attached Storage (NAS)?", options: ["It is a special-purpose server that offers cross-platform file sharing.", "It uses a dedicated high-speed fiber-based interconnect separate from the LAN.", "It communicates primarily using encapsulated SCSI protocols.", "It represents a move back to the centralized mainframe host storage model."], type: 'single', marks: 1.0 },
        { id: 12, text: "According to the ISO framework, which area of network management is responsible for identifying sensitive information and finding vulnerabilities in access points?", options: ["Fault Management", "Security Management", "Accounting Management", "Configuration Management"], type: 'single', marks: 1.0 },
        { id: 13, text: "A Network Management System (NMS) platform can use three different architectures. Which architecture is designed to distribute management tasks across multiple levels or locations?", options: ["Centralized", "Encapsulated", "Sequential", "Hierarchical or Distributed"], type: 'single', marks: 1.0 },
        { id: 14, text: "What is the primary goal of the Network Management process as it relates to the role of a Network Engineer?", options: ["To prioritize the budget over the organization's communication needs.", "To help network engineers deal with the complexity of data networks.", "To ensure that all of network errors are resolved automatically.", "To automate all network expansion so engineers are no longer needed."], type: 'single', marks: 1.0 },
        { id: 15, text: "When mapping the Application Layer during a network audit, which of the following is specifically identified as a target for documentation?", options: ["Bridge Configuration Management Information", "Policies and Licenses", "IP address duplicate detection", "Fiber-based high-speed interconnects"], type: 'single', marks: 1.0 },
        { id: 16, text: "Which benefit of a Storage Area Network (SAN) makes it particularly suitable for organizations with sporadic needs for higher storage capacity?", options: ["Reduced dependency on Fiber-based interconnects", "Exceptional scalability", "Lower initial implementation cost compared to NAS", "Elimination of the need for RAID configurations"], type: 'single', marks: 1.0 },
        { id: 17, text: "Configuration management involves a three-step cycle of data handling. Which step is specifically responsible for maintaining an up-to-date inventory and producing reports?", options: ["Polling", "Storing", "Modifying", "Gathering"], type: 'single', marks: 1.0 },
        { id: 18, text: "What is one of the primary reasons for the 'move back to the central storage model' seen in modern Storage Area Networks (SANs)?", options: ["To reduce the cost of fiber-based high-speed switches and hubs.", "To utilize the existing Ethernet LAN infrastructure for all storage traffic.", "To address the problem of isolated storage devices connected to individual machines.", "To decrease the need for backup and recovery processes."], type: 'single', marks: 1.0 },
        { id: 19, text: "The ISO Performance Management process suggests analyzing relevant data through workload modeling. What is a typical 'utilization' metric measured in this context?", options: ["Vendor support response times", "Bandwidth and Throughput of links", "Names of contractors working on the network", "Number of application licenses remaining"], type: 'single', marks: 1.0 },
        { id: 20, text: "Within an NMS platform, the Management Information Base (MIB) functions alongside which other component to allow for data retrieval?", options: ["A query language", "An event log", "A user interface", "A network map"], type: 'single', marks: 1.0 },
        { id: 21, text: "Passive monitoring is characterized by its observational nature. Unlike active monitoring, what is its primary effect on network performance?", options: ["It is faster at detecting 'on-demand' performance spikes.", "It generates periodic test packets to ensure links are active.", "It does not add any overhead or distort the network behavior.", "It requires the use of centralized NMS architecture to function"], type: 'single', marks: 1.0 },
        { id: 22, text: "Which specific protocol is cited as being used for the purpose of 'managing network devices' in the monitoring and analysis slides?", options: ["RIP (Routing Information Protocol)", "ICMP (Internet Control Message Protocol)", "SNMP (Simple Network Management Protocol)", "LDAP (Lightweight Directory Access Protocol)"], type: 'single', marks: 1.0 },
        { id: 23, text: "In the Fault Management process, what is the 'illusion' that a well-managed network maintains for its users?", options: ["Complete and continuous connectivity.", "Total absence of any network hardware.", "Zero-cost network utilization.", "Unlimited bandwidth availability."], type: 'single', marks: 1.0 },
        { id: 24, text: "When measuring network traffic, which category of monitoring allows you to see 'Who is talking to who?'", options: ["Protocols", "Connections/Conversations", "Errors", "Number of Nodes"], type: 'single', marks: 1.0 },
        { id: 25, text: "A Storage Area Network (SAN) identifies its 'Storage Medium' primarily as which of the following?", options: ["Virtual SCSI Interconnect", "Disk/RAID", "Remote Terminal FTAM", "ASCII files"], type: 'single', marks: 1.0 },
        { id: 26, text: "Which step in the Performance Management process involves workload modeling and statistical analysis?", options: ["Monitoring error rates", "Analyzing relevant data", "Setting utilization thresholds", "Collecting data on current utilization"], type: 'single', marks: 1.0 },
        { id: 27, text: "Network Attached Storage (NAS) is often preferred for offloading specific tasks. Which task is explicitly mentioned as being 'taken off' the network server by NAS?", options: ["Manual collection of configuration data", "High-bandwidth file-serving tasks", "Vulnerability scanning of access points", "Physical layer connectivity reporting"], type: 'single', marks: 1.0 }
    ],
    answers: {
        1: "Accounting Management",
        2: "It may not facilitate effective fault management due to its reactive nature.",
        3: "Encapsulated SCSI",
        4: "Physical, Data link, and Network layers",
        5: "To identify trends and determine the effectiveness of configuration changes.",
        6: "It is essential for day-to-day management tasks and authorizing purchases.",
        7: "It involves higher administrative overheads and requires learning a query language.",
        8: "It imposes extra traffic and can distort the true behavior of the network.",
        9: "The platform (architecture)",
        10: "To determine how the network can be altered to maximize performance.",
        11: "It is a special-purpose server that offers cross-platform file sharing.",
        12: "Security Management",
        13: "Hierarchical or Distributed",
        14: "To help network engineers deal with the complexity of data networks.",
        15: "Policies and Licenses",
        16: "Exceptional scalability",
        17: "Storing",
        18: "To address the problem of isolated storage devices connected to individual machines.",
        19: "Bandwidth and Throughput of links",
        20: "A query language",
        21: "It does not add any overhead or distort the network behavior.",
        22: "SNMP (Simple Network Management Protocol)",
        23: "Complete and continuous connectivity.",
        24: "Connections/Conversations",
        25: "Disk/RAID",
        26: "Analyzing relevant data",
        27: "High-bandwidth file-serving tasks"
    }
};

export const WAN_DATA: ModuleData = {
    title: "WAN - Wide Area Networking",
    code: "WAN",
    questions: [
        { id: 1, text: "Given the IP address 196.88.10.12/28, what is the calculated network address for the subnet it belongs to?", options: ["196.88.10.1", "196.88.10.0", "196.88.0.0", "196.88.10.8"], type: 'single', marks: 1.0 },
        { id: 2, text: "For the subnet containing 196.88.10.12/28, what is the specific broadcast address?", options: ["196.88.10.255", "196.88.10.31", "196.88.10.16", "196.88.10.15"], type: 'single', marks: 1.0 },
        { id: 3, text: "Which BGP state involves the router actively attempting to initiate a TCP connection with its peer?", options: ["Active State", "Established State", "OpenSent State", "Idle State"], type: 'single', marks: 1.0 },
        { id: 4, text: "In the BGP best path selection process, which attribute is preferred first by a router?", options: ["Highest Local Preference", "Shortest AS Path", "Lowest Router ID", "Lowest MED value"], type: 'single', marks: 1.0 },
        { id: 5, text: "What is the primary role of Cisco Easy Virtual Network (EVN) in relation to Virtual Routing and Forwarding (VRF)?", options: ["It eliminates the need for tagging.", "It replaces VRFs with a single global routing table.", "It uses VRFs to maintain separate routing and forwarding tables.", "It serves as a replacement for BGP in internal networks."], type: 'single', marks: 1.0 },
        { id: 6, text: "Which characteristic correctly describes Generic Routing Encapsulation (GRE)?", options: ["It is an industry-standard protocol developed by the IETF.", "It is a non-secure protocol that can carry multiprotocol traffic.", "It only supports the transportation of IPv4 traffic.", "It provides built-in encryption for site-to-site VPNs."], type: 'single', marks: 1.0 },
        { id: 7, text: "Why would a network administrator include 'permit icmp any any nd-na' in an IPv6 access list?", options: ["To prevent unauthorized nodes from joining the network.", "To enable ICMP echo requests for network troubleshooting.", "To allow Neighbor Discovery Advertisement messages required for address resolution.", "To permit routing protocol updates between OSPFv3 neighbors."], type: 'single', marks: 1.0 },
        { id: 8, text: "What is the primary security risk associated with the Cisco Discovery Protocol (CDP)?", options: ["It sends unencrypted and unauthenticated device information in periodic broadcasts.", "It consumes significant bandwidth leading to Denial of Service.", "It automatically creates GRE tunnels between unmanaged devices.", "It allows remote users to bypass password requirements for VTY lines."], type: 'single', marks: 1.0 },
        { id: 9, text: "Which method is recommended to mitigate Telnet attacks on network devices?", options: ["Increasing the number of available VTY lines.", "Using SSH instead of Telnet for administrative access.", "Disabling ICMP messages on all management interfaces.", "Enabling CDP on all ports to monitor user activity."], type: 'single', marks: 1.0 },
        { id: 10, text: "How does a MAC Address Table Flooding attack disrupt network operations?", options: ["It deletes the VLAN database stored in flash memory.", "It changes the default gateway of all connected hosts to the attacker's IP.", "It fills the switch's CAM table, forcing it to broadcast frames out of all ports.", "It prevents the switch from performing trunking."], type: 'single', marks: 1.0 },
        { id: 11, text: "What configuration action is effective in mitigating Switch Spoofing attacks?", options: ["Explicitly configuring access links and disabling auto-trunking.", "Using the 'permit icmp any any' command in all ACLs.", "Configuring Port Security with a maximum of one MAC address.", "Enabling the Cisco Discovery Protocol globally."], type: 'single', marks: 1.0 },
        { id: 12, text: "Which technology allows a network administrator to copy frames from a specific port to a packet analyzer without interrupting traffic flow?", options: ["Dynamic ARP Inspection (DAI)", "Virtual Routing and Forwarding (VRF)", "Port Mirroring (SPAN)", "Generic Routing Encapsulation (GRE)"], type: 'single', marks: 1.0 },
        { id: 13, text: "In a /28 subnetting scheme, how many usable host addresses are available in each subnet?", options: ["6", "14", "30", "16"], type: 'single', marks: 1.0 },
        { id: 14, text: "BGP routers use which transport layer protocol and port number to establish a connection?", options: ["UDP Port 179", "TCP Port 23", "UDP Port 520", "TCP Port 179"], type: 'single', marks: 1.0 },
        { id: 15, text: "What is the primary distinction between eBGP and iBGP?", options: ["iBGP uses UDP and eBGP uses TCP.", "eBGP connects different Autonomous Systems, while iBGP is used within a single one.", "eBGP is only used for IPv6, while iBGP is used for IPv4.", "iBGP is more secure because it uses automatic encryption."], type: 'single', marks: 1.0 },
        { id: 16, text: "A network administrator uses 'vrf definition' in Cisco IOS configuration. What is the intended outcome?", options: ["To define the global BGP autonomous system number.", "To enable port security on an interface.", "To mirror traffic to a remote packet analyzer.", "To create a virtual routing instance that isolates routing tables."], type: 'single', marks: 1.0 },
        { id: 17, text: "What happens in the BGP 'Connect' state if the TCP connection fails?", options: ["The router starts sending routing updates via UDP.", "The router transitions to the 'Active' state to try again.", "The router immediately enters the 'Established' state.", "The BGP process is automatically disabled on the interface."], type: 'single', marks: 1.0 },
        { id: 18, text: "In the context of IPv4 ACLs, what is the purpose of a 'wildcard mask'?", options: ["To identify the VLAN ID of incoming Ethernet frames.", "To encrypt the source IP address in the packet header.", "To provide a backup address for the default gateway.", "To specify which bits of an IP address must match the access list entry."], type: 'single', marks: 1.0 },
        { id: 19, text: "Which security feature is specifically designed to prevent ARP spoofing and poisoning?", options: ["BGP Authentication", "Port Security", "Dynamic ARP Inspection (DAI)", "VLAN Access Control Lists (VACLs)"], type: 'single', marks: 1.0 },
        { id: 20, text: "If a network administrator wants to limit administrative access to the VTY lines, which tool should they use?", options: ["Generic Routing Encapsulation (GRE)", "Cisco Discovery Protocol (CDP)", "Dynamic ARP Inspection (DAI)", "Access Control Lists (ACLs)"], type: 'single', marks: 1.0 },
        { id: 21, text: "According to the source material, what is the consequence of a compromised Layer 2 environment?", options: ["All layers above it (Layer 3 through Layer 7) are also affected.", "The vulnerability is contained and cannot reach the application layer.", "The router automatically switches to a secure backup VRF.", "Only the physical link is damaged."], type: 'single', marks: 1.0 },
        { id: 22, text: "What is the function of the 'Active Router' during the BGP session establishment process?", options: ["It shuts down the session if it detects a neighbor with a different AS number.", "It has the higher IP address and starts the TCP connection.", "It waits passively for a connection on port .", "It is responsible for encrypting the GRE tunnel."], type: 'single', marks: 1.0 },
        { id: 23, text: "Which protocol is recommended for centralized administrative access security using TACACS+ or RADIUS?", options: ["Cisco Discovery Protocol (CDP)", "Internet Control Message Protocol (ICMP)", "Authentication, Authorization, and Accounting (AAA)", "Simple Network Management Protocol (SNMP)"], type: 'single', marks: 1.0 },
        { id: 24, text: "In a Telnet DoS attack, what is the attacker's primary objective?", options: ["To disable the BGP process on the target router.", "To redirect all network traffic to a packet analyzer.", "To guess the administrative password through trial and error.", "To render the Telnet service unavailable by exhausting available connections."], type: 'single', marks: 1.0 },
        { id: 25, text: "What happens to the original Ethernet frame when Port Mirroring (SPAN) is active on a switch?", options: ["It is forwarded normally to its intended destination.", "It is encapsulated in a GRE tunnel for secure delivery.", "It is encrypted using the administrator's public key.", "It is dropped to prevent loops in the network."], type: 'single', marks: 1.0 }
    ],
    answers: {
        1: "196.88.10.0",
        2: "196.88.10.15",
        3: "Active State",
        4: "Highest Local Preference",
        5: "It uses VRFs to maintain separate routing and forwarding tables.",
        6: "It is a non-secure protocol that can carry multiprotocol traffic.",
        7: "To allow Neighbor Discovery Advertisement messages required for address resolution.",
        8: "It sends unencrypted and unauthenticated device information in periodic broadcasts.",
        9: "Using SSH instead of Telnet for administrative access.",
        10: "It fills the switch's CAM table, forcing it to broadcast frames out of all ports.",
        11: "Explicitly configuring access links and disabling auto-trunking.",
        12: "Port Mirroring (SPAN)",
        13: "14",
        14: "TCP Port 179",
        15: "eBGP connects different Autonomous Systems, while iBGP is used within a single one.",
        16: "To create a virtual routing instance that isolates routing tables.",
        17: "The router transitions to the 'Active' state to try again.",
        18: "To specify which bits of an IP address must match the access list entry.",
        19: "Dynamic ARP Inspection (DAI)",
        20: "Access Control Lists (ACLs)",
        21: "All layers above it (Layer 3 through Layer 7) are also affected.",
        22: "It has the higher IP address and starts the TCP connection.",
        23: "Authentication, Authorization, and Accounting (AAA)",
        24: "To render the Telnet service unavailable by exhausting available connections.",
        25: "It is forwarded normally to its intended destination."
    }
};

export const SUBJECTS_DATA = {
    "DSNM": DSNM_DATA,
    "WAN": WAN_DATA
};
