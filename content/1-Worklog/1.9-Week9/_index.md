---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives:

* Analyze the project requirements and design a three-tier cloud architecture.
* Identify and select suitable AWS services for each architectural layer.
* Create, review, and finalize the cloud architecture diagram based on feedback from FCAJ group members.
* Estimate the total infrastructure cost of the proposed architecture.
* Deploy the foundational AWS networking and storage components required for the project.
* Configure network connectivity, traffic control, private access to Amazon S3, and storage resources.

### Tasks to be carried out this week:
| Day | Task                                                                                                                                                                                                   | Start Date | Completion Date | Reference Material                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------- | ----------------------------------------- |
| 1   | Complete the design of the cloud architecture diagram based on a three-tier architecture for the project.                                                                                            | 06/15/2026 | 06/15/2026      |                                           |
| 2   | Analyze the project requirements and define the components of the three-tier cloud architecture, including the presentation, application, and data layers.                                                  | 06/16/2026 | 06/16/2026      |                                           |
| 3   | Select suitable AWS services for each architectural layer and create the initial cloud architecture diagram, including the main data flow between components.                                  | 06/17/2026 | 06/17/2026      |                                           |
| 4   | Finalize the cloud architecture diagram based on feedback from FCAJ group members <br> Calculate the total infrastructure cost.                                                                                                                          | 06/18/2026 | 06/18/2026      |                                           |
| 5   | Deploy the core **AWS networking infrastructure** for the project. Create and configure the **Amazon VPC**, including the required **public and private subnets** and **route tables**. Attach an **Internet Gateway** to provide Internet connectivity for the public network components. Configure **Security Groups** to control inbound and outbound traffic between the deployed resources according to the proposed three-tier architecture. | 06/19/2026 | 06/19/2026      |                                           |
| 6   | Deploy the additional networking and storage components required by the cloud architecture. Configure a **NAT Instance** using an **EC2 instance** deployed in the public subnet to provide outbound Internet access for resources in private subnets. Create an **S3 Gateway Endpoint** to enable private connectivity from the VPC to Amazon S3 without routing S3 traffic through the public Internet. Configure separate **S3 Buckets** for static website hosting and file uploads, with the purpose of keeping website content and uploaded data independently managed. | 06/20/2026 | 06/20/2026      |                                           |

### Week 9 Achievements:

* Completed the design of the project's cloud architecture diagram based on a three-tier architecture.

* Analyzed the project requirements and defined the components of the three-tier cloud architecture.

* Selected suitable AWS services for each architectural layer and created the initial cloud architecture diagram.

* Finalized the architecture diagram based on feedback and recommendations from FCAJ group members and calculated the estimated total cost of the proposed cloud infrastructure.

* Successfully deployed the core networking components, including **Amazon VPC**, **public and private subnets**, **route tables**, **Internet Gateway**, and **Security Groups**.

* Deployed a **NAT Instance** using an **EC2 instance** in the public subnet to provide outbound Internet access for resources in private subnets.

* Created an **S3 Gateway Endpoint** to enable private connectivity from the VPC to Amazon S3 without routing S3 traffic through the public Internet.

* Configured separate **S3 Buckets** for static website hosting and file uploads to manage website content and uploaded data independently.
