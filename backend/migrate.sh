#!/bin/bash

echo "Running Prisma migration..."

npm run start:migrate:dev << EOF
y
EOF

echo "Prisma migration complete."
