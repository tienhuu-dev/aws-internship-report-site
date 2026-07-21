---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Week 3 Objectives:

* Learn how to accelerate Amazon S3 static website delivery with **Amazon CloudFront**.
* Understand advanced AWS networking with **Public Subnets**, **Private Subnets**, **NAT Gateway**, **Route Tables**, **Security Groups**, and **Network ACLs**.
* Learn how to distribute application traffic with an **Application Load Balancer**.
* Study managed relational databases and high availability with **Amazon RDS**.
* Understand NoSQL data storage with **Amazon DynamoDB**.
* Learn how **Amazon ElastiCache** improves application performance by reducing database load.

### Tasks to be carried out this week:
| Day | Task                                                                                                                                                                                                   | Start Date | Completion Date | Reference Material                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------- | ----------------------------------------- |
| 1   | **Study Amazon CloudFront and CDN**<br>- Learn the concepts of **CDN**, **Distribution**, **Origin**, **Behavior**, **Edge Location**, and **Cache**.<br>- Create a CloudFront Distribution with **Amazon S3** as the Origin.<br>- Access the S3 static website through CloudFront.<br>- Practice **Cache Invalidation** after updating website content.<br>- Compare direct S3 access with CloudFront access. | 04/05/2026 | 04/05/2026 | [Amazon CloudFront](https://docs.aws.amazon.com/cloudfront/)<br>[CloudFront with Amazon S3](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.SimpleDistribution.html)<br>[AWS CloudFront Workshop](https://000094.awsstudygroup.com/vi/) |
| 2   | **Study Advanced AWS Networking**<br>- Review **Public Subnet** and **Private Subnet**.<br>- Learn about **NAT Gateway**, **Route Table**, **Internet Gateway**, **Security Group**, and **Network ACL**.<br>- Compare traffic flow between Public and Private Subnets.<br>- Create a NAT Gateway for outbound internet access from a Private Subnet.<br>- Configure routing rules and verify connectivity.<br>- Compare **Security Group** and **Network ACL**. | 05/05/2026 | 05/05/2026 | [Amazon VPC](https://docs.aws.amazon.com/vpc/)<br>[NAT gateways](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) |
| 3   | **Study Application Load Balancer**<br>- Learn the role of a **Load Balancer** in distributing incoming traffic.<br>- Understand **Application Load Balancer**, **Listener**, **Listener Rule**, **Target Group**, and **Health Check**.<br>- Create two EC2 Instances as application targets.<br>- Create a Target Group and register the EC2 Instances.<br>- Create an Application Load Balancer in public subnets.<br>- Configure a listener to forward HTTP traffic to the Target Group.<br>- Verify traffic distribution and instance health.<br>- Compare direct EC2 access with access through the Load Balancer. | 06/05/2026 | 06/05/2026 | [Elastic Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/)<br>[Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html) |
| 4   | **Study Advanced Amazon RDS**<br>- Review the role of **Amazon RDS** in managed relational databases.<br>- Learn about **DB Instance**, **DB Subnet Group**, **Security Group**, **Backup**, **Snapshot**, and **Multi-AZ Deployment**.<br>- Create an RDS database in Private Subnets.<br>- Configure a DB Subnet Group and restrict access through a Security Group.<br>- Connect an EC2 application to the RDS database.<br>- Create a manual snapshot and restore the database from the snapshot.<br>- Compare Single-AZ and Multi-AZ deployments.<br>- Verify database connectivity and clean up unused resources. | 07/05/2026 | 07/05/2026 | [Amazon RDS](https://docs.aws.amazon.com/rds/)<br>[Amazon RDS Multi-AZ deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)<br>[Working with DB subnet groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) |
| 5   | **Study Amazon DynamoDB and Amazon ElastiCache**<br>- Learn the NoSQL model of **Amazon DynamoDB**.<br>- Understand **Table**, **Item**, **Attribute**, **Partition Key**, and **Sort Key**.<br>- Create a DynamoDB table and perform basic **Create, Read, Update, and Delete (CRUD)** operations.<br>- Compare DynamoDB with relational databases such as Amazon RDS.<br>- Learn the role of **Amazon ElastiCache** as an in-memory caching layer.<br>- Understand **Redis** and **Memcached**.<br>- Learn how caching reduces database load and improves application response time.<br>- Compare application access with and without a caching layer. | 08/05/2026 | 08/05/2026 | [Amazon DynamoDB](https://docs.aws.amazon.com/dynamodb/)<br>[DynamoDB core components](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html)<br>[Amazon ElastiCache](https://docs.aws.amazon.com/elasticache/)<br>[What is Amazon ElastiCache?](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html)<br>[AWS Workshop 000060](https://000060.awsstudygroup.com/vi/)<br>[AWS Workshop 000061](https://000061.awsstudygroup.com/vi/) |

### Week 3 Achievements:

* Created a **CloudFront Distribution** using **Amazon S3** as the Origin and practiced cache invalidation.
* Configured advanced VPC networking and understood the traffic flow between Public and Private Subnets.
* Created an **Application Load Balancer**, configured a Target Group and Listener, and verified target health.
* Created an **Amazon RDS** database in a Private Subnet and practiced access control, snapshots, and Multi-AZ concepts.
* Created a **DynamoDB Table** and performed basic CRUD operations using NoSQL data modeling concepts.
* Understood how **Amazon ElastiCache**, Redis, and Memcached can reduce database load and improve response time.
* Compared relational databases, NoSQL databases, and in-memory caching based on their use cases.
