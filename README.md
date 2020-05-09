# moxy

[![Deploy to Vercel](https://deploy.now.sh/static/button.svg)](https://vercel.com/import/project?env=CONNECTION_STRING&template=https://github.com/tasteink/moxy/tree/master)

## Notes

The copy/paste connection strings offered up by Mongo cloud providers
typically don't account for your actual database name. Be sure you fill
in the database username, password, **and** the database name.

```sh
mongodb+srv://<USERNAME>:<PASSWORD>@<DOMAIN>/<DATABASE_NAME>
```
