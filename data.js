db.createCollection("tasks")
db.createCollection("webs")
db.createCollection("subdomains")
db.createCollection("vulns")
db.createCollection("user")
db.createCollection("http_hook")
db.user.insert({uid:1,username:'admin',password:'admin'})
db.http_hook.insert({'hook':'https://Your-WebHook'})