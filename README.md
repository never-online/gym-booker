# gym-booker

To run do the following

RUN	crontab -e

APPEND
	10 6 * * 1,2,3 ${DIR}/gym-booker/book_gym.sh
	10 0 * * 0,6 ${DIR}/gym-booker/book_gym.sh

RUN
	chmod +x ${DIR}/gym-booker/book_gym.sh
