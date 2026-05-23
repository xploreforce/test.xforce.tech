# X-Force Kit

**高效连接，尽在掌控 | Seamless Connections, Complete Control**

X-Force Kit 是一款强大的服务器聚合终端管理工具。支持 SSH 远程连接、FTP/SFTP 文件传输以及多种数据库的可视化管理，让您在统一的界面中高效管理所有服务器资源。

## 核心功能

- **SSH 远程终端** — 支持 SSH 隧道建立与 SOCKS 代理连接，安全高效地管理远程服务器
- **FTP 文件传输** — 支持 FTP 和 SFTP 协议，提供断点续传功能，大文件传输稳定可靠
- **数据库管理** — 支持 MySQL 等多种数据库的可视化操作，涵盖查询、备份、恢复等常用功能

## 支持平台

| 平台 | 最低版本 |
|------|----------|
| Windows | Windows 10+ (x86) |
| macOS | macOS 10.15+ (Intel / Apple Silicon) |

## 订阅价格

| 方案 | 价格 |
|------|------|
| 月度订阅（个人版） | ¥16.5/月 |
| 年度订阅（个人版） | ¥169/年 |
| 年度订阅（企业版） | ¥399/年 |

## 关于我们

XForce Tech 是一支专注于网络技术与安全研究的技术团队。我们致力于通过技术创新，为用户提供高品质的网络工具与解决方案。

🌐 官网：https://test.xforce.tech

---

<details>
<summary><strong>Development</strong></summary>

### 技术栈

Vue 3 + Vite 5 + Ant Design Vue 4 + Vue Router + Vue I18n

### 本地开发

```bash
npm install
npm run dev
```

开发服务器默认运行在 `http://localhost:9000`。

### 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages，推送到 `main` 分支即可触发自动编译和部署，无需本地编译。

#### GitHub 仓库配置步骤

1. 进入仓库 **Settings** > **Pages**
2. "Build and deployment" 下的 **Source** 选择 **GitHub Actions**
3. 在 **Custom domain** 中填入 `test.xforce.tech`，点击 Save
4. 推送代码到 `main` 分支，Actions 自动触发编译和部署

#### DNS 配置

在域名服务商处添加 CNAME 记录：

| 类型 | 主机记录 | 记录值 |
|------|----------|--------|
| CNAME | test | xploreforce.github.io |

</details>
