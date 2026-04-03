        function initTailwind() {
            tailwind.config = {
                content: [],
                theme: { extend: {} }
            }
        }
        
        // ====================== PARTICLES FOR PRAYER PAGE ======================
        function createParticles() {
            const container = document.getElementById('particles')
            for (let i = 0; i < 80; i++) {
                const particle = document.createElement('div')
                particle.className = `absolute w-2 h-2 bg-amber-300 rounded-full opacity-30`
                particle.style.left = Math.random() * 100 + '%'
                particle.style.top = Math.random() * 100 + '%'
                particle.style.animation = `floatParticle ${8 + Math.random() * 12}s linear infinite`
                container.appendChild(particle)
                
                // Add CSS animation
                const style = document.createElement('style')
                style.innerHTML = `
                    @keyframes floatParticle {
                        0% { transform: translateY(0) scale(1); opacity: 0.3 }
                        100% { transform: translateY(-1200px) scale(0.2); opacity: 0 }
                    }
                `
                document.head.appendChild(style)
            }
        }
        
        // ====================== GLOBAL DATA ======================
        let currentStudent = {}
        let selectedCourseKey = ''
        let currentQuestions = []
        let userAnswers = []
        let currentQuestionIndex = 0
        
        // ====================== ALL QUESTIONS FROM THE PDFs ======================
        const coursesData = {
            distributed: {
                name: "Distributed Systems",
                icon: "🌐",
                color: "sky",
                questions: [
                    // MCQ from الحل.pdf
               { type: "mcq", q: "What is a distributed system?", options: ["A. A single computer system", "B. A system with a global clock", "C. A system that does not allow communication between nodes", "D. A collection of autonomous computing elements that appear as a single coherent system"], correct: "D", explanation: "A collection of autonomous computing elements that appear as a single coherent system" },
{ type: "mcq", q: "Each computer in a distributed system is called:", options: ["A. Process", "B. Node", "C. Thread", "D. Server"], correct: "B", explanation: "Each computer is called a node" },
{ type: "mcq", q: "What does 'autonomous nodes' mean?", options: ["A. Nodes depend on a central controller", "B. Nodes share memory", "C. Nodes operate independently", "D. Nodes have identical clocks"], correct: "C", explanation: "Nodes operate independently" },
{ type: "mcq", q: "Why synchronization is difficult in distributed systems?", options: ["A. Nodes share the same clock", "B. There is no global clock", "C. Memory is shared", "D. Nodes are centrally controlled"], correct: "B", explanation: "There is no global clock" },
{ type: "mcq", q: "What is an overlay network in a distributed system?", options: ["A. A physical network", "B. A virtual or logical network created on top of an existing physical network", "C. A network with no communication paths", "D. A network with a single node"], correct: "B", explanation: "A virtual or logical network created on top of an existing physical network" },
{ type: "mcq", q: "In distributed systems, partial failure means:", options: ["A. The whole system stops", "B. Only one node can fail at a time", "C. Some components fail while others continue working", "D. Failures never occur"], correct: "C", explanation: "Some components fail while others continue working" },
{ type: "mcq", q: "In banking systems, which property is most critical?", options: ["A. Performance", "B. Entertainment", "C. Consistency", "D. Scalability"], correct: "C", explanation: "Banking systems require consistency" },
{ type: "mcq", q: "Which system has no global clock?", options: ["A. Parallel system", "B. Distributed system", "C. Centralized system", "D. Standalone system"], correct: "B", explanation: "Distributed system has no global clock" },
{ type: "mcq", q: "Which is NOT a challenge in distributed systems?", options: ["A. Network latency", "B. Data consistency", "C. Security", "D. Single global clock"], correct: "D", explanation: "Single global clock is NOT a challenge" },
{ type: "mcq", q: "What is an open group in a distributed system?", options: ["A. A group where only specific nodes can join", "B. A group with no communication", "C. A group where any node is allowed to join and communicate", "D. A group with a single node"], correct: "C", explanation: "Any node can join and communicate" },
{ type: "mcq", q: "What is middleware in a distributed system?", options: ["A. A hardware component in distributed systems", "B. A software layer between applications and the underlying operating systems", "C. A local operating system", "D. A network cable"], correct: "B", explanation: "A software layer between applications and the underlying operating systems" },
{ type: "mcq", q: "What is the purpose of middleware in distributed systems?", options: ["A. Replace the operating system", "B. Abstract complex interactions and hide infrastructure details", "C. Increase hardware complexity", "D. Remove network communication"], correct: "B", explanation: "Abstracts complex interactions and hides infrastructure details" },
{ type: "mcq", q: "What is the main goal of resource sharing in distributed systems?", options: ["A. Limit access to resources", "B. Facilitate users' access to remote resources", "C. Increase network latency", "D. Reduce collaboration"], correct: "B", explanation: "Facilitate users' access to remote resources" },
{ type: "mcq", q: "What does openness in distributed systems mean?", options: ["A. The ability to extend and improve the system by adding hardware or software components", "B. Limiting the number of users", "C. Reducing scalability", "D. Using a single operating system"], correct: "A", explanation: "The ability to extend and improve the system" },
{ type: "mcq", q: "Which scalability dimension refers to handling more users or processes?", options: ["A. Administrative scalability", "B. Geographical scalability", "C. Size scalability", "D. Hardware scalability"], correct: "C", explanation: "Handling more users or processes" },
{ type: "mcq", q: "Which architecture uses centralized resources and efficient access but may create a scalability bottleneck?", options: ["A. Client-Server architecture", "B. Peer-to-Peer architecture", "C. Distributed file system", "D. Virtualization"], correct: "A", explanation: "Centralized resources but may create scalability bottleneck" },
{ type: "mcq", q: "Which architecture has no central point of failure and is highly scalable?", options: ["A. Client-Server", "B. Peer-to-Peer (P2P)", "C. Database system", "D. Local system"], correct: "B", explanation: "No single point of failure and highly scalable" },
{ type: "mcq", q: "Which architecture provides decentralized resource sharing?", options: ["A. Client-Server", "B. Peer-to-Peer (P2P)", "C. Standalone system", "D. Local storage"], correct: "B", explanation: "Decentralized system" },
{ type: "mcq", q: "What does distribution transparency hide from users?", options: ["A. System complexities and internal details", "B. Hardware failures", "C. Operating systems", "D. Network cables"], correct: "A", explanation: "Hides system complexities and internal details" },
{ type: "mcq", q: "Which transparency hides where an object is located?", options: ["A. Access transparency", "B. Location transparency", "C. Replication transparency", "D. Concurrency transparency"], correct: "B", explanation: "Hide where an object is located" },
{ type: "mcq", q: "Which transparency hides how object is accessed?", options: ["A. Access", "B. Location", "C. Migration", "D. Failure"], correct: "A", explanation: "Hide how an object is accessed" },
{ type: "mcq", q: "Which transparency hides that an object may move to another location while in use?", options: ["A. Migration transparency", "B. Relocation transparency", "C. Access transparency", "D. Failure transparency"], correct: "A", explanation: "Object may move to another location while in use" },
{ type: "mcq", q: "Which transparency hides that an object is replicated across multiple servers?", options: ["A. Replication transparency", "B. Location transparency", "C. Migration transparency", "D. Access transparency"], correct: "A", explanation: "Object is replicated across multiple servers" },
{ type: "mcq", q: "Which transparency hides failures and recovery mechanisms from users?", options: ["A. Replication transparency", "B. Failure transparency", "C. Concurrency transparency", "D. Migration transparency"], correct: "B", explanation: "Hide failures and recovery" },
{ type: "mcq", q: "Which of the following is a challenge in achieving full distribution transparency?", options: ["A. Latency cannot be hidden", "B. Transparency improves performance", "C. Replicas are always synchronized", "D. Failures are easy to detect"], correct: "A", explanation: "Latency cannot be hidden" },
{ type: "mcq", q: "What is utility computing?", options: ["A. Computing resources provided as a public utility where users pay only for usage", "B. Computing resources stored locally", "C. Fixed-rate computing resources", "D. Hardware-only infrastructure"], correct: "A", explanation: "Computing resources provided as a public utility where users pay only for usage" },
{ type: "mcq", q: "What is grid computing primarily designed for?", options: ["A. Enterprise resource management", "B. Scientific computing problems", "C. Gaming systems", "D. Local networks"], correct: "B", explanation: "Scientific computing problems" },
{ type: "mcq", q: "IaaS provides:", options: ["A. Applications", "B. Development tools", "C. Virtual machines", "D. Storage only"], correct: "C", explanation: "Provides virtualized computing resources" },
{ type: "mcq", q: "PaaS provides:", options: ["A. Infrastructure", "B. Platform and tools", "C. Applications", "D. Hardware"], correct: "B", explanation: "Provides a development platform with tools and libraries" },
{ type: "mcq", q: "SaaS provides:", options: ["A. Virtual machines", "B. Software applications", "C. Network devices", "D. Databases"], correct: "B", explanation: "Delivers software applications over the internet" },
{ type: "mcq", q: "Which of the following is an example of Infrastructure as a Service (IaaS)?", options: ["A. Google Workspace", "B. Amazon EC2", "C. Dropbox", "D. Microsoft 365"], correct: "B", explanation: "Amazon EC2" },
{ type: "mcq", q: "Which of the following is an example of Platform as a Service (PaaS)?", options: ["A. Google App Engine", "B. Gmail", "C. Dropbox", "D. Microsoft 365"], correct: "A", explanation: "Google App Engine" },
{ type: "mcq", q: "Which of the following is an example of Software as a Service (SaaS)?", options: ["A. Google Compute Engine", "B. Microsoft Azure Virtual Machines", "C. Google Workspace (Gmail, Drive)", "D. Heroku"], correct: "C", explanation: "Google Workspace (Gmail, Drive)" },
{ type: "mcq", q: "Which cloud deployment model is provided by external cloud providers and shared by multiple users?", options: ["A. Public Cloud", "B. Private Cloud", "C. Hybrid Cloud", "D. Community Cloud"], correct: "A", explanation: "Shared by multiple users" },
{ type: "mcq", q: "Which cloud deployment model is used by a single organization only?", options: ["A. Public Cloud", "B. Private Cloud", "C. Hybrid Cloud", "D. Community Cloud"], correct: "B", explanation: "Used by a single organization only" },
{ type: "mcq", q: "Which cloud deployment model combines public and private clouds?", options: ["A. Public Cloud", "B. Private Cloud", "C. Hybrid Cloud", "D. Community Cloud"], correct: "C", explanation: "Combines public and private clouds" },
{ type: "mcq", q: "Which cloud deployment model is shared by organizations with similar needs?", options: ["A. Public Cloud", "B. Private Cloud", "C. Hybrid Cloud", "D. Community Cloud"], correct: "D", explanation: "Shared by organizations with similar needs" },
{ type: "mcq", q: "Which cloud computing characteristic allows users to create computing resources automatically anytime?", options: ["A. Broad Network Access", "B. On-Demand Service", "C. Resource Pooling", "D. Rapid Elasticity"], correct: "B", explanation: "Create computing resources automatically anytime" },
{ type: "mcq", q: "Which characteristic allows resources to scale up or down dynamically based on demand?", options: ["A. Measured Service", "B. Resource Pooling", "C. Rapid Elasticity", "D. Broad Network Access"], correct: "C", explanation: "Scale up or down dynamically" },
{ type: "mcq", q: "Which characteristic allows cloud services to be accessed from any device over the internet?", options: ["A. On-Demand Service", "B. Broad Network Access", "C. Resource Pooling", "D. Measured Service"], correct: "B", explanation: "Accessed from any device over the internet" },
{ type: "mcq", q: "Which cloud characteristic means usage is monitored and billed based on consumption?", options: ["A. Rapid Elasticity", "B. Resource Pooling", "C. Measured Service", "D. Broad Network Access"], correct: "C", explanation: "Usage is monitored and billed" },
{ type: "mcq", q: "Which cloud characteristic means resources are shared between many users?", options: ["A. Rapid Elasticity", "B. Resource Pooling", "C. Measured Service", "D. On-Demand Service"], correct: "B", explanation: "Resources are shared between many users" },
{ type: "mcq", q: "Which of the following is TRUE about distributed systems?", options: ["A. Use shared memory", "B. Have a global clock", "C. Nodes are independent", "D. No communication"], correct: "C", explanation: "Nodes are independent" },
{ type: "mcq", q: "Which middleware type ensures data consistency in distributed transactions?", options: ["A. Communication middleware", "B. Transaction middleware", "C. Application middleware", "D. Database middleware"], correct: "B", explanation: "Ensures data consistency" },
{ type: "mcq", q: "Which middleware type facilitates data exchange between distributed components?", options: ["A. Communication middleware", "B. Transaction middleware", "C. Database middleware", "D. Application middleware"], correct: "A", explanation: "Data exchange between components" },
{ type: "mcq", q: "Which system has no single point of failure?", options: ["A. Client-Server", "B. Peer-to-Peer", "C. Centralized", "D. Standalone"], correct: "B", explanation: "No single point of failure" },
{ type: "mcq", q: "What technology creates virtual machines (VMs)?", options: ["A. Virtualization", "B. Grid Computing", "C. Replication", "D. Resource Pooling"], correct: "A", explanation: "Technology that creates virtual machines" },
{ type: "mcq", q: "Which software manages multiple virtual machines on one physical server?", options: ["A. Hypervisor", "B. VLAN", "C. NAS", "D. SAN"], correct: "A", explanation: "Manages multiple virtual machines" },
{ type: "mcq", q: "Which type of virtualization allows multiple virtual machines to run on one physical server?", options: ["A. Server Virtualization", "B. Storage Virtualization", "C. Network Virtualization", "D. Desktop Virtualization"], correct: "A", explanation: "Multiple VMs on one server" },
{ type: "mcq", q: "Which of the following is an example of network virtualization?", options: ["A. Hypervisor", "B. VLANs", "C. SAN", "D. NAS"], correct: "B", explanation: "VLANs" },
{ type: "mcq", q: "What is a hypervisor also known as?", options: ["A. Virtual Machine Controller (VMC)", "B. Virtual Machine Monitor (VMM)", "C. Virtual Machine Allocator (VMA)", "D. Virtual Machine Scheduler (VMS)"], correct: "B", explanation: "Virtual Machine Monitor (VMM)" },
{ type: "mcq", q: "Which type of hypervisor runs directly on the host hardware?", options: ["A. Type 1 (Bare Metal Hypervisor)", "B. Type 2 (Hosted Hypervisor)", "C. Hybrid Hypervisor", "D. Embedded Hypervisor"], correct: "A", explanation: "Runs directly on hardware" },
{ type: "mcq", q: "Which of the following is an example of a Type 2 hypervisor?", options: ["A. VMware ESXi", "B. Microsoft Hyper-V", "C. VMware Workstation", "D. KVM"], correct: "C", explanation: "Runs on top of operating system" },
{ type: "mcq", q: "Virtualization allows:", options: ["A. Only one OS per server", "B. Multiple operating systems on one physical machine", "C. Only one virtual machine per server", "D. Servers without hardware"], correct: "B", explanation: "Multiple operating systems on one machine" },
{ type: "mcq", q: "Which cloud service provider is the most mature and widely adopted?", options: ["A. Microsoft Azure", "B. Google Cloud Platform (GCP)", "C. Amazon Web Services (AWS)", "D. IBM Cloud"], correct: "C", explanation: "AWS" },
{ type: "mcq", q: "Which AWS service is used for relational databases?", options: ["A. DynamoDB", "B. RDS", "C. S3", "D. EC2"], correct: "B", explanation: "Relational databases" },
{ type: "mcq", q: "What is AWS SageMaker used for?", options: ["A. Image hosting", "B. Building and deploying machine learning models", "C. Managing DNS", "D. Database administration"], correct: "B", explanation: "Build ML models" },
{ type: "mcq", q: "Which AWS service provides compute resources in the cloud?", options: ["A. EC2", "B. S3", "C. VPC", "D. RDS"], correct: "A", explanation: "Compute resources" },
{ type: "mcq", q: "Containers differ from virtual machines because containers:", options: ["A. Require a full guest OS", "B. Use hardware virtualization", "C. Share the host operating system kernel", "D. Cannot run applications"], correct: "C", explanation: "Share the host operating system kernel" },
{ type: "mcq", q: "Which cloud service model includes virtual machines and hypervisors?", options: ["A. SaaS", "B. PaaS", "C. IaaS", "D. FaaS"], correct: "C", explanation: "Includes virtual machines" },
                    // TF from document
                    
{ type: "tf",
q: "In a distributed system, nodes operate independently and can exchange information.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "A distributed system requires a global clock for synchronization.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "An overlay network is a physical network.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Peer-to-peer systems are an example of an overlay network.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "In an open group, any node is allowed to join and communicate.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "All nodes in a distributed system share the same clock.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Users usually know where data is stored in a distributed system.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Distributed systems improve system reliability.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Partial failures are common in distributed systems.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "A distributed system appears as multiple systems to users.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Network communication in distributed systems is always instantaneous.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Distribution transparency hides system complexity from users.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "If one node fails, the entire distributed system must fail.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Distributed systems can scale to support millions of users.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Public cloud is shared by multiple users.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Private cloud is used by a single organization.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Hybrid cloud combines public and private clouds.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "On-demand service allows users to create computing resources automatically anytime.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Broad network access allows services to be accessed from any device over the internet.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Resource pooling means resources are dedicated to a single user.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Rapid elasticity allows resources to scale up or down dynamically.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Measured service means usage is monitored and billed based on consumption.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Virtualization allows only one virtual machine to run on a physical server.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "A hypervisor manages multiple virtual machines on one physical server.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Server virtualization allows multiple virtual machines to run on one physical server.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Storage virtualization combines many storage devices into one logical storage pool.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Network virtualization creates virtual networks on top of physical networks.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Type 2 hypervisors run directly on the physical hardware.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Docker containers use OS-level virtualization.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "AWS SageMaker is used for image and video analysis.",
correct: false,
explanation: "False" }

]
                
            },

            network: {
                name: "Network Programming",
                icon: "🔌",
                color: "blue",
                questions: [
                    { type: "mcq", q: "Network programming is the process of:", options: ["A. Writing desktop apps", "B. Writing programs that communicate with each other over a network", "C. Designing UI only", "D. Database management"], correct: "B", explanation: "Network programming focuses on communication between programs over a network" },
                    { type: "mcq", q: "Network = ?", options: ["A. Devices only", "B. Connection only", "C. Devices + Connection + Data", "D. Internet only"], correct: "C", explanation: "Network = Devices + Connection + Data" },
                    { type: "mcq", q: "In Client-Server architecture, the server:", options: ["A. Requests services", "B. Provides services", "C. Is equal to clients", "D. Has no control"], correct: "B", explanation: "Server provides services" },
                    { type: "mcq", q: "Socket = ?", options: ["A. Port only", "B. IP only", "C. IP Address + Port Number", "D. MAC address"], correct: "C", explanation: "Socket = IP + Port number" },
                    { type: "mcq", q: "HTTPS uses port:", options: ["A. 80", "B. 21", "C. 443", "D. 25"], correct: "C", explanation: "HTTPS uses port 443" },

                    { type: "mcq", q: "Network programming mainly focuses on:", 
options: ["A. Hardware design", "B. Writing standalone programs", "C. Communication between programs over a network", "D. Database management"], 
correct: "C", explanation: "Communication between programs over a network" },

{ type: "mcq", q: "A computer network consists of:", 
options: ["A. Devices only", "B. Data only", "C. Devices + Connection + Data", "D. Internet only"], 
correct: "C", explanation: "Devices + Connection + Data" },

{ type: "mcq", q: "In Client–Server architecture, who provides the service?", 
options: ["A. Client", "B. Router", "C. Server", "D. Switch"], 
correct: "C", explanation: "Server" },

{ type: "mcq", q: "Which application uses Client–Server architecture?", 
options: ["A. Torrent", "B. Web browsing", "C. Blockchain", "D. P2P sharing"], 
correct: "B", explanation: "Web browsing" },

{ type: "mcq", q: "What is a disadvantage of Client–Server architecture?", 
options: ["A. No control", "B. Server failure affects clients", "C. Difficult communication", "D. High performance"], 
correct: "B", explanation: "Server failure affects clients" },

{ type: "mcq", q: "Which statement about Peer-to-Peer (P2P) networks is correct?", 
options: ["A. There is one central server", "B. Nodes cannot share resources", "C. Each node acts as both client and server", "D. It has centralized control"], 
correct: "C", explanation: "Each node acts as both client and server" },

{ type: "mcq", q: "A port number is used to:", 
options: ["A. Identify a computer", "B. Identify a service on a computer", "C. Identify a protocol", "D. Identify a network"], 
correct: "B", explanation: "Identify a service on a computer" },

{ type: "mcq", q: "A socket is defined as:", 
options: ["A. Port only", "B. IP address only", "C. IP address + Port number", "D. MAC address"], 
correct: "C", explanation: "IP address + Port number" },

{ type: "mcq", q: "Ports in the range 1-1023 are used for:", 
options: ["A. Custom applications", "B. Temporary services", "C. Standard network services", "D. Gaming services"], 
correct: "C", explanation: "Standard network services" },

{ type: "mcq", q: "Which port is commonly used for HTTPS?", 
options: ["A. 21", "B. 25", "C. 80", "D. 443"], 
correct: "D", explanation: "443" },

{ type: "mcq", q: "The OSI model contains:", 
options: ["A. 5 layers", "B. 6 layers", "C. 7 layers", "D. 8 layers"], 
correct: "C", explanation: "7 layers" },

{ type: "mcq", q: "Which layer is closest to the end user?", 
options: ["A. Session layer", "B. Presentation layer", "C. Application layer", "D. Transport layer"], 
correct: "C", explanation: "Application layer" },

{ type: "mcq", q: "Which layer performs data encryption?", 
options: ["A. Network layer", "B. Presentation layer", "C. Data link layer", "D. Physical layer"], 
correct: "B", explanation: "Presentation layer" },

{ type: "mcq", q: "Which layer is responsible for routing?", 
options: ["A. Network layer", "B. Transport layer", "C. Session layer", "D. Application layer"], 
correct: "A", explanation: "Network layer" },

{ type: "mcq", q: "The data unit of the transport layer is:", 
options: ["A. Packet", "B. Frame", "C. Segment", "D. Bit"], 
correct: "C", explanation: "Segment" },

{ type: "mcq", q: "Which layer uses MAC address?", 
options: ["A. Transport layer", "B. Network layer", "C. Data link layer", "D. Physical layer"], 
correct: "C", explanation: "Data link layer" },

{ type: "mcq", q: "The data unit of the physical layer is:", 
options: ["A. Frame", "B. Segment", "C. Packet", "D. Bits"], 
correct: "D", explanation: "Bits" },

{ type: "mcq", q: "What is the function of the Physical Layer?", 
options: ["A. Data Encryption", "B. Data Compression", "C. Transferring machine language to signal", "D. Logical Addressing"], 
correct: "C", explanation: "Transferring machine language to signal" },

{ type: "mcq", q: "Encapsulation means:", 
options: ["A. Removing headers", "B. Adding headers and trailers", "C. Data compression", "D. Encryption only"], 
correct: "B", explanation: "Adding headers and trailers" },

{ type: "mcq", q: "CRC is used for:", 
options: ["A. Routing", "B. Error detection", "C. Encryption", "D. Compression"], 
correct: "B", explanation: "Error detection" },
{ type: "mcq", q: "Data at the sender moves from:", 
options: ["A. Layer 1 → Layer 7", "B. Layer 7 → Layer 1", "C. Layer 3 → Layer 5", "D. Layer 2 → Layer 6"], 
correct: "B", explanation: "Layer 7 → Layer 1" },

{ type: "mcq", q: "Which error detection method uses a parity bit to check for errors?", 
options: ["A. Checksum", "B. Cyclic Redundancy Check", "C. Parity Check", "D. None of the above"], 
correct: "C", explanation: "Parity Check" },

{ type: "mcq", q: "TCP is:", 
options: ["A. Connectionless", "B. Connection-oriented", "C. Faster than UDP", "D. Unreliable"], 
correct: "B", explanation: "Connection-oriented" },

{ type: "mcq", q: "UDP is:", 
options: ["A. Reliable", "B. Connection-oriented", "C. Connectionless", "D. Slower than TCP"], 
correct: "C", explanation: "Connectionless" },

{ type: "mcq", q: "UDP is commonly used in:", 
options: ["A. File transfer", "B. Email", "C. Streaming", "D. Database systems"], 
correct: "C", explanation: "Streaming" },

{ type: "mcq", q: "TCP guarantees:", 
options: ["A. Data loss", "B. Ordered delivery", "C. Fast transmission only", "D. No error checking"], 
correct: "B", explanation: "Ordered delivery" },

{ type: "mcq", q: "Which package is used for network programming in Java?", 
options: ["A. java.io", "B. java.net", "C. java.util", "D. java.lang"], 
correct: "B", explanation: "java.net" },

{ type: "mcq", q: "Which class is used to obtain the IP address?", 
options: ["A. Socket", "B. ServerSocket", "C. InetAddress", "D. URL"], 
correct: "C", explanation: "InetAddress" },

{ type: "mcq", q: "What does the getLocalHost() method return?", 
options: ["A. The port number", "B. The hostname of the client", "C. The IP address of the local machine", "D. The server connection"], 
correct: "C", explanation: "The IP address of the local machine" },

{ type: "mcq", q: "Which class listens for incoming connections?", 
options: ["A. Socket", "B. ServerSocket", "C. DatagramSocket", "D. Scanner"], 
correct: "B", explanation: "ServerSocket" },

{ type: "mcq", q: "Which method waits for client connection?", 
options: ["A. start()", "B. connect()", "C. accept()", "D. run()"], 
correct: "C", explanation: "accept()" },

{ type: "mcq", q: "Which class creates a TCP client connection?", 
options: ["A. ServerSocket", "B. Socket", "C. InetAddress", "D. URL"], 
correct: "B", explanation: "Socket" },

{ type: "mcq", q: "Which class sends UDP datagrams?", 
options: ["A. ServerSocket", "B. Socket", "C. DatagramSocket", "D. InetAddress"], 
correct: "C", explanation: "DatagramSocket" },

{ type: "mcq", q: "What is the first step in setting up a UDP server in Java?", 
options: ["A. Create a buffer for incoming datagrams.", "B. Accept an incoming datagram.", "C. Retrieve the data from the buffer.", "D. Create a DatagramSocket object."], 
correct: "D", explanation: "Create a DatagramSocket object." },

{ type: "mcq", q: "A thread is:", 
options: ["A. Independent program", "B. Lightweight unit of execution inside a process", "C. Hardware process", "D. Network protocol"], 
correct: "B", explanation: "Lightweight unit of execution inside a process" },

{ type: "mcq", q: "Why are threads used in servers?", 
options: ["A. Increase memory usage", "B. Handle multiple clients simultaneously", "C. Reduce server speed", "D. Stop communication"], 
correct: "B", explanation: "Handle multiple clients simultaneously" },

{ type: "mcq", q: "Which method starts a new thread?", 
options: ["A. run()", "B. start()", "C. sleep()", "D. interrupt()"], 
correct: "B", explanation: "start()" },

{ type: "mcq", q: "Which method pauses a thread temporarily?", 
options: ["A. wait()", "B. notify()", "C. sleep()", "D. run()"], 
correct: "C", explanation: "sleep()" },

{ type: "mcq", q: "Which method breaks a sleeping thread?", 
options: ["A. stop()", "B. interrupt()", "C. notify()", "D. close()"], 
correct: "B", explanation: "interrupt()" },

                    { type: "tf", q: "TCP is connection-oriented", correct: true, explanation: "True" },
                    { type: "tf", q: "UDP guarantees delivery", correct: false, explanation: "False - UDP is connectionless" },
                    { type: "tf", q: "ServerSocket is used on the server side", correct: true, explanation: "True" },
                    { type: "tf", q: "accept() waits for client connection", correct: true, explanation: "True" },
                    { type: "tf", q: "UDP has dedicated socket object per client", correct: false, explanation: "False" },
                    { type: "tf", q: "A computer network consists only of devices.", correct: false, explanation: "False" },

{ type: "tf", q: "Client-Server architecture has centralized control.", correct: true, explanation: "True" },

{ type: "tf", q: "In Client-Server architecture, clients provide services to the server.", correct: false, explanation: "False" },

{ type: "tf", q: "In P2P architecture, each node can act as both client and server.", correct: true, explanation: "True" },

{ type: "tf", q: "P2P architecture has no central server.", correct: true, explanation: "True" },

{ type: "tf", q: "A port number identifies a service on a computer.", correct: true, explanation: "True" },

{ type: "tf", q: "A socket identifies a unique connection.", correct: true, explanation: "True" },

{ type: "tf", q: "A socket is defined as IP address + Port number.", correct: true, explanation: "True" },

{ type: "tf", q: "Ports in the range 1–1023 are used for custom applications.", correct: false, explanation: "False" },

{ type: "tf", q: "Port 443 is used for HTTPS.", correct: true, explanation: "True" },

{ type: "tf", q: "A single server can run multiple services using the same port number.", correct: false, explanation: "False" },

{ type: "tf", q: "The OSI model consists of seven layers.", correct: true, explanation: "True" },

{ type: "tf", q: "Data moves from Layer 1 to Layer 7 at the sender side.", correct: false, explanation: "False" },

{ type: "tf", q: "The Application layer is closest to the end user.", correct: true, explanation: "True" },

{ type: "tf", q: "The Presentation layer performs data encryption.", correct: true, explanation: "True" },

{ type: "tf", q: "The Session layer controls the dialogue between computers.", correct: true, explanation: "True" },

{ type: "tf", q: "The Transport layer uses port numbers.", correct: true, explanation: "True" },

{ type: "tf", q: "The Network layer uses MAC addresses.", correct: false, explanation: "False" },

{ type: "tf", q: "The Data Link layer is responsible for error detection.", correct: true, explanation: "True" },

{ type: "tf", q: "The Physical layer transmits data as signals.", correct: true, explanation: "True" },

{ type: "tf", q: "Encapsulation means removing headers from data.", correct: false, explanation: "False" },

{ type: "tf", q: "CRC is used for error detection.", correct: true, explanation: "True" },

{ type: "tf", q: "TCP is a connectionless protocol.", correct: false, explanation: "False" },

{ type: "tf", q: "UDP is faster than TCP.", correct: true, explanation: "True" },

{ type: "tf", q: "TCP guarantees ordered delivery of data.", correct: true, explanation: "True" },

{ type: "tf", q: "TCP guarantees delivery of data, but it does not guarantee that data will arrive in the same order it was sent.", correct: false, explanation: "False" },

{ type: "tf", q: "The java.net package is used for network programming in Java.", correct: true, explanation: "True" },

{ type: "tf", q: "The InetAddress class is used to retrieve IP addresses.", correct: true, explanation: "True" },

{ type: "tf", q: "The ServerSocket class is used to create client connections.", correct: false, explanation: "False" },

{ type: "tf", q: "The accept() method in the ServerSocket class is used to listen for incoming client connections.", correct: true, explanation: "True" },

{ type: "tf", q: "The application must be running first on the client side before the server side.", correct: false, explanation: "False" },

{ type: "tf", q: "In UDP communication, a single DatagramSocket can handle multiple clients without creating a separate socket for each one.", correct: true, explanation: "True" },

{ type: "tf", q: "A thread is a lightweight unit of execution inside a process.", correct: true, explanation: "True" },

{ type: "tf", q: "Threads share the process memory but each thread has its own stack.", correct: true, explanation: "True" },

{ type: "tf", q: "The start() method creates a completely new thread and executes the run() method concurrently.", correct: true, explanation: "True" }
                ]
            },
            embedded: {
                name: "Embedded Systems",
                icon: "⚙️",
                color: "emerald",
                questions: [
                   { type: "mcq", q: "Which is an example of an 8-bit microcontroller family mentioned in the slides?", 
options: ["A) ARM Cortex-M", "B) 8051", "C) Intel Core i7", "D) NVIDIA GPU"], 
correct: "B", explanation: "8051" },

{ type: "mcq", q: "Which factor is NOT listed as a criterion for choosing a microcontroller?", 
options: ["A) Power consumption", "B) Cost per unit", "C) Packaging", "D) Screen resolution"], 
correct: "D", explanation: "Screen resolution" },

{ type: "mcq", q: "The 8051 CPU can work on ____ bits of data at a time.", 
options: ["A) 4", "B) 8", "C) 16", "D) 32"], 
correct: "B", explanation: "8" },

{ type: "mcq", q: "Which memory type is non-volatile and commonly used to store firmware?", 
options: ["A) SRAM", "B) Flash/ROM", "C) CPU registers only", "D) Cache only"], 
correct: "B", explanation: "Flash/ROM" },

{ type: "mcq", q: "Which tool mainly converts C/C++ into machine code?", 
options: ["A) IDE", "B) Compiler", "C) Debugger", "D) Oscilloscope"], 
correct: "B", explanation: "Compiler" },

{ type: "mcq", q: "In AVR GPIO, which register is read to get the actual logic level on a pin?", 
options: ["A) DDRx", "B) PORTx", "C) PINx", "D) OCRx"], 
correct: "C", explanation: "PINx" },

{ type: "mcq", q: "If DDRB bit5 = 1, then PB5 is configured as:", 
options: ["A) INPUT", "B) ANALOG", "C) OUTPUT", "D) PWM-only"], 
correct: "C", explanation: "OUTPUT" },

{ type: "mcq", q: "When a pin is configured as INPUT (DDRx bit = 0), setting PORTx bit = 1 will:", 
options: ["A) Force the pin LOW", "B) Enable internal pull-up resistor", "C) Disable reading from pin", "D) Turn pin into OUTPUT"], 
correct: "B", explanation: "Enable internal pull-up resistor" },

{ type: "mcq", q: "PINx register is used to:", 
options: ["A) Set pin direction", "B) Write output values", "C) Enable ADC", "D) Read the actual logic level on a pin"], 
correct: "D", explanation: "Read the actual logic level on a pin" },

{ type: "mcq", q: "When a pin is configured as OUTPUT (DDRx bit = 1), setting PORTx bit = 1 makes the pin:", 
options: ["A) LOW", "B) FLOATING", "C) INPUT", "D) HIGH"], 
correct: "D", explanation: "HIGH" },

{ type: "mcq", q: "Which operation sets a bit (makes it 1)?", 
options: ["A) REG &= ~(1<<bit)", "B) REG ^= (1<<bit)", "C) REG |= (1<<bit)", "D) REG = ~(1<<bit)"], 
correct: "C", explanation: "REG |= (1<<bit)" },

{ type: "mcq", q: "The main disadvantage of using delay() is:", 
options: ["A) It increases accuracy", "B) It blocks CPU execution", "C) It reduces memory usage", "D) It enables interrupts"], 
correct: "B", explanation: "It blocks CPU execution" },

{ type: "mcq", q: "A prescaler is used to:", 
options: ["A) Increase CPU speed", "B) Divide the timer clock", "C) Reset the timer counter", "D) Enable ADC"], 
correct: "B", explanation: "Divide the timer clock" },

{ type: "mcq", q: "In CTC mode, the timer resets when:", 
options: ["A) It overflows", "B) It matches OCR1A", "C) It reaches 0", "D) It receives an external interrupt"], 
correct: "B", explanation: "It matches OCR1A" },

{ type: "mcq", q: "The register that stores the current Timer1 count is:", 
options: ["A) OCR1A", "B) TCNT1", "C) TIMSK1", "D) TCCR1A"], 
correct: "B", explanation: "TCNT1" },
{ type: "mcq", q: "Which register is used to enable Timer1 interrupts?", 
options: ["A) TCCR1A", "B) TCNT1", "C) TIMSK1", "D) OCR1A"], 
correct: "C", explanation: "TIMSK1" },

{ type: "mcq", q: "Which interrupt vector is used for Timer1 Compare Match A?", 
options: ["A) TIMER1_OVF_vect", "B) TIMER1_COMPA_vect", "C) TIMER1_COMPB_vect", "D) TIMER0_OVF_vect"], 
correct: "B", explanation: "TIMER1_COMPA_vect" },

{ type: "mcq", q: "Interrupt Service Routine (ISR) should be:", 
options: ["A) Very long", "B) Blocking", "C) Short and fast", "D) Infinite loop"], 
correct: "C", explanation: "Short and fast" },

{ type: "mcq", q: "The global interrupt enable instruction in AVR is:", 
options: ["A) sei()", "B) cli()", "C) delay()", "D) ISR()"], 
correct: "A", explanation: "sei()" },

{ type: "mcq", q: "ADC stands for:", 
options: ["A) Analog Data Converter", "B) Analog to Digital Converter", "C) Automatic Data Controller", "D) Analog Device Controller"], 
correct: "B", explanation: "Analog to Digital Converter" },

{ type: "mcq", q: "Which register selects the ADC reference voltage?", 
options: ["A) ADMUX", "B) ADCSRA", "C) DDRx", "D) PORTx"], 
correct: "A", explanation: "ADMUX" },

{ type: "mcq", q: "The ADC conversion result is stored in:", 
options: ["A) OCR1A", "B) ADCL/ADCH", "C) PORTA", "D) DDRB"], 
correct: "B", explanation: "ADCL/ADCH" },

{ type: "mcq", q: "PWM stands for:", 
options: ["A) Pulse Width Modulation", "B) Pulse Wave Modulation", "C) Power Width Mode", "D) Pulse Work Module"], 
correct: "A", explanation: "Pulse Width Modulation" },

{ type: "mcq", q: "PWM is mainly used to:", 
options: ["A) Store data", "B) Control analog output using digital signal", "C) Increase memory", "D) Reset timers"], 
correct: "B", explanation: "Control analog output using digital signal" },

{ type: "mcq", q: "Which register controls PWM duty cycle?", 
options: ["A) TCNT1", "B) OCRx", "C) DDRx", "D) PINx"], 
correct: "B", explanation: "OCRx" },

{ type: "mcq", q: "UART stands for:", 
options: ["A) Universal Asynchronous Receiver Transmitter", "B) Universal Analog Receiver Tool", "C) Unified Address Receiver Transmitter", "D) Universal Automatic Register Tool"], 
correct: "A", explanation: "Universal Asynchronous Receiver Transmitter" },

{ type: "mcq", q: "Which register holds received UART data?", 
options: ["A) UDR", "B) DDR", "C) OCR", "D) PORT"], 
correct: "A", explanation: "UDR" },

{ type: "mcq", q: "SPI communication uses how many lines (basic)?", 
options: ["A) 2", "B) 3", "C) 4", "D) 6"], 
correct: "C", explanation: "4" },

{ type: "mcq", q: "I2C communication typically uses:", 
options: ["A) 1 line", "B) 2 lines", "C) 3 lines", "D) 4 lines"], 
correct: "B", explanation: "2" },

{ type: "mcq", q: "Which communication protocol is synchronous?", 
options: ["A) UART", "B) SPI", "C) Analog", "D) ADC"], 
correct: "B", explanation: "SPI" },
{ type: "mcq", q: "Which protocol is commonly used to connect multiple devices using only two wires?", 
options: ["A) UART", "B) SPI", "C) I2C", "D) USB"], 
correct: "C", explanation: "I2C" },

{ type: "mcq", q: "In UART communication, baud rate refers to:", 
options: ["A) Data size", "B) Transmission speed", "C) Memory size", "D) Voltage level"], 
correct: "B", explanation: "Transmission speed" },

{ type: "mcq", q: "Which flag indicates that UART transmission is complete?", 
options: ["A) RXC", "B) TXC", "C) ADC", "D) SPI"], 
correct: "B", explanation: "TXC" },

{ type: "mcq", q: "Which module is used to measure analog voltage?", 
options: ["A) Timer", "B) UART", "C) ADC", "D) SPI"], 
correct: "C", explanation: "ADC" },

{ type: "mcq", q: "Which component converts digital signal to analog-like output?", 
options: ["A) ADC", "B) PWM", "C) UART", "D) Timer"], 
correct: "B", explanation: "PWM" },

{ type: "mcq", q: "Which register starts ADC conversion?", 
options: ["A) ADCSRA", "B) DDRx", "C) OCRx", "D) PORTx"], 
correct: "A", explanation: "ADCSRA" },

{ type: "mcq", q: "Which bit enables ADC module?", 
options: ["A) ADEN", "B) ADSC", "C) ADIF", "D) ADIE"], 
correct: "A", explanation: "ADEN" },

{ type: "mcq", q: "The purpose of interrupts is to:", 
options: ["A) Delay execution", "B) Stop CPU permanently", "C) Respond immediately to events", "D) Increase memory"], 
correct: "C", explanation: "Respond immediately to events" },

{ type: "mcq", q: "Which function disables global interrupts?", 
options: ["A) sei()", "B) cli()", "C) ISR()", "D) delay()"], 
correct: "B", explanation: "cli()" },

{ type: "mcq", q: "Timer overflow occurs when:", 
options: ["A) Timer reaches zero", "B) Timer matches OCR", "C) Timer exceeds maximum value", "D) Interrupt occurs"], 
correct: "C", explanation: "Timer exceeds maximum value" },

{ type: "mcq", q: "Which timer mode resets the counter automatically at compare match?", 
options: ["A) Normal mode", "B) PWM mode", "C) CTC mode", "D) Sleep mode"], 
correct: "C", explanation: "CTC mode" },

{ type: "mcq", q: "Which register configures timer mode?", 
options: ["A) TCCR1A / TCCR1B", "B) DDRx", "C) PORTx", "D) PINx"], 
correct: "A", explanation: "TCCR1A / TCCR1B" },

{ type: "mcq", q: "Which register stores compare value in Timer1?", 
options: ["A) TCNT1", "B) OCR1A", "C) TIMSK1", "D) DDRB"], 
correct: "B", explanation: "OCR1A" },

{ type: "mcq", q: "Which device typically uses PWM for speed control?", 
options: ["A) LED", "B) Motor", "C) Switch", "D) Sensor"], 
correct: "B", explanation: "Motor" },

{ type: "mcq", q: "Which type of memory loses data when power is turned off?", 
options: ["A) ROM", "B) Flash", "C) EEPROM", "D) RAM"], 
correct: "D", explanation: "RAM" },

{ type: "mcq", q: "EEPROM memory is mainly used to:", 
options: ["A) Store temporary data", "B) Store permanent small data", "C) Increase CPU speed", "D) Display graphics"], 
correct: "B", explanation: "Store permanent small data" },

{ type: "mcq", q: "Which port direction register controls data direction?", 
options: ["A) PORTx", "B) PINx", "C) DDRx", "D) OCRx"], 
correct: "C", explanation: "DDRx" },

{ type: "mcq", q: "Which register is used to write output values to pins?", 
options: ["A) PORTx", "B) PINx", "C) DDRx", "D) ADMUX"], 
correct: "A", explanation: "PORTx" },

{ type: "mcq", q: "Which register reads input pin values?", 
options: ["A) PORTx", "B) PINx", "C) DDRx", "D) TCCR"], 
correct: "B", explanation: "PINx" },

{ type: "mcq", q: "Microcontrollers are mainly used in:", 
options: ["A) Desktop computers", "B) Embedded systems", "C) Gaming consoles only", "D) Supercomputers"], 
correct: "B", explanation: "Embedded systems" },





  
{ type: "tf",
q: "Timer starts counting when the timer enable bit (CS) can change at anytime.",
correct: "True" },

{ type: "tf",
q: "Timer resets automatically when compare match occurs in CTC mode.",
correct: "True" },

{ type: "tf",
q: "Compare Match value should be written before starting the timer.",
correct: "True" },

{ type: "tf",
q: "Interrupt flag must be cleared manually after compare match.",
correct: "False" },

{ type: "tf",
q: "Global interrupt must be enabled to use timer interrupt.",
correct: "True" },

{ type: "tf",
q: "Timer starts counting when the timer enable bit (CS) can change at anytime.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Timer resets automatically when compare match occurs in CTC mode.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Compare Match value should be written before starting the timer.",
correct: true,
explanation: "True" },

{ type: "tf",
q: "Interrupt flag must be cleared manually after compare match.",
correct: false,
explanation: "False" },

{ type: "tf",
q: "Global interrupt must be enabled to use timer interrupt.",
correct: true,
explanation: "True" }


                ]
            }
        }
        
        // ====================== PRAYER PAGE ======================
        function prayAndProceed() {
            const main = document.getElementById('prayer-main')
            main.style.transition = 'all 1s ease'
            main.style.opacity = '0'
            main.style.transform = 'translateY(-50px)'
            
            setTimeout(() => {
                document.getElementById('page1').classList.add('hidden')
                document.getElementById('page2').classList.remove('hidden')
                document.getElementById('page2').classList.add('page')
            }, 800)
        }
        
        // ====================== LOGIN ======================
        function handleLogin(e) {
            e.preventDefault()
            
            currentStudent = {
                name: document.getElementById('student-name').value,
                id: document.getElementById('student-id').value,
                section: document.getElementById('section').value
            }
            
            document.getElementById('page2').classList.add('hidden')
            document.getElementById('page3').classList.remove('hidden')
            
            // Welcome text
            document.getElementById('welcome-text').innerHTML = `
                أهلاً <span class="text-sky-400">${currentStudent.name}</span> 
                <span class="text-xs bg-white/10 px-3 py-1 rounded-3xl">${currentStudent.section}</span>
            `
            document.getElementById('student-info-badge').innerHTML = `
                ${currentStudent.name} • ${currentStudent.id}
            `
        }
        
        function logout() {
            if (confirm('هل تريد تسجيل الخروج؟')) {
                location.reload()
            }
        }
        
        // ====================== SELECT COURSE ======================
        function selectCourse(key) {
            selectedCourseKey = key
            const course = coursesData[key]
            
            // Show course image area
            const container = document.getElementById('course-image-container')
            container.classList.remove('hidden')
            document.getElementById('course-image').innerHTML = `
                <div class="text-9xl mb-4">${course.icon}</div>
                <div class="text-3xl font-bold text-white">${course.name}</div>
                <div class="text-sky-300 text-sm">Ready for testing ؟</div>
            `
            
            // Start quiz immediately after selection (as per request)
            startQuiz(key)
        }
        
        function startQuiz(courseKey) {
            const course = coursesData[courseKey]
            currentQuestions = course.questions
            userAnswers = new Array(currentQuestions.length).fill(null)
            currentQuestionIndex = 0
            
            document.getElementById('page3').classList.add('hidden')
            document.getElementById('quiz-page').classList.remove('hidden')
            
            document.getElementById('quiz-course-name').innerHTML = `
                <i class="fa-solid fa-book"></i> ${course.name}
            `
            document.getElementById('total-q').textContent = currentQuestions.length
            
            loadCurrentQuestion()
        }
        
        function loadCurrentQuestion() {
            const q = currentQuestions[currentQuestionIndex]
            document.getElementById('current-q').textContent = currentQuestionIndex + 1
            document.getElementById('progress-bar').style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`
            
            document.getElementById('question-text').textContent = q.q
            
            // Badge type
            const badge = document.getElementById('question-type-badge')
            if (q.type === 'mcq') {
                badge.innerHTML = `<span class="bg-amber-400 text-black px-3 py-1 rounded-2xl">MCQ</span>`
                badge.className = 'inline-flex items-center px-4 py-1 text-xs font-bold rounded-2xl mb-6 bg-amber-400 text-black'
                
                const container = document.getElementById('mcq-options')
                container.classList.remove('hidden')
                document.getElementById('tf-options').classList.add('hidden')
                
                let html = ''
                q.options.forEach((opt, i) => {
                    const letter = String.fromCharCode(65 + i)
                    html += `
                    <label onclick="selectMCQ('${letter}')" class="cursor-pointer flex items-center gap-4 p-6 border border-white/30 hover:border-sky-400 rounded-3xl transition-all">
                        <div class="w-8 h-8 flex items-center justify-center text-xl font-bold bg-white/10 rounded-2xl">${letter}</div>
                        <span class="flex-1">${opt}</span>
                        <input type="radio" name="mcq" class="hidden" id="opt-${letter}">
                    </label>`
                })
                container.innerHTML = html
            } else {
                badge.innerHTML = `<span class="bg-purple-400 text-white px-3 py-1 rounded-2xl">True / False</span>`
                badge.className = 'inline-flex items-center px-4 py-1 text-xs font-bold rounded-2xl mb-6 bg-purple-400 text-white'
                
                document.getElementById('mcq-options').classList.add('hidden')
                document.getElementById('tf-options').classList.remove('hidden')
            }
            
            // Disable next until answered
            document.getElementById('next-btn').disabled = true
        }
        
        function selectMCQ(letter) {
            userAnswers[currentQuestionIndex] = letter
            document.getElementById('next-btn').disabled = false
        }
        
        function answerTF(val) {
            userAnswers[currentQuestionIndex] = val ? 'True' : 'False'
            document.getElementById('next-btn').disabled = false
        }
        
        function nextQuestion() {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++
                loadCurrentQuestion()
            } else {
                showResults()
            }
        }
        
        function showResults() {
            document.getElementById('quiz-page').classList.add('hidden')
            document.getElementById('results-page').classList.remove('hidden')
            
            let correct = 0
            const wrongListHTML = []
            
            currentQuestions.forEach((q, i) => {
                const userAns = userAnswers[i]
                let isCorrect = false
                
                if (q.type === 'mcq') {
                    isCorrect = userAns === q.correct
                } else {
                    isCorrect = (userAns === 'True' && q.correct === true) || (userAns === 'False' && q.correct === false)
                }
                
                if (isCorrect) correct++
                else {
                    wrongListHTML.push(`
                    <div class="flex justify-between items-center bg-white/5 p-5 rounded-3xl border border-red-400/30">
                        <div class="flex-1">
                            <div class="text-sm text-slate-400">Q${i+1}</div>
                            <div class="font-medium">${q.q}</div>
                            <div class="text-red-400 text-xs mt-2">إجابتك: ${userAns || 'لم تجب'} • الصحيح: ${q.type==='mcq' ? q.correct : (q.correct ? 'صح' : 'خطأ')}</div>
                        </div>
                        <div class="text-xs bg-red-400 text-white px-5 h-fit py-1 rounded-2xl">${q.explanation}</div>
                    </div>`)
                }
            })
            
            const total = currentQuestions.length
            const percentage = Math.round((correct / total) * 100)
            
            document.getElementById('total-score').textContent = `${correct} / ${total}`
            document.getElementById('correct-count').textContent = correct
            document.getElementById('wrong-count').textContent = total - correct
            document.getElementById('percentage-text').innerHTML = `${percentage}<span class="text-2xl">%</span>`
            
            document.getElementById('result-student-info').innerHTML = `
                ${currentStudent.name} • ${currentStudent.id} • ${coursesData[selectedCourseKey].name}
            `
            
            const listEl = document.getElementById('wrong-questions-list')
            if (wrongListHTML.length === 0) {
                listEl.innerHTML = `<div class="text-emerald-400 text-center py-8">مبروك! لم تخطئ في أي سؤال 🎉</div>`
            } else {
                listEl.innerHTML = wrongListHTML.join('')
            }
            
            // Confetti if score >= 80
            if (percentage >= 80) confettiBurst()
        }
        
        function confettiBurst() {
            const colors = ['#0ea5e9', '#10b981', '#eab308']
            for (let i = 0; i < 150; i++) {
                const confetti = document.createElement('div')
                confetti.style.position = 'fixed'
                confetti.style.zIndex = '9999'
                confetti.style.left = Math.random() * 100 + 'vw'
                confetti.style.top = '-20px'
                confetti.style.width = '12px'
                confetti.style.height = '12px'
                confetti.style.background = colors[Math.floor(Math.random()*colors.length)]
                confetti.style.opacity = Math.random()
                confetti.style.transform = `rotate(${Math.random()*360}deg)`
                document.body.appendChild(confetti)
                
                const duration = Math.random() * 4000 + 3000
                confetti.animate([
                    { transform: `translateY(0) rotate(0deg)` },
                    { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random()*2000}deg)` }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
                })
                
                setTimeout(() => confetti.remove(), duration)
            }
        }
        
        function restartSameCourse() {
            document.getElementById('results-page').classList.add('hidden')
            startQuiz(selectedCourseKey)
        }
        
        function backToDashboard() {
            document.getElementById('results-page').classList.add('hidden')
            document.getElementById('page3').classList.remove('hidden')
            document.getElementById('course-image-container').classList.add('hidden')
        }
        
        function exitQuiz() {
            if (confirm('هل تريد الخروج من الاختبار؟')) {
                document.getElementById('quiz-page').classList.add('hidden')
                document.getElementById('page3').classList.remove('hidden')
            }
        }
        
        // ====================== START THE APP ======================
        window.onload = function() {
            initTailwind()
            createParticles()
            console.log('%c✅ - بنك أسئلة جمال رأفت', 'background:#0ea5e9;color:white;padding:4px 8px;border-radius:4px')
            console.log('جميع الأسئلة مستخرجة من الـ PDFs المرفقة (MCQ + True/False فقط)')
        }