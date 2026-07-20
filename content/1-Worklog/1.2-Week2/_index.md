---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Week 2 Objectives:

- Study the **Virtual Machine** model on AWS through **Amazon EC2**.
- Understand **EC2 Instance** components such as **AMI**, **Instance Type**, **Key Pair**, and **Security Group**.
- Practice connecting to and managing a server through **SSH** and **AWS Systems Manager Session Manager**.
- Learn **EC2 Auto Scaling** and become familiar with **Amazon Lightsail**.
- Study AWS storage services, including **Amazon EBS**, **Amazon S3**, and **Amazon EFS**.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| :-- | :-- | :-- | :-- | :-- |
| 1 | **Study Amazon EC2 and Compute VM**<br>- Learn **Virtual Machine**, **EC2 Instance**, **AMI**, **Instance Type**, **Key Pair**, and **Security Group**.<br>- Learn the EC2 Instance lifecycle.<br>- Distinguish **Public IP**, **Private IP**, and **Elastic IP**. | 27/04/2026 | 27/04/2026 | [Amazon EC2](https://docs.aws.amazon.com/ec2/)<br>[Introduction to Amazon EC2](https://000004.awsstudygroup.com/vi/) |
| 2 | **Deploy and access an EC2 Instance**<br>- Create an **EC2 Instance** from an **AMI**.<br>- Configure **Instance Type**, **Key Pair**, and **Security Group**.<br>- Connect through **SSH**.<br>- Create an **IAM Role** for EC2 and attach **AmazonSSMManagedInstanceCore**.<br>- Attach the Role to EC2 and check the **SSM Agent** status.<br>- Access EC2 through **AWS Systems Manager Session Manager**.<br>- Compare **SSH** and **SSM** access methods. | 28/04/2026 | 28/04/2026 | [Amazon EC2](https://docs.aws.amazon.com/ec2/)<br>[AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/)<br>[Introduction to Amazon EC2](https://000004.awsstudygroup.com/vi/) |
| 3 | **Study EC2 Auto Scaling and Amazon Lightsail**<br>- Learn **Launch Template**, **Auto Scaling Group**, **Minimum Capacity**, **Desired Capacity**, **Maximum Capacity**, **Scaling Policy**, and **Health Check**.<br>- Create an **Amazon Lightsail Instance**.<br>- Configure a **Static IP** and **Firewall Rules**. | 29/04/2026 | 29/04/2026 | [EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)<br>[Amazon Lightsail](https://docs.aws.amazon.com/lightsail/)<br>[Deploying FCJ Management with Auto Scaling Group](https://000006.awsstudygroup.com/vi/)<br>[Amazon Lightsail Workshop - Cost Optimization on AWS](https://000045.awsstudygroup.com/vi/) |
| 4 | **AWS Storage Fundamentals (Amazon S3)**<br>- Study the **Object Storage** model and **Amazon S3** architecture.<br>- Learn about **Bucket**, **Object**, **Object Key**, and **Region**.<br>- Create and configure an **S3 Bucket**.<br>- Practice uploading, downloading, copying, and deleting **Objects**.<br>- Configure **Static Website Hosting** on **Amazon S3**.<br>- Learn about **Cross-Origin Resource Sharing (CORS)** and configure a **CORS Policy** for frontend access to S3.<br>- Study **Storage Class**, **Versioning**, **Lifecycle Rule**, and **Server-Side Encryption**.<br>- Learn about **Block Public Access**, **Bucket Policy**, and access permissions through **IAM Policy**.<br>- Manage S3 through the **AWS Management Console** and **AWS CLI**. | 30/04/2026 | 30/04/2026 | [Amazon S3](https://docs.aws.amazon.com/s3/)<br>[Hosting a Static Website with Amazon S3](https://000057.awsstudygroup.com/vi/)<br>[S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)<br>[S3 CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html) |
| 5 | **Study S3 Access Points, S3 Storage Classes, data lifecycle, and cold storage**<br>- Learn about **S3 Access Point** and how to create dedicated access points for applications or user groups.<br>- Study **S3 Storage Classes** and selection criteria based on data access frequency.<br>- Learn about **S3 Lifecycle Rule** for automatically transitioning or deleting Objects over time.<br>- Study cold storage services, including **S3 Glacier Instant Retrieval**, **S3 Glacier Flexible Retrieval**, and **S3 Glacier Deep Archive**.<br>- Compare retrieval time, minimum storage duration, and cost across **S3 Glacier Storage Classes**.<br>- Practice configuring **S3 Access Point**, **Lifecycle Rule**, and Storage Class transitions. | 01/05/2026 | 01/05/2026 | [Amazon S3 Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html)<br>[S3 Storage Classes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)<br>[S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) |
| 6 | **Study Amazon EFS and consolidate the practical work**<br>- Learn the **File Storage** model of **Amazon EFS**.<br>- Create an **EFS File System** and **Mount Target**.<br>- Connect EFS to EC2 and verify read/write operations.<br>- Compare **EBS**, **S3**, and **EFS**.<br>- Delete unused resources after practice. | 02/05/2026 | 02/05/2026 | [Amazon EFS](https://docs.aws.amazon.com/efs/) |

### Week 2 Achievements:

- Deployed and managed an **EC2 Instance** using **IAM Role**, **SSH**, and **SSM**.
- Understood and practiced **EC2 Auto Scaling** and **Amazon Lightsail**.
- Created, attached, and backed up an **EBS Volume**.
- Managed **S3 Bucket**, **Objects**, **Static Website Hosting**, and **CORS**.
- Understood **S3 Access Point**, **Storage Class**, **Lifecycle Rule**, and **Cold Storage**.
- Connected and used **Amazon EFS** with EC2.
- Distinguished **Block Storage**, **Object Storage**, and **File Storage**.
