module.exports = {
  apps: [
    {
      name: "frontend",
      cwd: "./apps/frontend",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: 3000
      },
      autorestart: true,
      watch: false,
      max_memory_restart: "500M"
    },

    {
      name: "payload",
      cwd: "./apps/cms",
      script: "pnpm",
      args: "start",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M"
    }
  ]
}
