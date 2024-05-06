#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

npm run generate

# gh-pages部署
npm run deploy

# 提交main主分支
git add .
git commit -m "提交更新main分支"
git push origin main

# 按任意键关闭
echo "按任意键关闭"
read -n 1

# 关闭sh脚本
exit 0