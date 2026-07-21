---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives:

- Understand the role of **AWS Security Hub** and **Amazon GuardDuty** in AWS security monitoring.
- Protect web applications with **AWS WAF**.
- Implement application authentication and authorization with **Amazon Cognito**.
- Learn container deployment with **Amazon ECR** and **Amazon ECS**.
- Deploy a containerized application using **AWS Fargate**.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| :-- | :-- | :-- | :-- | :-- |
| 1 | **Study AWS Security Hub and Amazon GuardDuty**<br>- Learn security posture, findings, and security standards.<br>- Enable Security Hub and review security findings.<br>- Enable GuardDuty and understand threat detection.<br>- Compare the roles of Security Hub and GuardDuty. | 25/05/2026 | 25/05/2026 | [AWS Security Hub](https://docs.aws.amazon.com/securityhub/)<br>[Amazon GuardDuty](https://docs.aws.amazon.com/guardduty/) |
| 2 | **Study AWS WAF**<br>- Learn Web ACL, Rule, Rule Group, Managed Rules, and Rate-Based Rules.<br>- Create a Web ACL and associate it with a CloudFront Distribution or Application Load Balancer.<br>- Test allowed and blocked requests.<br>- Review WAF metrics and logs. | 26/05/2026 | 26/05/2026 | [AWS WAF](https://docs.aws.amazon.com/waf/)<br>[What is AWS WAF?](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html) |
| 3 | **Study Amazon Cognito**<br>- Learn User Pools, Identity Pools, users, groups, and JWT tokens.<br>- Create a User Pool and configure user sign-in.<br>- Review authentication and authorization flows.<br>- Protect an API with Cognito-issued tokens. | 27/05/2026 | 27/05/2026 | [Amazon Cognito](https://docs.aws.amazon.com/cognito/)<br>[What is Amazon Cognito?](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html) |
| 4 | **Study Amazon ECR and Amazon ECS**<br>- Learn container images, repositories, clusters, tasks, Task Definitions, and Services.<br>- Create an Amazon ECR Repository.<br>- Push an application image to ECR.<br>- Create an ECS Cluster and configure a Task Definition.<br>- Deploy an ECS Service using an ECR image. | 28/05/2026 | 28/05/2026 | [Amazon ECR](https://docs.aws.amazon.com/ecr/)<br>[Amazon ECS](https://docs.aws.amazon.com/ecs/) |
| 5 | **Perform an AWS Fargate Hands-on Lab**<br>- Deploy a container image from ECR to ECS using **AWS Fargate**.<br>- Configure an ECS Service and verify task health.<br>- Connect the service to an Application Load Balancer.<br>- Access the containerized application and review CloudWatch logs.<br>- Clean up ECS, Fargate, ECR, and load balancer resources. | 29/05/2026 | 29/05/2026 | [AWS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)<br>[Amazon ECS getting started](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/get-set-up-for-amazon-ecs.html) |

### Week 6 Achievements:

- Enabled and reviewed security findings with **AWS Security Hub** and threat detections with **Amazon GuardDuty**.
- Created an **AWS WAF Web ACL** and tested request filtering rules.
- Created an **Amazon Cognito User Pool** and understood token-based authentication.
- Created an **Amazon ECR Repository** and managed container images.
- Created an **Amazon ECS Cluster**, Task Definition, and Service.
- Deployed a containerized application to **AWS Fargate** and accessed it through an Application Load Balancer.
- Practiced reviewing logs, validating resource health, and cleaning up AWS resources.
