#!/bin/bash

# 退出脚本，如果任何命令返回非零退出状态
set -e

# 在本地执行 pnpm run build
echo "正在本地执行 pnpm run build..."
pnpm run build
echo "构建完成。"

# 使用 rsync 同步 dist 目录到远程服务器
echo "正在同步 dist 目录到远程服务器..."
rsync -rv dist root@104.168.144.20:/home/piece-ui/
echo "同步完成。"