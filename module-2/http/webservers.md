Express:

1. Launch EC2 Ubuntu Server 22.04 LTS
2. Add port to the security group 3000
3. ssh into the instance: ssh -i "your-key-file.pem" ubuntu@your-instance-public-dns
4. sudo apt update -y  # For Ubuntu
5. curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash -
6. sudo apt-get install -y nodejs
7. Verify installation: node -v && npm -v
8. Move your app to the cloud: scp -i "your-key-file.pem" -r /path/to/your-express-app ubuntu@your-instance-public-dns:/home/ubuntu/
9. Install dependencis: npm install
10. Start the server locally: node app.js
11. Test the server locally: curl http://localhost:3000

Optional:
1. Install pm2: sudo npm install pm2 -g
2. Start the app: pm2 start app.js
3. App should start on reboot: pm2 startup && pm2 save
4. Access your app: http://your-instance-public-dns:3000


Nginx
1. Launch EC2 instance (ubuntu)
2. Open ports 80, 443
3. Update packages: sudo apt update && sudo apt upgrade -y
4. Install nginx: sudo apt install nginx -y
5. Start nginx: sudo systemctl start nginx && sudo systemctl enable nginx
6. Verify nginx is installed: http://your-instance-public-ip
7. Upload your html website scp -i your-key-pair.pem /path/to/your-local-file.html ubuntu@your-instance-public-ip:/var/www/html
