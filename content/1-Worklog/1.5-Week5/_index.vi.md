---
title: "Worklog Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:

- Quản lý secrets an toàn với **AWS Secrets Manager** và **AWS KMS**.
- Mô tả và triển khai tài nguyên AWS dưới dạng code bằng **AWS CloudFormation**.
- Build và kiểm thử source code bằng **AWS CodeBuild**.
- Tự động hóa quy trình build và deployment với **AWS CodePipeline**.
- Xây dựng CI/CD pipeline cho ứng dụng serverless đã phát triển trong tuần 4.

### Các công việc thực hiện trong tuần này:

| Ngày | Nội dung thực hiện | Ngày bắt đầu | Ngày kết thúc | Tài liệu tham khảo |
| :-- | :-- | :-- | :-- | :-- |
| 1 | **Tìm hiểu AWS Secrets Manager và AWS KMS**<br>- Tìm hiểu cách lưu trữ an toàn database credentials, API keys và application secrets.<br>- Tạo và truy xuất secret bằng IAM permissions.<br>- Tìm hiểu mã hóa dữ liệu at rest bằng AWS KMS.<br>- Thay thế credentials hard-code bằng cơ chế truy xuất secret trong lúc runtime. | 18/05/2026 | 18/05/2026 | [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/)<br>[AWS KMS](https://docs.aws.amazon.com/kms/)<br>[Workshop AWS 000096](https://000096.awsstudygroup.com/vi/)<br>[Workshop AWS 000033](https://000033.awsstudygroup.com/vi/) |
| 2 | **Tìm hiểu AWS CloudFormation**<br>- Tìm hiểu Template, Stack, Parameter, Output, Resource và Change Set.<br>- Viết một template YAML cơ bản.<br>- Triển khai và cập nhật tài nguyên AWS thông qua CloudFormation Stack.<br>- Xóa Stack và kiểm tra việc dọn dẹp tài nguyên. | 19/05/2026 | 19/05/2026 | [AWS CloudFormation](https://docs.aws.amazon.com/cloudformation/)<br>[CloudFormation hoạt động như thế nào](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-overview.html)<br>[Workshop AWS CloudFormation](https://000037.awsstudygroup.com/vi/) |
| 3 | **Tìm hiểu AWS CodeBuild**<br>- Tìm hiểu build project, source configuration, environment, build phase và artifact.<br>- Tạo file `buildspec.yml`.<br>- Chạy các lệnh build và test.<br>- Kiểm tra build log và artifact được tạo ra. | 20/05/2026 | 20/05/2026 | [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/)<br>[Build commands](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref.html)<br>[Workshop AWS 000023](https://000023.awsstudygroup.com/vi/) |
| 4 | **Tìm hiểu AWS CodePipeline**<br>- Tìm hiểu Source, Build, Deploy, Stage, Action và Pipeline.<br>- Kết nối source repository với CodePipeline.<br>- Thêm CodeBuild làm một build stage.<br>- Kiểm tra pipeline execution và cách xử lý khi có lỗi. | 21/05/2026 | 21/05/2026 | [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/)<br>[CodeBuild với CodePipeline](https://docs.aws.amazon.com/codebuild/latest/userguide/how-to-create-pipeline.html)<br>[Workshop AWS 000023](https://000023.awsstudygroup.com/vi/) |
| 5 | **Thực hiện CI/CD Hands-on Lab**<br>- Xây dựng pipeline cho kiến trúc **API Gateway → Lambda → DynamoDB**.<br>- Sử dụng CodeBuild để kiểm tra source code.<br>- Sử dụng CloudFormation để tạo hoặc cập nhật tài nguyên.<br>- Lưu cấu hình nhạy cảm trong Secrets Manager.<br>- Kiểm tra deployment thông qua API request và CloudWatch Logs.<br>- Dọn dẹp các tài nguyên tạm thời sau khi hoàn thành lab. | 22/05/2026 | 22/05/2026 | [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/)<br>[AWS Serverless Workshops](https://workshops.serverlessland.com/) |

### Kết quả đạt được trong tuần:

- Lưu trữ và truy xuất application secrets an toàn bằng **AWS Secrets Manager** và hiểu vai trò của **AWS KMS**.
- Tạo CloudFormation template và triển khai tài nguyên AWS thông qua Stack.
- Cấu hình **AWS CodeBuild** để chạy build, test và tạo artifact.
- Tạo **AWS CodePipeline** với source stage và build stage.
- Hoàn thành CI/CD Hands-on Lab cho ứng dụng serverless sử dụng **API Gateway, Lambda, DynamoDB, CloudFormation, CodeBuild và CodePipeline**.
- Thực hành kiểm tra build log, kết quả deployment, IAM permissions và dọn dẹp tài nguyên.
