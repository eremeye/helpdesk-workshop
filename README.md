## Instructions

1. Set up account on sendgrid.com verify domain and get api key
2. Install docker with compose plugin
3. Copy /reverse_proxy/example_configs/chatwoot.conf to /reverse_proxy/configs/chatwoot.conf
4. In /reverse_proxy/configs/chatwoot.conf replace everywhere chat.example.org with your domain
5. cd to /reverse_proxy and run "docker compose up -d" 
6. Copy /chatwoot/.env.example to /chatwoot/.env
7. Edit .env with your values
8. cd to /chatwoot and run "docker compose up -d"
9. ```docker compose run --rm chatwoot bundle exec rails db:chatwoot_prepare```

## References 
- https://www.chatwoot.com/docs/self-hosted/deployment/docker
- https://www.chatwoot.com/docs/self-hosted/configuration/environment-variables
- https://hub.docker.com/r/jonasal/nginx-certbot
