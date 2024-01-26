# Consistent cypress runs
### One-time-setup

```
./setup_clean_db.sh --reset
```

### Run tests

``
npm run dev
npm cypress:headless --config-file cypress.config.js
npm cypress --config-file cypress.config.js
```

There is no need to repeat one-time-setup for subsequent runs
