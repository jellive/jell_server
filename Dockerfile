FROM node:carbon
MAINTAINER Jell mystral7@naver.com


#app 폴더 만들기 - NodeJS 어플리케이션 폴더
RUN mkdir -p /app
#winston 등을 사용할떄엔 log 폴더도 생성
 
#어플리케이션 폴더를 Workdir로 지정 - 서버가동용
WORKDIR /app
 
#서버 파일 복사 ADD [어플리케이션파일 위치] [컨테이너내부의 어플리케이션 파일위치]
#저는 Dockerfile과 서버파일이 같은위치에 있어서 ./입니다
ADD ./ /app
 
#패키지파일들 받기
RUN npm i -g yarn && yarn

RUN rm yarn.lock
RUN yarn

RUN yarn global add ts-node
 
#배포버젼으로 설정 - 이 설정으로 환경을 나눌 수 있습니다.
ENV NODE_ENV=production

EXPOSE 5000

#서버실행
CMD ["yarn", "start"]