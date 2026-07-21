---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Week 5 Objectives:

- Manage application secrets securely with **AWS Secrets Manager** and **AWS KMS**.
- Define and provision AWS resources as code with **AWS CloudFormation**.
- Build and test application source code with **AWS CodeBuild**.
- Automate build and deployment workflows with **AWS CodePipeline**.
- Build a CI/CD pipeline for the serverless application developed in Week 4.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| :-- | :-- | :-- | :-- | :-- |
| 1 | **Study AWS Secrets Manager and AWS KMS**<br>- Learn how to store database credentials, API keys, and application secrets securely.<br>- Create and retrieve a secret using IAM permissions.<br>- Learn encryption at rest with AWS KMS.<br>- Replace hard-coded credentials with runtime secret retrieval. | 18/05/2026 | 18/05/2026 | [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)<br>[AWS KMS](https://docs.aws.amazon.com/kms/)<br>[AWS Workshop 000096](https://000096.awsstudygroup.com/vi/)<br>[AWS Workshop 000033](https://000033.awsstudygroup.com/vi/) |
| 2 | **Study AWS CloudFormation**<br>- Learn Templates, Stacks, Parameters, Outputs, Resources, and Change Sets.<br>- Write a basic YAML template.<br>- Deploy and update AWS resources through a CloudFormation Stack.<br>- Delete the Stack and review resource cleanup. | 19/05/2026 | 19/05/2026 | [AWS CloudFormation](https://docs.aws.amazon.com/cloudformation/)<br>[How CloudFormation works](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-overview.html)<br>[AWS CloudFormation Workshop](https://000037.awsstudygroup.com/vi/) |
| 3 | **Study AWS CodeBuild**<br>- Learn build projects, source configuration, environment, build phases, and artifacts.<br>- Create a `buildspec.yml` file.<br>- Run build and test commands.<br>- Review build logs and generated artifacts. | 20/05/2026 | 20/05/2026 | [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/)<br>[Build commands](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref.html)<br>[AWS Workshop 000023](https://000023.awsstudygroup.com/vi/) |
| 4 | **Study AWS CodePipeline**<br>- Learn Source, Build, Deploy, Stage, Action, and Pipeline concepts.<br>- Connect a source repository to CodePipeline.<br>- Add CodeBuild as a build stage.<br>- Review pipeline execution and failure handling. | 21/05/2026 | 21/05/2026 | [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/)<br>[CodeBuild with CodePipeline](https://docs.aws.amazon.com/codebuild/latest/userguide/how-to-create-pipeline.html)<br>[AWS Workshop 000023](https://000023.awsstudygroup.com/vi/) |
| 5 | **Perform a CI/CD Hands-on Lab**<br>- Build a pipeline for **API Gateway → Lambda → DynamoDB**.<br>- Use CodeBuild to validate the source code.<br>- Use CloudFormation to provision or update resources.<br>- Store sensitive configuration in Secrets Manager.<br>- Verify deployment through API requests and CloudWatch Logs.<br>- Clean up temporary resources after the lab. | 22/05/2026 | 22/05/2026 | [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/)<br>[AWS Serverless Workshops](https://workshops.serverlessland.com/) |

### Week 5 Achievements:

- Stored and retrieved application secrets securely using **AWS Secrets Manager** and understood the role of **AWS KMS**.
- Created a CloudFormation template and deployed AWS resources through a Stack.
- Configured **AWS CodeBuild** to run build and test commands and produce artifacts.
- Created an **AWS CodePipeline** with source and build stages.
- Completed a CI/CD Hands-on Lab for a serverless application using **API Gateway, Lambda, DynamoDB, CloudFormation, CodeBuild, and CodePipeline**.
- Practiced reviewing build logs, deployment results, IAM permissions, and resource cleanup.
