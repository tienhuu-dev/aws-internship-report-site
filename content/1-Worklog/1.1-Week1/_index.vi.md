---
title: "Worklog Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## Báo cáo Tuần 1 (Tóm tắt)

### 1) Mục tiêu
- Kích hoạt tài khoản AWS Free Tier an toàn.
- Hoàn thành chuỗi nhiệm vụ nhận **$100 AWS credit**.
- Thiết lập cơ chế phòng thủ chi phí nhiều lớp.

### 2) Hạng mục đã thực hiện

#### 2.1 Onboarding và thực hành dịch vụ
| Nhiệm vụ | Dịch vụ | Kết quả |
|---|---|---|
| 1 | EC2 | Tạo test instance + key pair + security group, sau đó terminate |
| 2 | Bedrock | Tương tác thành công Claude 3 Haiku |
| 3 | Lambda | Tạo web app từ blueprint, sau đó xóa function |
| 4 | RDS Aurora PostgreSQL | Tạo DB cluster, chờ `Available`, sau đó xóa |
| 5 | AWS Budgets | Tạo ngân sách `My Monthly Cost Budget` |

#### 2.2 Thiết lập ngân sách
- **Hạn mức:** $200/tháng
- **Loại:** Fixed budget
- **Chu kỳ:** Monthly
- **Cơ sở tính:** Unblended costs

**Ngưỡng cảnh báo (Actual cost):**
- 12.5% ($25)
- 25% ($50)
- 50% ($100)
- 75% ($150)

#### 2.3 Giám sát chi phí hằng ngày
- Theo dõi **Cost Explorer**: Daily Spend + Service Breakdown.
- Bật **Cost Anomaly Detection** để phát hiện chi phí bất thường.

#### 2.4 Tự động hóa dọn dẹp trên CloudShell
**3 bước ngắn gọn:**
1. Tạo/sửa `cleanup.sh` bằng Nano.
2. Cấp quyền chạy: `chmod +x cleanup.sh`.
3. Thực thi: `./cleanup.sh` và kiểm tra log.

**Script xử lý:**
- Dừng EC2 `running` có tag `AutoShutdown=yes`.
- Xóa EBS `available` cũ hơn 7 ngày.

```bash
#!/usr/bin/env bash
# Kích hoạt chế độ phòng thủ Bash nghiêm ngặt
set -euo pipefail

echo "========================================="
echo "🔄 BẮT ĐẦU QUÁ TRÌNH DỌN DẸP TÀI KHOẢN AWS"
echo "========================================="

echo "🔎 1. Đang quét các máy ảo EC2 có gắn tag AutoShutdown=yes..."
INSTANCE_IDS=$(aws ec2 describe-instances   --filters "Name=tag:AutoShutdown,Values=yes" "Name=instance-state-name,Values=running"   --query "Reservations[].Instances[].InstanceId"   --output text)

if [ -n "${INSTANCE_IDS}" ] && [ "${INSTANCE_IDS}" != "None" ]; then
  echo "   ➔ Tìm thấy các máy ảo: ${INSTANCE_IDS}"
  echo "   🛑 Đang tiến hành tắt (Stop) các máy ảo trên..."
  aws ec2 stop-instances --instance-ids ${INSTANCE_IDS} --query 'StoppingInstances[*].[InstanceId,CurrentState.Name]' --output table
else
  echo "   ➔ Không tìm thấy máy ảo nào đang chạy hợp lệ để tắt."
fi

echo "-----------------------------------------"

echo "🔎 2. Đang quét các ổ đĩa EBS bỏ hoang (available)..."
CUTOFF=$(date -u -d "7 days ago" +"%Y-%m-%dT%H:%M:%SZ")
echo "   ➔ Chỉ quét các ổ đĩa được tạo trước thời điểm: ${CUTOFF}"

VOLUME_IDS=$(aws ec2 describe-volumes   --filters "Name=status,Values=available"   --query "Volumes[?CreateTime<=\`${CUTOFF}\`].VolumeId"   --output text)

if [ -n "${VOLUME_IDS}" ] && [ "${VOLUME_IDS}" != "None" ]; then
  echo "   ➔ Tìm thấy các ổ đĩa bỏ hoang: ${VOLUME_IDS}"
  for vol in ${VOLUME_IDS}; do
    echo "   💥 Đang xóa ổ đĩa: ${vol} ..."
    aws ec2 delete-volume --volume-id "${vol}"
    echo "     ➔ Đã xóa thành công!"
  done
else
  echo "   ➔ Không có ổ đĩa rảnh rỗi nào cũ hơn 7 ngày cần xóa."
fi

echo "========================================="
echo "✅ QUÁ TRÌNH DỌN DẸP HOÀN TẤT!"
echo "========================================="
```

### 3) Ghi chú kỹ thuật ngắn
- **Actual Cost:** Chi phí đã phát sinh, dùng cho cảnh báo ngưỡng cứng.
- **Forecasted Cost:** Chi phí dự báo cuối kỳ, dùng để cảnh báo sớm.
- `chmod +x`: cấp quyền thực thi script.
- Hệ thống trống không báo lỗi là hành vi bình thường (**No news is good news**).

### 4) Kết quả
- Hoàn thành workflow Tuần 1 và nhận **$100 credit**.
- Cơ chế phòng thủ chi phí đã vận hành: Budgets + Monitoring + Cleanup script.


### 5) Trạng thái triển khai ChatOps Cost Alert (Hoàn tất)

![Sơ đồ pipeline Billing Alarm ChatOps](/images/billing-alarm-pipeline.drawio.png)
- Đã triển khai thành công pipeline: **CloudWatch Billing Alarm → SNS → Lambda → Discord Webhook**.
- Đã test thành công bằng **SNS Publish** và **Force Alarm** (`OK -> ALARM`).
- Discord channel đã nhận cảnh báo đầy đủ thông tin: Alarm name, thời gian, topic ARN, payload chi tiết.
- Đã bổ sung giám sát lỗi Lambda (Errors > 0) để theo dõi tính ổn định của kênh cảnh báo.

