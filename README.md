## Instructions

1. Install docker with compose plugin
2. Install postfix
3. Copy /reverse_proxy/example_configs/chatwoot.conf to /reverse_proxy/configs/chatwoot.conf
4. In /reverse_proxy/configs/chatwoot.conf replace everywhere chat.example.org with your domain
5. cd to /reverse_proxy and run "docker compose up -d" 
6. Copy /chatwoot/.env.example to /chatwoot/.env
7. Edit .env with your values
8. cd to /chatwoot and run "docker compose up -d"
9. In chatwoot container run "bundle exec rails db:chatwoot_prepare" 

Ref: https://www.chatwoot.com/docs/self-hosted/deployment/docker
