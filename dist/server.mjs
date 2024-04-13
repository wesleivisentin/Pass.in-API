import {
  registerForEvent
} from "./chunk-LRXM6RQ7.mjs";
import {
  errorHandler
} from "./chunk-U27WN4NB.mjs";
import {
  checkIn
} from "./chunk-CUTNSEQW.mjs";
import {
  createEvent
} from "./chunk-RHETI4VL.mjs";
import "./chunk-5PHVTUUZ.mjs";
import {
  getAttendeeBadge
} from "./chunk-6523ED37.mjs";
import {
  getEventAttendees
} from "./chunk-TGRFDPPZ.mjs";
import {
  getEvent
} from "./chunk-SMZ2L55E.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para back-end da aplica\xE7\xE3o pass.in contr\xEDda durante a NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP servers running!!!");
});
