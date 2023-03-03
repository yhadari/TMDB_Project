#!/bin/bash
echo "Running Prisma migration..."
echo "y" | npm run start:migrate:dev
echo "Prisma migration complete."
npm run start:prisma-studio

exec $@