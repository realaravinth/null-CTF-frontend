# API Specification:

1. #### `/api/login`:
	* ##### `POST`:
		* summary: Logs user in
		* parameters:
			* user-id:
				* description: user ID provided by eventtribe
				* required: true
		* content: `application/json`
		* schema:
			```
			{
				"userID" : string
			}
			```
	* ##### responses:
		* `200`:
			* description: user authenticated
			* content: `application/json`
			* schema:
				```
				{
					"startTime" : integer, //time in UNIX epoch
					"registered" : boolean
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
					"startTime" : integer //time in UNIX epoch
				}
					```
		* `501`:
			* description: internal server error

2. #### `/api/register`:
	* ##### `POST`:
		* summary: Registers user with their nickname and email
		* parameters:
			* nickname:
				* description: the name showed in the leaderboard
				* required: true
			* email:
				* description: email of the user
				* required: true
		* content: `application/json`
		* schema:
			```
			{
				"nickname" : string,
				"email" : string
			}
			```
	* ##### responses:
		* `200`:
			* description: user registered
		* `401`:
			* description: unauthenticated request
		* `400`
			* description: bad request --- duplicate nickname or email
			* content: `application/json`
			* schema:
				```
				{
					"error" : reason // "email" or "nickname"
				}
				```
		* `501`:
			* description: internal server error

3. #### `/api/logout`:
	* ##### `GET`:
		* summary: logs user out
	* ##### responses:
		* `200`:
			* description: user successfully logged out
		* `501`:
			* description: internal server error

4. #### `/api/get-challenges`:
	* ##### `GET`:
		* summary: end point for getting challenges
	* ##### responses:
		* `200`:
			* description: returns all available challenges
			* content: `application/json`
			* schema:
				```
				{
					"challenges" : [{
							"id": integer,
							"challengeTitle": string,
							"challengeBody": string,
							"challengeAnswer": answer
							"score" : integer
						}...]
				}
				// where answer is:
				//enum answer = {
				//	null, // when user hasn't answered the challenge yet
				//	answer // when user has answered the question
				//}
					```
		* `401`:
			* description: unauthorized --- unauthenticated requests for challenges
		* `501`:
			* description: internal server error

5. #### `/api/check-response`:
	* ##### `POST`:
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
	* ##### responses:
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
		* `409`:
			* description: conflict --- double submit of answer
		* `501`:
			* description: internal server error

6. #### `/api/leaderboard`:
	* ##### `GET`:
		* summary: end point for getting leaderboard
	* ##### responses:
		* `200`:
			* description: returns top 10 contestants' name, score and
			rank along with the requesting user's score and rank
			* content: `application/json`
			* schema:
				```
				{
					"leaderboard" : [{
								"rank": integer,
								"nickname": string,
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

6. #### `/api/get-state`:
	* ##### `GET`:
		* summary: end point for getting leaderboard
	* ##### responses:
		* `200`:
			* description: returns top 10 contestants' name, score and
			rank along with the requesting user's score and rank
			* content: `application/json`
			* schema:
				```
				{
					"state" : state 
				}
				// where state is:
				//enum state = {
				//	 loggedIn,
				//	 registered,
				//	 loggedOut
				//}
				```
		* `401`:
			* description: unauthorized --- user not logged in
		* `403`:
			* description: forbidden --- challenge yet to start 
		* `501`:
			* description: internal server error
