
[[SAA questions#6]]
- C. Amazon Kinesis Data Streams  - clickstreams rapid and continuous data intake and aggregation
- D. Amazon Kinesis Data Firehose - pipeline to warehouses like redshift
- E. Amazon Kinesis Data Analytics

EventBridge formerly cloudwatch events

![https://docs.aws.amazon.com/prescriptive-guidance/latest/load-balancer-stickiness/subnets-routing.html][https://docs.aws.amazon.com/images/prescriptive-guidance/latest/load-balancer-stickiness/images/inbound.png]

### Elastic Network Interfaces
AWS resource is referred to as a network interface in the AWS Management Console
[Amazon Elastic Compute Cloud - User Guide](https://docs.aws.amazon.com/pdfs/AWSEC2/latest/UserGuide/ec2-ug.pdf#using-eni)

### FSx lustre
https://aws.amazon.com/fsx/lustre/

### FSx windows
**Amazon FSx for Windows File Server** provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Service Message Block (SMB) protocol. It is built on Windows Server, delivering a wide range of administrative features such as user quotas, end-user file restore, and Microsoft Active Directory (AD) integration. Amazon FSx is accessible from Windows, Linux, and MacOS compute instances and devices. Thousands of compute instances and devices can access a file system concurrently.
### S3 File gateway
Amazon S3 File Gateway seamlessly connects on-premises applications to the cloud to store and access archive repositories, application data, and database backups as durable objects in Amazon S3.

S3 File Gateway is used for on-premises data intensive applications that need file protocol access to objects in S3. 

# Amazon S3 File Gateway

#### Store and access objects in Amazon S3 from NFS or SMB file data with local caching


### Datasync
	A service that accelerates the transfer of data from an on-
	premises data center to AWS over the Internet in a cost-effective
	manner.
For online data migrations, you can use [AWS DataSync](https://aws.amazon.com/datasync/). To migrate data offline, you can use [AWS Snow Family](https://aws.amazon.com/snow/).

## ML
[[SAA ML#**Amazon Macie**]] personal information and data security


## Security services
Security services with appropriate use cases (for example, Amazon Cognito, Amazon GuardDuty, Amazon Macie)
### Cognito
Implement secure, frictionless customer identity and access management that scales.
[[SAA ML#**Amazon Macie**]]
### Guard duty
GuardDuty is a threat detection service that provides monitoring and anomaly detection for malicious activities.

### AWS Glue extract
AWS Glue is a serverless data integration service that makes data preparation simpler, faster, and cheaper.
### Amazon API Gateway
### Transit gateway - learn more about this
Transit Gateway simply connects your VPC and on-premises networks through a central hub. It acts as a cloud router that allows you to integrate multiple networks.
**time mode 3:** A Transit Gateway allows you to easily interconnect multiple VPCs (including those from different AWS accounts) in a scalable and simplified manner. By associating the Transit Gateway with the Direct Connect gateway, all the AWS accounts can access the on-premises services over the dedicated connection, with minimal complexity and operational overhead.
![[Pasted image 20250110231833.png]]
**(from timed mode 6)**
A _transit gateway_ is a network transit hub that you can use to interconnect your virtual private clouds (VPCs) and on-premises networks. As your cloud infrastructure expands globally, inter-Region peering connects transit gateways together using the AWS Global Infrastructure. Your data is automatically encrypted and never travels over the public internet.
A transit gateway attachm0ent is both a source and a destination of packets. You can attach the following resources to your transit gateway:

– One or more VPCs.
– One or more VPN connections
– One or more AWS Direct Connect gateways
– One or more Transit Gateway Connect attachments
– One or more transit gateway peering connections
### AWS CloudHSM
###  AWS Transfer for SFTP endpoint
### ElasticBean stalk
https://stackoverflow.com/questions/66846750/what-is-the-difference-between-aws-lambda-aws-elastic-beanstalk

| Name                     | Default | Adjustable     |
| ------------------------ | ------- | -------------- |
| VPCs per Region          | 5       | Yes            |
| Subnets per VPC          | 200     | Yes            |
| IPv4 CIDR blocks per VPC | 5       | Yes (up to 50) |
| IPv6 CIDR blocks per VPC | 5       | Yes (up to 50) |
- RDS with recovery manager (RMAN)
- EFS is not supported on Windows instances. No, users should continue using SMB, which EFS doesn't support
- CloudFormation templates
- Study about Raid Levels
- Use Amazon EBS volumes to store the files. Configure the Amazon Data Lifecycle Manager (DLM)
- Retention policy vs lifecycle
- learn about Use suspend and resume scaling. in ASG
- IAM database authentication
- elastic load balancer vs application load balancer
- Enhanced monitoring in EC2 vs [[SAA questions#13]]
- AWS Inspector for EC2
- - AWS Directory Service Simple AD
- AWS Directory Service AD Connector
- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html
- SAML 2.0
- **DynamoDB Streams Kinesis Adapter**
- **Kinesis Client Library (KCL)**
- Enhanced monitoring is the feature of RDS
- Flow logs vs cloudwatch logs --flow log capture network traffic data
- Global Accelerator has automatic failover and is perfect for this scenario with VoIP https://aws.amazon.com/global-accelerator/faqs/ .. Network Loadbalancer is already integrated with Route 53. (ET 29)
- Deploying a gateway VPC endpoint for Amazon S3 is the most cost-effective way for the company to avoid Regional data transfer charges. A gateway VPC endpoint is a network gateway that allows communication between instances in a VPC and a service, such as Amazon S3, without requiring an Internet gateway or a NAT device. Data transfer between the VPC and the service through a gateway VPC endpoint is free of charge, while data transfer between the VPC and the Internet through an Internet gateway or NAT device is subject to data transfer charges. By using a gateway VPC endpoint, the company can reduce its data transfer costs by eliminating the need to transfer data through the NAT gateway to access Amazon S3. This option would provide the required connectivity to Amazon S3 and minimize data transfer charges.
- - C. Create a DynamoDB table with provisioned capacity and auto scaling. -- **provisioned capacity** for know pattern
- EBS volumes are not Multi-AZ. EBS io2 types are multi-attach within the same AZ. EFS is multi-AZ --question 100
- SQS Duplicate can't be tolerated? -- use FIFO SQS [[SAA questions#20 - timed test 4]]
- static AnyCast IP address is primarily used for AWS Global Accelerator and not for security group configurations
- **Deploy a VPC endpoint on each region to enable private connection** is incorrect. VPC endpoints are region-specific only and do not support inter-region communication.
- Amazon RDS Custom provides a limited amount of operating system access of the database server
- In the case of S3 event notification only one destination type can be specified for each event notification. https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html#supported-notification-destinations
- A. Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3. Most Voted
- You can use CloudFront to deliver video on demand (VOD) or live streaming video using any HTTP origin Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses
- Geographic (Geo) Match Conditions in AWS WAF. This new condition type allows you to use AWS WAF to restrict application access based on the geographic location of your viewers. With geo match conditions you can choose the countries from which AWS WAF should allow access. 170 question in examtopics
- **Retrieve the data using Amazon Glacier Select.** Glacier Select allows you to query specific data from the archive without retrieving the entire object, which can reduce costs and time. However, it doesn't guarantee retrieval within 15 minutes, as queries might take longer for large datasets.
- Elastic Fabric Adapters to bypass OS communication in networking
- Aurora Parallel Query
- To ensure that an Amazon Elastic Container Service (ECS) application has permission to access Amazon Simple Storage Service (S3), the correct solution is to create an AWS Identity and Access Management (IAM) role with the necessary S3 permissions and specify that role as the taskRoleArn in the task definition for the ECS application. **185 examtopics**
- Keyword: "manage fine-grained permissions for data" Data Lake Using Lake Formation: manage fine-grained permissions for the data with ease. **204 examtopics**
- Data ingestion through Kinesis data streams will require manual intervention to provide more shards as data size grows. Kinesis firehose will ingest data with the least operational overhead. **225 examtopics**
- Use AWS Glue to process the raw data in Amazon S3
- **Amazon Redshift Spectrum** can directly use S3 data https://chatgpt.com/share/67812e01-a57c-800d-bd88-64fa97ddb92d
- maximum backup retention period for automated backup is only 35 days.
- pre-signed url only to upload file to S3. for accessing setup OAI and CF signed and signed cookies
-   Enable access logs(has IP address, latencies, request path) on the Application Load Balancer. Integrate the Amazon ECS cluster with Amazon CloudWatch Application Insights to analyze traffic patterns and simplify troubleshooting.
-  The Amazon Managed Service for Prometheus is a Prometheus-compatible monitoring and alerting service, which is not used to stream live video feeds. This service makes it easy for you to monitor containerized applications and infrastructure at scale but not stream live feeds. Amazon Fraud Detector is a fully managed service that identifies potentially fraudulent online activities such as online payment fraud and fake account creation. Take note that the Amazon Fraud Detector service is not capable of detecting unauthorized personnel through live streaming feeds alone.
- Submit a capacity increase request to AWS as you are initially limited to only 12 instances per Placement Group.
- Study need of DAX dynamodb accela
- **Amazon Data Firehose** is designed for **near-real-time data delivery** (with a minimum buffer interval of 60 seconds), not millisecond response times.
- For S3 cross region replication to work, Object versioning must be enabled
- Study about cloudwatch logs agent
- ( POint from timed mode 6)
- An Elastic Fabric Adapter (EFA) is simply a network device that you can attach to your Amazon EC2 instance that enables you to achieve the application performance of an on-premises HPC cluster, with scalability, flexibility, and elasticity provided by the AWS Cloud. Although EFA is scalable, the Spot Fleet configuration of this option doesn’t have Auto Scaling involved. 
- The default timeout is 3 seconds, and the maximum execution duration per request in AWS Lambda is 900 seconds, which is equivalent to 15 minutes.
- the Route 53 Resolver DNS Firewall can only filter and regulate outbound DNS traffic for your virtual private cloud (VPC). It can neither do active traffic flow inspection nor block any vulnerability exploits.
- -
- - A. Use AWS Secrets Manager. Turn on automatic rotation. Most Voted. B is wrong because parameter store does not support auto rotation, unless the customer writes it themselves, A is the answer.
- An RDS instance can be stopped for up to seven days so it cannot be A. "The instance stops running, up to a maximum of 7 consecutive days." https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_StopInstance.html
- KMS Multi region keys are to be used for a multi region S3 encryption (ET 36 client sitting)
- How can Session Manager benefit my organization? Ans: No open inbound ports and no need to manage bastion hosts or SSH keys (ET 37)
- S3 Lock Governance = corrupt government official S3 Lock Compliance = honest solution architect! (ET 53)
- NLBs support HTTP, HTTPS and TCP health checks: https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-health-checks.html (check HealthCheckProtocol) But NLBs only accept either selecting EC2 instances or IP addresses directly as targets. You can't provide a URL to your endpoints, only a health check path (if you're using HTTP or HTTPS health checks).
	- A URL includes the hostname. The health check path is only the path portion. For example, URL = https://i-0123456789abcdef.us-west-2.compute.internal/index.html health check path= /index.html (ET 70)
- "you manage the multi-Region key in each Region independently. Neither AWS nor AWS KMS ever automatically creates or replicates multi-Region keys into any Region on your behalf. AWS managed keys, the KMS keys that AWS services create in your account for you, are always single-Region keys." (ET 134)
- Compute Savings Plans can be used for EC2 instances and Fargate. Whereas EC2 Savings Plans support EC2 only.(https://www.examtopics.com/exams/amazon/aws-certified-solutions-architect-associate-saa-c03/view/14/# "Upvote")
- Shield - Load Balancer, CF, Route53 
- WAF - CF, ALB, API Gateway
- ET 184 confusing
- S3 key rotation is determined based on AWS master Key rotation which cannot guarantee the key is rotated with in a 365 day period. In ET 202 different answer is given: The good answer was B before may 2022, because the rotation schedule for AWS managed keys was 3 years (SSE-S3 is based on it)


### AWS Fargate
Serverless compute for containers

## Data analytics and visualization services with appropriate use cases (for example, Amazon Athena, AWS Lake Formation, Amazon QuickSight)
### AWS Lake Formation
Use AWS Lake Formation to consolidate data (like S3 bucket) from multiple accounts into a single account.
### Quicksight
QuickSight is used to created dashboard from S3, RDS, Redshift, Aurora, Athena, OpenSearch, Timestream

### Athena
_Amazon Athena_ is a serverless, interactive analytics service that provides a simplified and flexible way to analyze petabytes of data where it lives.
Amazon Athena is a serverless, interactive query service that allows users to analyze data in Amazon Simple Storage Service (S3) using standard SQL

## Cross account

### Firewall manager
### AWS Resource Access Manager (RAM)
AWS Resource Access Manager (RAM) is a service that enables you to easily and securely share AWS resources with any AWS account or within your AWS Organization. You can share AWS Transit Gateways, Subnets, AWS License Manager configurations, and Amazon Route 53 Resolver rules resources with RAM.


---

For **High Performance Computing (HPC)** workloads that require **low latency, high throughput**, and **optimized inter-instance communication**, the **Elastic Fabric Adapter (EFA)** is the most suitable solution.

---

### AWS Certificate Manager
syllabus - Encrypting data in transit (for example, AWS Certificate Manager [ACM] using TLS)

### Amazon inspector vs gaurd duty
### Amazon Inspector
Amazon Inspector automatically discovers workloads, such as Amazon EC2 instances, containers, and Lambda functions, and scans them for software vulnerabilities and unintended network exposure.

### Amazon EMR cluster


### AWS config
- automated checks against compliance like `iam-password-policy`
- continuous monitoring

### AWS Storage Gateway file gateway vs DATA sync
maybe datasync is used for migration and file gateway is used to connect on premise


## AWS Kineses
Amazon Kinesis Data Streams is a highly scalable and durable service that enables real-time processing of streaming data at a high volume and high rate. You can use Kinesis Data Streams to collect and process the clickstream data in real-time. Amazon Kinesis Data Firehose is a fully managed service that loads streaming data into data stores and analytics tools. You can use Kinesis Data Firehose to transmit the data from Kinesis Data Streams to an Amazon S3 data lake. Once the data is in the data lake, you can use Amazon Redshift to load the data and perform analysis on it. Amazon Redshift is a fully managed, petabyte-scale data warehouse service that allows you to quickly and efficiently analyze data using SQL and your existing business intelligence tools.

refer question [[SAA questions#19 - aws kineses]]

---
## Systems Manager
### Fleet manager
The Fleet Manager is just one of the many capabilities of the AWS Systems Manager that provides a unified user interface (UI) experience in remotely managing your nodes/EC2 instances running on AWS or on-premises. This service is not capable of managing the software licenses of your EC2 instances.

**152 examtopics**
https://aws.amazon.com/blogs/database/schedule-amazon-rds-stop-and-start-using-aws-lambda/ It is option D. Option A could have been applicable had it been AWS Systems Manager State Manager & not AWS Systems Manager Session Manager

AWS Systems Manager Patch Manager: AWS Systems Manager Patch Manager is designed for OS patching, not third-party software patching (ET 50)

---
## S3
By default, all Amazon S3 resources such as buckets, objects, and related subresources are private, which means that only the AWS account holder (resource owner) that created it has access to the resource. The resource owner can optionally grant access permissions to others by writing an access policy. In S3, you also set the permissions of the object during upload to make it public.

Amazon S3 offers access policy options broadly categorized as resource-based policies and user policies. Access policies you attach to your resources (buckets and objects) are referred to as resource-based policies.

For example, bucket policies and access control lists (ACLs) are resource-based policies. You can also attach access policies to users in your account. These are called user policies. You may choose to use resource-based policies, user policies, or some combination of these to manage permissions to your Amazon S3 resources.

You can also manage the public permissions of your objects during upload. Under _**Manage public permissions**,_ you can grant read access to your objects to the general public (everyone in the world) for all of the files that you're uploading. Granting public read access is applicable to a small subset of use cases, such as when buckets are used for websites.


## Application Integration
### AWS AppFlow
Amazon AppFlow is a fully managed integration service that enables you to securely transfer and transform data between software as a service (SaaS) applications such as Salesforce, SAP, Google Analytics, Facebook Ads, and ServiceNow, and AWS services like Amazon Simple Storage Service (S3) and Amazon Redshift

### AWS AppSync
facilitate multiple data source and build backend easily

### AWS MQ


### CloudFront

learn concepts from this question  [[SAA questions#24 - timed mode 3 cloudfront]]
- cloudfront Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data—and have the credentials to decrypt it—are able to do so.

### AWS Transfer family
[[SAA questions#27 - examtopics 188]] create publically accessible endpoint to share the files
AWS Transfer Family securely scales your recurring business-to-business file transfers to AWS Storage services using SFTP, FTPS, FTP, and AS2 protocols. https://aws.amazon.com/aws-transfer-family/


- AWS GuardDuty: Monitors for threats. 
- AWS Security Hub: Provides a view of security alerts.

### Cloud Tower

	timed mode 3: AWS Control Tower service is commonly used to set up and govern a secure multi-account AWS environment. This service is not used to restrict access from invoking an action to a specific resource, such as AWS Config, in your AWS account.

### AWS Wavelength
It embeds AWS compute and storage services within 5G
networks, providing mobile edge computing infrastructure for
developing, deploying, and scaling ultra-low-latency
applications.

### Proton
It is a tool that streamlines application deployment workflows to
improve organizational agility for DevOps and platform
engineers.

### AWS Data exchange - final test dojo

AWS Data Exchange is primarily designed for data providers to share data with subscribers in a controlled manner, but it does not provide the necessary granularity and flexibility for managing access to datasets within a data lake. Combining Data Exchange with Lake Formation's "Grant" command may lead to overlapping access controls and increased complexity without centralizing access management.

---
If you are using the CloudFront geo restriction feature to block a country from accessing your content, any request from that country is blocked and is not forwarded to AWS WAF Classic. So if you want to allow or block requests based on geography plus other AWS WAF Classic conditions, you should _not_ use the CloudFront geo restriction feature. Instead, you should use an AWS WAF Classic geo match condition. **Final test dojo**

## Route 53
Route 53 supports multiple routing policies, including:

- **Simple Routing:** Directs all traffic to a single resource.
- **Latency-Based Routing:** Routes users to the AWS region with the lowest latency.
- **Geo-Location Routing:** Directs traffic based on the user’s geographic location.
- **Weighted Routing:** Splits traffic based on assigned weights.
- **Failover Routing:** Routes traffic to a backup resource in case of failure.
- **Health Checks & Failover**
    - Route 53 **monitors** the health of AWS resources (e.g., EC2, S3, CloudFront) and automatically **reroutes traffic** in case of failures.
- **Integration with AWS Services**
    - Route 53 integrates with AWS services like **CloudFront, S3, Elastic Load Balancing (ELB), and EC2**.
## AWS Pinpoint

## AWS Elastic Disaster Recovery (AWS DRS)
see the question to understand the topic. (keyword cost-effective)
[[SAA questions#30 - AWS Elastic Disaster Recovery (AWS DRS)]]

### Opensearch cluster for Dashboard (6th timed mode)

- see about Security hub vs Network Firewall vs WAF vs  Route 53 Resolver DNS Firewall
- Is NLB or ALB limited to single region?

AWS Network Firewall is a managed service that makes it easy to deploy essential network protections for all of your Amazon Virtual Private Clouds (VPCs). The service can be setup with just a few clicks and scales automatically with your network traffic, so you don’t have to worry about deploying and managing any infrastructure. AWS Network Firewall’s flexible rules engine lets you define firewall rules that give you fine-grained control over network traffic, such as blocking outbound Server Message Block (SMB) requests to prevent the spread of malicious activity.
AWS Network Firewall includes features that provide protections from common network threats. AWS Network Firewall’s stateful firewall can incorporate context from traffic flows, like tracking connections and protocol identification, to enforce policies such as preventing your VPCs from accessing domains using an unauthorized protocol. AWS Network Firewall’s intrusion prevention system (IPS) provides active traffic flow inspection so you can identify and block vulnerability exploits using signature-based detection. AWS Network Firewall also offers web filtering that can stop traffic to known bad URLs and monitor fully qualified domain names.

![Firewall image][https://media.tutorialsdojo.com/aws-network-firewall-diagram.png]

## AWS Global Accelerator vs CloudFront • (ET 12)
They both use the AWS global network and its edge locations around the world • Both services integrate with AWS Shield for DDoS protection. • CloudFront • Improves performance for both cacheable content (such as images and videos) • Dynamic content (such as API acceleration and dynamic site delivery) • Content is served at the edge • Global Accelerator • Improves performance for a wide range of applications over TCP or UDP • Proxying packets at the edge to applications running in one or more AWS Regions. • Good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP • Good for HTTP use cases that require static IP addresses • Good for HTTP use cases that required deterministic, fast regional failover

----
The solution that will accomplish this goal is A: Turn on AWS Config with the appropriate rules. AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. You can use AWS Config to monitor and record changes to the configuration of your Amazon S3 buckets. By turning on AWS Config and enabling the appropriate rules, you can ensure that your S3 buckets do not have unauthorized configuration changes.

AWS Trusted Advisor (Option B) is a service that provides best practice recommendations for your AWS resources, but it does not monitor or record changes to the configuration of your S3 buckets. Amazon Inspector (Option C) is a service that helps you assess the security and compliance of your applications. While it can be used to assess the security of your S3 buckets, it does not monitor or record changes to the configuration of your S3 buckets. Amazon S3 server access logging (Option D) enables you to log requests made to your S3 bucket. While it can help you identify changes to your S3 bucket, it does not monitor or record changes to the configuration of your S3 bucket.

----


| EC2 | Enhanced networking  |
| --- | -------------------- |
| RDS | Performance insights |

---

## AWS PrivateLink 
It provides private connectivity between VPCs, AWS services, and your on-premises networks, without exposing your traffic to the public internet. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify your network architecture. Interface **VPC endpoints**, powered by AWS PrivateLink, connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace. https://aws.amazon.com/privatelink/
