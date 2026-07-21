---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:

- Hiểu vai trò của **AWS Security Hub** và **Amazon GuardDuty** trong việc giám sát bảo mật AWS.
- Bảo vệ ứng dụng web bằng **AWS WAF**.
- Triển khai xác thực và phân quyền ứng dụng bằng **Amazon Cognito**.
- Tìm hiểu triển khai container với **Amazon ECR** và **Amazon ECS**.
- Triển khai ứng dụng container bằng **AWS Fargate**.

### Các công việc thực hiện trong tuần này:

| Ngày | Nội dung thực hiện | Ngày bắt đầu | Ngày kết thúc | Tài liệu tham khảo |
| :-- | :-- | :-- | :-- | :-- |
| 1 | **Tìm hiểu AWS Security Hub và Amazon GuardDuty**<br>- Tìm hiểu security posture, findings và security standards.<br>- Bật Security Hub và kiểm tra các security findings.<br>- Bật GuardDuty và tìm hiểu cơ chế phát hiện mối đe dọa.<br>- So sánh vai trò của Security Hub và GuardDuty. | 25/05/2026 | 25/05/2026 | [AWS Security Hub](https://docs.aws.amazon.com/securityhub/)<br>[Amazon GuardDuty](https://docs.aws.amazon.com/guardduty/) |
| 2 | **Tìm hiểu AWS WAF**<br>- Tìm hiểu Web ACL, Rule, Rule Group, Managed Rules và Rate-Based Rules.<br>- Tạo Web ACL và liên kết với CloudFront Distribution hoặc Application Load Balancer.<br>- Kiểm tra request được cho phép và bị chặn.<br>- Kiểm tra WAF metrics và logs. | 26/05/2026 | 26/05/2026 | [AWS WAF](https://docs.aws.amazon.com/waf/)<br>[AWS WAF là gì?](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html) |
| 3 | **Tìm hiểu Amazon Cognito**<br>- Tìm hiểu User Pool, Identity Pool, user, group và JWT token.<br>- Tạo User Pool và cấu hình user sign-in.<br>- Tìm hiểu luồng authentication và authorization.<br>- Bảo vệ API bằng token do Cognito cấp. | 27/05/2026 | 27/05/2026 | [Amazon Cognito](https://docs.aws.amazon.com/cognito/)<br>[Amazon Cognito là gì?](https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html) |
| 4 | **Tìm hiểu Amazon ECR và Amazon ECS**<br>- Tìm hiểu container image, repository, cluster, task, Task Definition và Service.<br>- Tạo Amazon ECR Repository.<br>- Push application image lên ECR.<br>- Tạo ECS Cluster và cấu hình Task Definition.<br>- Triển khai ECS Service sử dụng image từ ECR. | 28/05/2026 | 28/05/2026 | [Amazon ECR](https://docs.aws.amazon.com/ecr/)<br>[Amazon ECS](https://docs.aws.amazon.com/ecs/) |
| 5 | **Thực hiện AWS Fargate Hands-on Lab**<br>- Triển khai container image từ ECR lên ECS bằng **AWS Fargate**.<br>- Cấu hình ECS Service và kiểm tra trạng thái task.<br>- Kết nối service với Application Load Balancer.<br>- Truy cập ứng dụng container và kiểm tra CloudWatch logs.<br>- Xóa tài nguyên ECS, Fargate, ECR và load balancer sau khi hoàn thành. | 29/05/2026 | 29/05/2026 | [AWS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html)<br>[Bắt đầu với Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/get-set-up-for-amazon-ecs.html) |

### Kết quả đạt được trong tuần:

- Bật và kiểm tra security findings bằng **AWS Security Hub** cũng như threat detections bằng **Amazon GuardDuty**.
- Tạo **AWS WAF Web ACL** và kiểm tra các rule lọc request.
- Tạo **Amazon Cognito User Pool** và hiểu cơ chế xác thực bằng token.
- Tạo **Amazon ECR Repository** và quản lý container image.
- Tạo **Amazon ECS Cluster**, Task Definition và Service.
- Triển khai ứng dụng container lên **AWS Fargate** và truy cập thông qua Application Load Balancer.
- Thực hành kiểm tra logs, xác minh trạng thái tài nguyên và dọn dẹp tài nguyên AWS.
