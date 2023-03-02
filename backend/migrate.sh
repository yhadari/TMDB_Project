#!/bin/bash

echo "y" | npm run start:migrate:dev
npx prisma studio

exec $@