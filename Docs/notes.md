commands

### Build and Deploy
npm run build
npx firebase deploy

### Refresh PATH in the same session:
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
npm --version
npm run start