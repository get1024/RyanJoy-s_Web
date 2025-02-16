---
title: Git 和 Github 的最佳实践
createAt: 2025-02-15 20:32:22
updateAt: 2025-02-16 09:48:42
---

# Git 和 Github 的最佳实践

在 Git 中，**PR（Pull Request）** 是一种将代码从一个分支合并到另一个分支的机制，通常用于代码审查和协作开发。以下是详细说明如何“开发完成后，通过 PR 合并到 `main` 分支”的步骤：

### **1. 开发流程概述**

1. 从 `main` 分支创建一个新分支（如 `feature/add-search` ）。
2. 在新分支上开发功能或修复问题。
3. 将新分支推送到远程仓库。
4. 在 GitHub/GitLab 等平台上创建 PR，请求将新分支合并到 `main` 分支。
5. 进行代码审查（如果有团队协作）。
6. 合并 PR，删除已合并的分支。

### **2. 详细步骤**

#### **2.1 创建新分支**

假设你要开发一个新功能（如“添加搜索功能”），首先从 `main` 分支创建一个新分支：

```bash
git checkout main           # 切换到 main 分支
git pull origin main        # 确保 main 分支是最新的
git checkout -b feature/add-search  # 创建并切换到新分支
```

#### **2.2 在新分支上开发**

在新分支上进行代码修改和开发。完成后，提交更改：

```bash
git add .                   # 添加所有修改
git commit -m "添加搜索功能"  # 提交更改
git push origin feature/add-search  # 推送到远程仓库
```

#### **2.3 创建 Pull Request**

1. 打开 GitHub/GitLab 等平台，进入你的仓库。
2. 你会看到一个提示，显示你刚刚推送的分支（如 `feature/add-search` ），点击 **Compare & pull request**。
3. 填写 PR 的标题和描述，说明你做了什么修改以及为什么要合并。
4. 选择目标分支（通常是 `main` ）。
5. 点击 **Create pull request**。

#### **2.4 代码审查（可选）**

- 如果有团队协作，其他开发者可以查看你的 PR，提出修改建议或评论。
- 你可以根据反馈继续修改代码，并推送到同一个分支（PR 会自动更新）。

#### **2.5 合并 PR**

1. 如果代码审查通过，点击 **Merge pull request** 按钮。
2. 选择合并方式：
   - **Create a merge commit**：保留完整的合并历史。
   - **Squash and merge**：将多个提交合并为一个提交。
   - **Rebase and merge**：将提交重新应用到目标分支。
3. 点击 **Confirm merge**，将代码合并到 `main` 分支。

#### **2.6 删除已合并的分支**

合并完成后，可以删除远程和本地的分支：

- 在 PR 页面点击 **Delete branch**，删除远程分支。
- 本地删除分支：

  ```bash
  git checkout main           # 切换回 main 分支
  git pull origin main        # 拉取最新的 main 分支
  git branch -d feature/add-search  # 删除本地分支
  ```

### **3. 示例流程**

#### **3.1 本地操作**

```bash
# 创建并切换到新分支
git checkout -b feature/add-search

# 开发完成后提交
git add .
git commit -m "添加搜索功能"
git push origin feature/add-search
```

#### **3.2 GitHub 操作**

1. 打开 GitHub，进入仓库。
2. 点击 **Compare & pull request**。
3. 填写 PR 信息，点击 **Create pull request**。
4. 等待审查通过后，点击 **Merge pull request**。
5. 删除远程分支。

#### **3.3 本地清理**

```bash
# 切换回 main 分支并拉取最新代码
git checkout main
git pull origin main

# 删除本地分支
git branch -d feature/add-search
```

### **4. 使用 PR 的好处**

- **代码审查**：确保代码质量，减少错误。
- **记录历史**：PR 提供了清晰的变更记录和讨论历史。
- **隔离风险**：功能开发和主分支隔离，避免影响生产环境。
- **团队协作**：方便多人协作开发，减少冲突。

### **5. 总结**

通过 PR 合并到 `main` 分支是一种标准的 Git 工作流程，特别适合团队协作和复杂项目。即使你是个人开发者，使用 PR 也能帮助你更好地管理代码变更和历史记录。