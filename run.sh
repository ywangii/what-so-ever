#!/usr/bin/with-contenv sh
set -e

exec s6-applyuidgid -u 999 -g 999 node /what-so-ever/bin/server

