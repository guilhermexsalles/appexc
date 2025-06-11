import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Financeiro API",
      version: "1.0.0",
      description: "API para controle de entradas e saídas financeiras",
    },
    servers: [
      {
        url: "https://{host}",
        variables: {
          host: {
            default: "localhost:3000",
          },
        },
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
