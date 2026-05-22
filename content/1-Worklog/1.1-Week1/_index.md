---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## Week 1 Report (Concise)

### 1) Objectives
- Activate AWS Free Tier account safely.
- Complete onboarding tasks to receive **$100 AWS credit**.
- Deploy layered cost-defense controls.

### 2) Work completed

#### 2.1 Onboarding and service tasks
| Task | Svc | Outcome |
|---|---|---|
| 1 | EC2 | Created test instance + key pair, then terminated |
| 2 | Bedrock | Tested Claude 3 Haiku successfully |
| 3 | Lambda | Built blueprint web app, then deleted |
| 4 | RDS Aurora PG | Created DB, waited `Available`, then deleted |
| 5 | Budgets | Created `My Monthly Cost Budget` |

#### 2.2 Budget setup
- **Limit:** $200/month
- **Type:** Fixed budget
- **Period:** Monthly
- **Cost basis:** Unblended costs

**Alert thresholds (Actual cost):**
- 12.5% ($25)
- 25% ($50)
- 50% ($100)
- 75% ($150)

#### 2.3 Daily cost monitoring
- Reviewed **Cost Explorer**: Daily Spend + Service Breakdown.
- Enabled **Cost Anomaly Detection** for unusual-spend alerts.

#### 2.4 Automated cleanup on CloudShell
**3 quick steps:**
1. Create/edit `cleanup.sh` in Nano.
2. Grant execute permission: `chmod +x cleanup.sh`.
3. Run `./cleanup.sh` and verify logs.

**Script actions:**
- Stop running EC2 instances tagged `AutoShutdown=yes`.
- Delete unattached EBS volumes older than 7 days.

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

### 3) Key technical notes
- **Actual Cost:** already incurred spend, used for hard thresholds.
- **Forecasted Cost:** projected end-of-period spend, used for early warning.
- `chmod +x`: grants execute permission to run script.
- Empty-system run with no error is normal CLI behavior (**No news is good news**).

### 4) Results
- Completed Week 1 workflow and received **$100 credit**.
- Cost-defense stack is active: Budgets + Monitoring + Cleanup script.


### 5) ChatOps Cost Alert Deployment Status (Completed)

![Billing Alarm ChatOps pipeline diagram](/images/billing-alarm-pipeline.drawio.png)
- Successfully deployed pipeline: **CloudWatch Billing Alarm → SNS → Lambda → Discord Webhook**.
- Successfully validated via **SNS Publish** and **Forced Alarm** (`OK -> ALARM`).
- Discord channel received full alert details: alarm name, timestamp, topic ARN, and payload.
- Added Lambda error monitoring (Errors > 0) to track notification channel reliability.

