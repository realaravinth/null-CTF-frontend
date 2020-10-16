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
			description: returns all available challenges
			* content: `application/json`
				* schema:
					```
					{
						"challenges" : [{
								id: integer,
								challenge: string
							}...]
					}
					```
			* `401`:
				description: unauthenticated requests
			* `501`:
				* description: internal server error
