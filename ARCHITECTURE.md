# ARCHITECTURE.md - Project Documentation

## 1. Tổng quan & Mục tiêu Dự án (Project Overview & Goals)

- **Mục tiêu chính:** Dự án là một website tĩnh dùng để trình bày báo cáo thực tập AWS cá nhân, bao gồm thông tin sinh viên, Worklog, Proposal, Blogs Translated, Events Participated, Workshop, Self-evaluation và Feedback.
- **Đối tượng người dùng:** Sinh viên thực tập, mentor/reviewer, và người xem public cần đọc báo cáo hoặc kiểm tra source của website.
- **Lĩnh vực:** Education, Cloud Documentation, Internship Report, Technical Portfolio.
- **Độ tin cậy:** 92%.
  - Bằng chứng: `README.md` mô tả đây là Hugo-based static website cho AWS internship report; `config.toml` cấu hình Hugo Learn Theme, song ngữ English/Tiếng Việt và custom domain `tienhuu-aws.devlab.id.vn`; `content\` chứa các section báo cáo thực tập; `.github\workflows\hugo.yml` cấu hình deploy lên GitHub Pages.
  - Phần chưa chắc chắn: một số nội dung chi tiết trong các section vẫn còn theo template gốc hoặc nội dung mẫu, nên chưa thể khẳng định toàn bộ báo cáo đã hoàn thiện.

## 2. Công nghệ & Stack (Tech Stack)

- **Static Site Generator:** Hugo Extended.
- **Hugo version khuyến nghị:** `0.137.1`.
- **Theme:** `hugo-theme-learn`.
- **Content format:** Markdown.
- **Config format:** TOML.
- **CI/CD:** GitHub Actions.
- **Hosting target:** GitHub Pages.
- **Version Control:** Git, GitHub.
- **Package Manager:** Không có package manager ứng dụng như npm/pnpm/yarn trong repo hiện tại.
- **Database:** Không có.
- **Backend runtime:** Không có.
- **Frontend framework:** Không có framework frontend riêng; UI được render bởi Hugo theme và static assets.
- **Dependency quan trọng:**
  - Hugo Extended `0.137.1`.
  - `hugo-theme-learn` trong `themes\hugo-theme-learn`.
  - RTK CLI `0.37.2` (dùng để tối ưu output terminal và tiết kiệm token khi làm việc với AI agent).
  - GitHub Pages official actions:
    - `actions/checkout@v5`
    - `actions/configure-pages@v6`
    - `actions/upload-pages-artifact@v5`
    - `actions/deploy-pages@v5`

## 3. Kiến trúc Hệ thống (System Architecture)

- **Loại hệ thống:** Static site.
- **Pattern:** Documentation site / content-driven site.
- **Runtime chính:** Hugo build Markdown + layout + static assets thành HTML/CSS/JS.
- **Luồng dữ liệu build:**
  1. Markdown trong `content\` định nghĩa nội dung trang.
  2. `config.toml` định nghĩa baseURL, theme, ngôn ngữ, menu shortcut, output JSON cho search.
  3. `layouts\` override một số partial/shortcode của theme.
  4. `themes\hugo-theme-learn\` cung cấp layout chính, sidebar, search, breadcrumb, TOC.
  5. `static\` cung cấp CSS, font, ảnh, favicon và assets.
  6. Lệnh `hugo` build ra thư mục `public\`.
  7. GitHub Actions upload `public\` thành GitHub Pages artifact và deploy public site.
- **Luồng deploy:**
  1. Push vào branch `main`.
  2. Workflow `.github\workflows\hugo.yml` chạy trên `ubuntu-latest`.
  3. Workflow cài Hugo Extended `0.137.1`.
  4. Workflow build bằng `hugo --minify` và dùng `baseURL` từ `config.toml`.
  5. Artifact `public\` được deploy bằng `actions/deploy-pages@v5`.

## 4. Cấu trúc Thư mục (Project Structure)

```text
.
├── .github\
│   └── workflows\
├── archetypes\
├── content\
│   ├── 1-Worklog\
│   ├── 2-Proposal\
│   ├── 3-BlogsTranslated\
│   ├── 4-EventParticipated\
│   ├── 5-Workshop\
│   ├── 6-Self-evaluation\
│   ├── 7-Feedback\
│   ├── _index.md
│   └── _index.vi.md
├── layouts\
│   ├── partials\
│   └── shortcodes\
├── static\
│   ├── css\
│   ├── fonts\
│   ├── images\
│   └── js\
├── themes\
│   └── hugo-theme-learn\
├── .gitignore
├── .gitmodules
├── AGENTS.md
├── ARCHITECTURE.md
├── README.md
└── config.toml
```

### Giải thích thư mục chính

- `.github\workflows\`: Chứa workflow deploy Hugo site lên GitHub Pages.
- `archetypes\`: Chứa template mặc định khi tạo content mới bằng Hugo.
- `content\`: Chứa toàn bộ nội dung Markdown song ngữ của website.
- `layouts\partials\`: Chứa partial override, ví dụ `logo.html`, `custom-footer.html`, `menu-footer.html`.
- `layouts\shortcodes\`: Chứa shortcode custom như `ghcontributors.html`, `tab.html`, `tabs.html`.
- `static\`: Chứa static assets được copy trực tiếp vào output build.
- `themes\hugo-theme-learn\`: Theme Hugo Learn dùng để render site.
- `public\`: Output build của Hugo, đã được ignore và không nên commit vào source branch.

## 5. File Quan trọng & Entrypoint (Critical Files)

- **Entrypoint nội dung:**
  - `content\_index.md`: Trang chủ tiếng Anh.
  - `content\_index.vi.md`: Trang chủ tiếng Việt.
- **Entrypoint build:** Không có file app runtime; Hugo dùng `config.toml` + `content\` + `layouts\` + `themes\`.
- **Cấu hình chính:**
  - `config.toml`: Cấu hình Hugo, baseURL, theme, language, menu shortcut, params.
  - `.github\workflows\hugo.yml`: CI/CD deploy lên GitHub Pages.
  - `.gitignore`: Ignore output/cache/local files.
  - `.gitmodules`: Khai báo submodule `themes/hugo-theme-learn`. Lưu ý: sau quá trình clean history, theme đang hiện diện trong working tree; cần kiểm tra kỹ trước khi chuyển đổi lại thành submodule thực sự.
- **Layout override quan trọng:**
  - `layouts\partials\logo.html`: Chứa logo AWS inline SVG và link logo dùng `relLangURL` để tránh lỗi 404 khi deploy dưới GitHub Pages project path.
- **Static assets quan trọng:**
  - `static\AWS_Logo.svg`
  - `static\images\avatar.png`
  - `static\css\theme-workshop.css`
  - `static\css\theme-mine.css`

## 6. Quy ước & Tiêu chuẩn (Conventions)

- **Ngôn ngữ phản hồi:** Khi giải thích trực tiếp cho chủ dự án, dùng tiếng Việt. Thuật ngữ kỹ thuật giữ tiếng Anh khi cần.
- **Áp dụng Skill bắt buộc:** Ở mỗi prompt, AI Agent phải luôn áp dụng skill `karpathy-guidelines` như mặc định, kể cả khi người dùng không gọi rõ dạng `/<skill>`.
- **Tên biến/file/code comment:** Nếu phát sinh code hoặc config mới, ưu tiên tiếng Anh cho tên kỹ thuật.
- **Không đổi cấu trúc template nếu không có yêu cầu rõ ràng:** Các thư mục như `1-Worklog`, `2-Proposal`, `3-BlogsTranslated` đang giữ theo template gốc.
- **Không chỉnh trực tiếp theme nếu có thể override:** Ưu tiên chỉnh trong `layouts\`, `static\`, `content\`, `config.toml`. Chỉ chỉnh `themes\hugo-theme-learn\` khi thật sự cần.
- **Không commit generated output:**
  - Không commit `public\`.
  - Không commit `.hugo_build.lock`.
  - Không commit `resources\_gen\`.
- **Markdown content:**
  - Mỗi section có bản English `_index.md` và bản Vietnamese `_index.vi.md`.
  - Front matter dùng `title`, `date`, `weight`, `chapter`, `pre`.
  - Giữ link tương đối nội bộ theo cấu trúc Hugo hiện có.
- **Song ngữ:**
  - English là `defaultContentLanguage = "en"`.
  - Vietnamese dùng suffix `.vi.md`.
  - Khi cập nhật thông tin cá nhân/công ty/trường/ngành, cập nhật cả hai file ngôn ngữ tương ứng.
- **README:**
  - README có dùng một số inline HTML để giữ layout GitHub profile-style.
  - Badge/icon chính nên được kiểm tra trực tiếp trên GitHub vì renderer của GitHub có thể khác preview local.

## 7. Môi trường Dòng lệnh (CLI Environment)

- **Hệ điều hành hiện tại:** Windows.
- **Shell ưu tiên:** PowerShell 7 (`pwsh`).
- **Đường dẫn:** Dùng dấu `\` cho đường dẫn Windows trong lệnh và mô tả file local.
- **Encoding:** Ưu tiên UTF-8.
- **Công cụ bắt buộc:**
  - Git.
  - Hugo Extended `0.137.1`.
  - PowerShell 7.
- **Công cụ khuyến nghị cho AI-assisted CLI:**
  - RTK (`rtk`) để nén output command (ví dụ `rtk git status`, `rtk git diff`, `rtk read .\AGENTS.md`).
  - Khởi tạo tích hợp Codex (global): `rtk init -g --codex`.
  - Theo dõi hiệu quả: `rtk gain`, `rtk gain --history`.
- **Công cụ tìm kiếm file/nội dung:**
  - Dùng `fd` để tìm file.
  - Dùng `rg` để tìm nội dung.
  - Tránh dùng `grep`, `find`, `ls -R`.
- **Lệnh kiểm tra version:**

```powershell
hugo version
git --version
```

## 8. Quy trình Phát triển & Test (Workflow)

### Branch strategy hiện tại

- `main`: Stable branch, dùng cho deploy GitHub Pages.
- `feat/report`: Branch làm việc hiện tại.
- `backup/template-history`: Branch local giữ lịch sử template gốc để tham chiếu; không dùng để deploy.

### Quy trình làm việc đề xuất

1. Kiểm tra trạng thái Git.
2. Chạy build local bằng Hugo.
3. Thay đổi file tối thiểu theo yêu cầu.
4. Chạy lại `hugo`.
5. Kiểm tra diff.
6. Commit với message rõ ràng.
7. Merge vào `main` khi đã ổn.
8. Push `main` để kích hoạt deploy.

### Quy tắc Git staging bắt buộc

- **Không được stage `AGENTS.md` khi dùng `git add` trong các tác vụ thông thường.**
- Khi cần commit thay đổi khác, phải add file cụ thể thay vì dùng lệnh rộng như:

```powershell
git add .
git add -A
```

- Nếu bắt buộc phải commit thay đổi của `AGENTS.md`, chỉ thực hiện khi người dùng yêu cầu rõ ràng và phải dùng lệnh tường minh:

```powershell
git add AGENTS.md
```

### Lệnh local development

```powershell
hugo server -D
```

Nếu muốn local chạy ở root URL thay vì path GitHub Pages:

```powershell
hugo server -D --baseURL http://localhost:1313/
```

### Lệnh build

```powershell
hugo
```

### Lệnh kiểm tra Git

```powershell
git --no-pager status --short --branch
git --no-pager diff --stat
git --no-pager log --oneline --decorate --max-count=8
```

### Lệnh Git/đọc file qua RTK (khuyến nghị khi làm việc với AI)

```powershell
rtk git status
rtk git diff
rtk read .\AGENTS.md
rtk gain
```

### Deploy

- Workflow deploy nằm tại `.github\workflows\hugo.yml`.
- Deploy chỉ chạy khi push vào `main` hoặc chạy thủ công bằng `workflow_dispatch`.
- GitHub Pages repository setting phải chọn:

```text
Settings -> Pages -> Source -> GitHub Actions
```

Không chọn `Deploy from a branch` vì workflow hiện tại dùng artifact deployment, không dùng `gh-pages`.

## 9. Nhật ký Vận hành (Maintenance Log)

- **2026-04-24 - Custom domain rollout:** Cập nhật `config.toml` với `baseURL = "https://tienhuu-aws.devlab.id.vn/"` để dùng custom domain chính thức.
- **2026-04-24 - Workflow baseURL fix:** Cập nhật `.github\workflows\hugo.yml` để build bằng `hugo --minify` (không override `--baseURL` trong CI), xử lý lỗi 404 CSS/JS khi dùng custom domain.
- **2026-04-24 - RTK integration guidance:** Bổ sung hướng dẫn dùng RTK trong CLI workflow (`rtk init -g --codex`, `rtk gain`, và các lệnh `rtk git/read`) để tối ưu output khi làm việc với AI agent.
- **2026-04-24 - Mandatory karpathy-guidelines policy:** Cập nhật quy ước bắt buộc AI Agent luôn áp dụng skill `karpathy-guidelines` cho mỗi prompt, kể cả khi không được gọi bằng `/<skill>`.
- **2026-04-21 - Tạo AGENTS.md:** Bổ sung tài liệu hướng dẫn AI Agent/Developer dựa trên cấu trúc Hugo site hiện tại.
- **2026-04-21 - README badge layout:** Cập nhật layout badge/icon trong README trên nhánh `feature/site-foundation` sau khi thử nghiệm ở branch riêng.
- **2026-04-20 - Homepage personal information:** Cập nhật thông tin cá nhân song ngữ trên `content\_index.md` và `content\_index.vi.md`.
- **2026-04-20 - GitHub Pages workflow:** Chuyển workflow từ deploy qua branch `gh-pages` sang official GitHub Pages artifact deployment.
- **2026-04-20 - Site configuration:** Cập nhật `baseURL`, author, description, shortcut GitHub, tắt `editURL`, sửa logo link bằng `relLangURL`.
- **2026-04-20 - Repository hygiene:** Ignore `public\`, `.hugo_build.lock`, `.vscode\`, logs, temp files và OS files.
- **2026-04-20 - Clean Git history:** Tạo lịch sử commit sạch từ template gốc bằng orphan branch.

## 10. Vấn đề Tiềm ẩn / Nhận xét (Issues & Observations)

- **Hugo version nhạy cảm:** Template từng lỗi với Hugo quá mới (`getJSON` không còn phù hợp) và quá cũ (`hugo.IsMultilingual`). Version đã xác nhận ổn là Hugo Extended `0.137.1`.
- **`.gitmodules` cần chú ý:** File `.gitmodules` vẫn khai báo `themes/hugo-theme-learn` là submodule. Tuy nhiên sau khi clean history, theme có thể đang được track như thư mục thường. Trước khi thao tác submodule, cần kiểm tra bằng `git submodule status` và `git ls-tree HEAD themes/hugo-theme-learn`.
- **Theme cũ:** `hugo-theme-learn` là theme cũ, có thể phát sinh lỗi khi nâng Hugo version. Không tự ý nâng Hugo trong CI nếu chưa test local.
- **README có inline HTML:** Một số thẻ HTML như `h1`, `h3`, `p`, `a`, `img` có thể bị markdownlint cảnh báo `MD033`. Đây là lựa chọn layout theo phong cách GitHub README generator. Nếu cần lint nghiêm ngặt, cân nhắc `.markdownlint.json` hoặc giảm inline HTML.
- **Nội dung template còn nhiều phần mẫu:** Các section như Worklog, Proposal, Blogs Translated, Events Participated, Workshop, Self-evaluation và Feedback có thể còn nội dung tham khảo từ template. Khi chính thức nộp báo cáo, cần rà soát toàn bộ để tránh giữ placeholder hoặc warning mẫu.
- **Đường dẫn ảnh tuyệt đối trong Markdown:** Nhiều ảnh dùng đường dẫn dạng `/images/...`. Với custom domain hiện tại, cách này đang hoạt động ổn; nếu chuyển lại project path trong tương lai, cần kiểm tra lại để tránh 404.
- **Không dùng `hugo --gc` trên Windows local nếu gặp lỗi quyền:** Trước đó có lỗi quyền khi prune Hugo cache trong `%LOCALAPPDATA%`. Build thường bằng `hugo` đã hoạt động.
- **RTK trên môi trường sandbox có thể phát sinh lỗi quyền database:** Nếu `rtk gain` báo lỗi truy cập file DB, cần chạy trong user context đầy đủ (ngoài sandbox) hoặc kiểm tra quyền ghi trong thư mục user profile.
