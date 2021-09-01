FROM lsegal/samus:latest as samus

FROM ruby:2
ARG VERSION
ENV VERSION=${VERSION}
WORKDIR /github/lsegal/yard
ENTRYPOINT samus publish release-v${VERSION}.tar.gz

# Prepare credential config
RUN mkdir -p ~/.ssh
RUN echo "Host *" > ~/.ssh/config
RUN echo "    StrictHostKeyChecking no" >> ~/.ssh/config
RUN chmod 400 ~/.ssh/config
COPY ./.samusprep/.samus /root/.samus
COPY ./.samusprep/.gitconfig /root/.gitconfig

# Setup Samus
ENV PATH=$PATH:/samus/bin
COPY --from=samus /samus /samus

# Install gems
ENV BUNDLE_PATH=/var/gems
COPY Gemfile /github/lsegal/yard
RUN bundle

# Run build
COPY . /github/lsegal/yard
RUN samus build --skip-restore ${VERSION}
