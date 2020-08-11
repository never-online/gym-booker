#!/bin/bash

ID=$(date "+%s")

echo "=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~="
echo ""
echo " Booking ID: $ID "
echo " Booking started at: $(date)"
echo ""
echo ""

npx testcafe "firefox:headless" /home/ht/Desktop/pangae/gym-booker/aman.js
npx testcafe "firefox:headless" /home/ht/Desktop/pangae/gym-booker/ishu.js
npx testcafe "firefox:headless" /home/ht/Desktop/pangae/gym-booker/jas.js


echo " Ended $ID "
echo ""
echo "=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~="


echo ""
echo ""
