# API Specification:

* #### `/api/login`:
	* `POST`:
		* summary: Logs user in
		* parameters:
			* user-id:
				* description: user ID provided by eventtribe
				* required: true
		* content: `application/json`
		* schema:
			```
			{
				"user-id" : string
			}
			```
	* responses:
		* `200`:
			* description: user authenticated
			* content: `application/json`
				* schema:
					```
					{
						"start-time" : integer //time in UNIX epoch
					}
					```
		* `401`:
			* description: authentication failed due to invalid
			credentials
		* `403`
			* description: forbidden due to early login attempt from before
			the starting time of the challenge
			* content: `application/json`
				* schema:
					```
					{
						"start-time" : integer //time in UNIX epoch
					}
					```
		* `501`:
			* description: internal server error

* #### `/api/logout`:
	* `GET`:
		* summary: logs user out
	* responses:
		* `200`:
			* description: user successfully logged out
		* `501`:
			* description: internal server error

* #### `/api/get-challenges`:
	* `GET`:
		* summary: end point for getting challenges
	* responses:
		* `200`:
			* description: returns all available challenges
			* content: `application/json`
				* schema:
					```
					{
						"challenges" : [{
								"id": integer,
								"challenge": string
							}...]
					}
					```
			* `401`:
				* description: unauthorized --- unauthenticated requests for challenges
			* `501`:
				* description: internal server error

* #### `/api/check-response`:
	* `POST`:
		* summary: verify user response
		* parameters:
			* id:
				* description: challenge ID 
				* required: true
			* response:
				* description: user response
		* content: `application/json`
		* schema:
			```
			{
				"id" : integer,
				"response" : string
			}
			```
	* responses:
		* `200`:
			* description: returns answer correctness
			* content: `application/json`
				* schema:
					```
					{
						"isCorrect" : boolean	
					}
					```
			* `401`:
				* description: unauthorized --- unauthenticated requests verifying responses
			* `403`:
				* description: forbidden --- challenge time over
			* `501`:
				* description: internal server error
* #### `/api/leaderboard`:
	* `GET`:
		* summary: end point for getting leaderboard
	* responses:
		* `200`:
			* description: returns top 10 contestants' name, score and
			rank along with the requesting user's score and rank
			* content: `application/json`
				* schema:
					```
					{
						"leaderboard" : [{
									"rank": integer,
									"name": string,
									"score": integer
								}...],
						"user" : {
								"rank": integer
							}
					}
					```
			* `401`:
				* description: unauthorized --- user not logged in
			* `403`:
				* description: forbidden --- challenge yet to start 
			* `501`:
				* description: internal server error
