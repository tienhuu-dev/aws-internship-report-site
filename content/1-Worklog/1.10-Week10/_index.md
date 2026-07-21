---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 Objectives:

* Deploy the application and database layers of the cloud architecture.
* Configure managed database, compute, load balancing, and asynchronous messaging services.
* Establish the integration flow between S3 Event Notifications and SQS.

### Tasks to be carried out this week:
| Day | Task                                                                                                                                                                                                   | Start Date | Completion Date | Reference Material                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------- | ----------------------------------------- |
| 1   | Deploy the **RDS DB Subnet Group** and **RDS PostgreSQL** in private subnets to provide the database layer for the application. | 06/22/2026 | 06/22/2026      |
| 2   | Deploy the **EC2 Application Servers** in the application layer and configure connectivity to the PostgreSQL database. | 06/23/2026 | 06/23/2026      |
| 3   | Deploy the **Application Load Balancer** to distribute requests across the application servers and monitor the health of the target instances. | 06/24/2026 | 06/24/2026      |
| 4   | Create an **SQS Queue** and **Dead-Letter Queue (DLQ)** to support asynchronous message processing and store messages that cannot be processed successfully. | 06/25/2026 | 06/25/2026      |
| 5   | Configure **S3 Event Notification** to send events from the S3 Bucket to the **SQS Queue** when file upload activities occur. | 06/26/2026 | 06/26/2026      |

### Week 10 Achievements:

* Deployed the **RDS DB Subnet Group** and **RDS PostgreSQL** in private subnets.
* Deployed the **EC2 Application Servers** and configured connectivity to the PostgreSQL database.
* Deployed the **Application Load Balancer** to distribute requests across the application servers.
* Created an **SQS Queue** and **Dead-Letter Queue (DLQ)** for asynchronous message processing.
* Configured **S3 Event Notification** to send file upload events to the **SQS Queue**.
