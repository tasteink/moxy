# moxy

[![Deploy to Vercel](https://deploy.now.sh/static/button.svg)](/import/project?template=https://github.com/tasteink/moxy?env=CONNECTION_STRING)

## Notes

The copy/paste connection strings offered up by Mongo cloud providers
typically don't account for your actual database name. Be sure you fill
in the database username, password, **and** the database name.

```sh
mongodb+srv://<USERNAME>:<PASSWORD>@<DOMAIN>/<DATABASE_NAME>
```
