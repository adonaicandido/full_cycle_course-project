FROM node:lts-alpine AS base

USER node

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME/bin:$PATH
RUN corepack enable

WORKDIR /home/node/app

FROM base AS prod

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base

COPY --from=prod /home/node/app/node_modules /home/node/app/node_modules
COPY --from=build /home/node/app/dist /home/node/app/dist

EXPOSE 8000

CMD [ "pnpm", "start" ]