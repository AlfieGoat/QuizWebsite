import { Builder } from "@sls-next/lambda-at-edge";

 new Builder(".", "./build", { args: ["build"] }).build(true);