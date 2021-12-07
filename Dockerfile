from node:17-alpine
run npm install
copy . . 
expose 5000 
CMD [ "npm" , "start"