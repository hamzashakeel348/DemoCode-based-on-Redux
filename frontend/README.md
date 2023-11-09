# TeamSnap Mega Tournament Frontend

Welcome to the Frontend side of **TeamSnap Mega Tournament**! This is the UI that powers our comprehensive tournament management application.

**TeamSnap Mega Tournament** has been meticulously designed to streamline the complexities of tournament organization. With this powerful UI, you gain the ability to:

- Register a new Team with their captain.
- See the list of available teams and their captains.

Here for the registration of the team, you need to provide the team name, team captain's first name and last name. Then you submit the details and you will see the team in the team's list.

When you visit the team's view, here you will get the list of the teams already added in the database. Each card in the list will provide the details of team name, captain's first and last name.

## Usage

```shell
# Clone the repository
$ git clone https://github.com/teamsnap/teamsnap-mega-tournament.git && cd teamsnap-mega-tournament

# Setup
$ docker-compose run frontend yarn

# Run Tests
$ docker-compose run --rm frontend npm test

# Start the Application
$ docker-compose up -d

# Check the Frontend
Open the browser(Google Chrome), and visit 'http://frontend.localhost/'

```
