# FROM maven:3-openjdk-18 as build

# WORKDIR /build 
# RUN git clone --recursive --depth=1 --branch GSRSv3.0.3PUB https://github.com/ncats/gsrs3-main-deployment.git && \
#   cd gsrs3-main-deployment/substances && \
#   sh ./mvnw clean -U package -DskipTests 
# COPY ./src/main/resources/application.conf ./build/src/main/resources/application.conf
# RUN sh ./mvnw clean -U package -DskipTests
# RUN sh ./mvnw clean -U package -DskipTests 
  # unzip /build/substances.war.original -d /build/substances

FROM tomcat:9-jre11

RUN sed -i 's/port="8080"/port="443"/' ${CATALINA_HOME}/conf/server.xml

COPY zip/META-INF /usr/local/tomcat/webapps/ROOT/META-INF
COPY zip/WEB-INF /usr/local/tomcat/webapps/ROOT/WEB-INF

EXPOSE 443

RUN /bin/echo -e "#!/bin/sh\nmkdir -p /home/conf /home/logs /home/exports\ncd /home\nexec \"\$@\"\n" > /entrypoint.sh && \
    chmod 755 /entrypoint.sh && \
    mkdir -p /home/exports /home/conf /home/ginas-ix /home/logs

WORKDIR /home

ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["catalina.sh", "run"]