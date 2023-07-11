#!/bin/bash

# die if we encounter an error.
#set -e

die()
{
   local message=$1
   echo "$message"
   exit 1
}

if [[ $(id -u) != 0 ]]; then
   die "Please run as root"
fi

ng build --prod

#cp ./deploy/jared-website.conf /etc/nginx/sites-available/
#ls -s /etc/nginx/sites-available/jared-website.conf /etc/nginx/sites-enabled/

rm -rf /var/www/jared-earl.com
cp -r dist/jared-website /var/www/jared-earl.com

systemctl restart nginx
systemctl status nginx
