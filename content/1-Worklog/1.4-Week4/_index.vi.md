---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:

- Tìm hiểu mô hình điện toán serverless với **AWS Lambda**.
- Xây dựng HTTP API bằng **Amazon API Gateway**.
- Tìm hiểu cơ chế tích hợp bất đồng bộ với **Amazon SQS** và **Amazon SNS**.
- Giám sát ứng dụng serverless bằng **Amazon CloudWatch**.
- Xây dựng và kiểm tra serverless API sử dụng **API Gateway, Lambda, DynamoDB và CloudWatch**.

### Các công việc thực hiện trong tuần này:

| Ngày | Nội dung thực hiện | Ngày bắt đầu | Ngày kết thúc | Tài liệu tham khảo |
| :-- | :-- | :-- | :-- | :-- |
| 1 | **Tìm hiểu AWS Lambda**<br>- Tìm hiểu điện toán serverless, Function, Runtime, Handler, Trigger và Execution Role.<br>- Tạo và invoke một Lambda Function.<br>- Kiểm tra execution log và cấu hình tài nguyên của Lambda. | 11/05/2026 | 11/05/2026 | [AWS Lambda](https://docs.aws.amazon.com/lambda/)<br>[AWS Lambda là gì?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) |
| 2 | **Tìm hiểu Amazon API Gateway**<br>- Tìm hiểu API, Resource, Route, Method, Stage và Integration.<br>- Tạo HTTP API và kết nối với Lambda Function.<br>- Gửi request kiểm tra API và kiểm tra response status code. | 12/05/2026 | 12/05/2026 | [Amazon API Gateway](https://docs.aws.amazon.com/apigateway/)<br>[HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) |
| 3 | **Tìm hiểu Amazon SQS và Amazon SNS**<br>- Tìm hiểu message queue, topic, publisher và subscriber.<br>- Tạo SQS Queue và SNS Topic.<br>- Gửi message và tìm hiểu cơ chế xử lý bất đồng bộ.<br>- So sánh trường hợp sử dụng của SQS và SNS. | 13/05/2026 | 13/05/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/)<br>[Amazon SNS](https://docs.aws.amazon.com/sns/)<br>[Workshop AWS SQS và SNS](https://000077.awsstudygroup.com/vi/) |
| 4 | **Tìm hiểu Amazon CloudWatch**<br>- Tìm hiểu Metrics, Logs, Log Groups, Dashboards và Alarms.<br>- Kiểm tra log của Lambda và API Gateway.<br>- Tạo alarm cơ bản và sử dụng CloudWatch để giám sát hoạt động ứng dụng. | 14/05/2026 | 14/05/2026 | [Amazon CloudWatch](https://docs.aws.amazon.com/cloudwatch/)<br>[Giám sát Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-cloudwatchlogs.html)<br>[Workshop AWS CloudWatch](https://000008.awsstudygroup.com/vi/) |
| 5 | **Thực hiện Serverless Hands-on Lab**<br>- Xây dựng API sử dụng **API Gateway → Lambda → DynamoDB**.<br>- Kiểm tra các thao tác create, read, update và delete.<br>- Cấu hình CloudWatch logging và kiểm tra luồng request.<br>- Kiểm tra IAM permissions và xóa các tài nguyên không còn sử dụng. | 15/05/2026 | 15/05/2026 | [AWS Serverless Workshops](https://workshops.serverlessland.com/)<br>[Amazon DynamoDB](https://docs.aws.amazon.com/dynamodb/) |

### Kết quả đạt được trong tuần:

- Tạo và invoke được **AWS Lambda Function** với runtime và execution role phù hợp.
- Xây dựng được HTTP API bằng **Amazon API Gateway** và tích hợp với Lambda.
- Hiểu sự khác nhau giữa message queue của **Amazon SQS** và cơ chế pub/sub notification của **Amazon SNS**.
- Cấu hình được **CloudWatch Logs, Metrics và Alarms** để giám sát tài nguyên serverless.
- Hoàn thành Hands-on Lab serverless sử dụng **API Gateway, Lambda, DynamoDB và CloudWatch**.
- Thực hành kiểm tra IAM permissions, xác minh luồng request và dọn dẹp tài nguyên AWS.
