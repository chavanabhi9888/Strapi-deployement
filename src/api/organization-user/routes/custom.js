module.exports = {
    routes: [
      {
        method: "GET",
        path: "/find",
        handler: "custom.find",
        config: {
          policies: [],
          middleware: [],
        },
      }
    ]
}