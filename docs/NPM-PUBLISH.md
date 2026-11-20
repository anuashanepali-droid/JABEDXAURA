# npm package publishing checklist

1. Confirm `jabed-fca` is available on npm; if unavailable, choose a unique name or a scope you control.
2. Ensure no credentials, cookie files, or private app-state data are committed.
3. Run tests and review the package contents (`npm pack --dry-run`).
4. Publish only code you have rights to distribute and that complies with platform and npm rules.
5. Tag a release in GitHub and update `package.json` version following semantic versioning.
