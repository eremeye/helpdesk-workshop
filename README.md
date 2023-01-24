## Instructions

1. Install docker with compose plugin
2. Copy /reverse_proxy/example_configs/chatwoot.conf to /reverse_proxy/configs/chatwoot.conf
3. In /reverse_proxy/configs/chatwoot.conf replace everywhere chat.example.org with your domain
4. cd to /reverse_proxy and run "docker compose up -d" 
5. Copy /chatwoot/.env.example to .env
6. edit .env with your values
7. cd to /chatwoot and run "docker compose up -d" 
