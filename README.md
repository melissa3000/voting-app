# Voting app for interview exercises

This Rails and React application is the starting point for our Voting app
interview exercise. You may not need all the various files included to complete
the assignment, but they are here in case they help you move faster! Please
modify anything you need to in order to meet the requirements and show us your
own approach.

## Current Limitations

This app should not be considered complete. Given more time, additional improvements should be made:

- validations around similar candidate names, avoiding abuse like myFave, myFave1, myFave2
- authentication for passwords and admin access to be able to see vote results - possibly adding admin flag to user table
- app doesn't currently validate login - sessions aren't quite implemented correctly and a user can navigate directly to a vote page by guessing the user id (security risk)
- If these tables were real, we should use UUIDs for id's instead of the auto-increment to avoid security issues
- accommodating multiple voters at once
- protecting against sql injections
- considering how we want to handle the 10 candidate max for user experience?
- if a user is not logged in and navigates to another page, redirect to /login
- add tests
- needs a signup page in addition to login for new users (and need welcome on home page)
- add better input validation
- add mobile support
- add accessibility
- there were some styling shortcuts taken for time, instead set up a style guide/standards (no magic numbers)
- cleanup boilerplate that ruby generated if not used
- zip code input will need validation (number type is not recommended, but didn’t have time to add validation function)
- debounce input fields

## Installation

Your development environment should have:

- Ruby v3.1.2
- [Bundler](https://bundler.io/)
- Node v20.18.2
- Yarn v1.22.19
- git
- [SQLite3](https://www.sqlite.org/)

Initialize git, install the application, and initialize the database:

```sh
# First, download the zip file, unzip the directory,
# and navigate into the project directory. Then:
git init
git add .
git commit -m "Initial files provided"
bundle install
bundle exec rake db:migrate
bundle exec rake db:seed

# Install JS packages, including React
yarn install
```

## Running the app

```sh
bundle exec rails server
```

Visit [http://localhost:3000](http://localhost:3000) in your browser

For asset live reloading, run:

```sh
./bin/shakapacker-dev-server
```

If the assets ever get out of sync, delete `/public/packs` and restart your
Rails server (and your shakapacker-dev-server if it was running).

## Helpful information

DB is seeded with test user and some initial candidates. Test user is: test@example.com zip: 12345
In the event that routing isn't working correctly, you can navigate directly to:

- localhost:3000/login (login)
- /users/:id (vote)
- /candidates (results)

## Running tests

The included test suite uses Rspec and Capybara.

Check out `spec/requests/` for example tests.

```sh
# Run all tests
bundle exec rspec

# Run one test file
bundle exec rspec <path/to/the/file.rb>

# Run one test case inside a test file
bundle exec rspec <path/to/the/file.rb>:<line_number>
```

## Accessing the Rails console

```sh
bundle exec rails console
```

## Debugging

You can open up a debugging console by adding `binding.pry` anywhere in test or
application code.

Example:

```rb
def show
  binding.pry
  render json: { data: @my_object }, status: :ok
end
```

In this example, when the `show` method is hit during click testing or a test,
a debugger will open up in the terminal, where you can inspect values:

```rb
@my_object.id
@my_object.valid?
```

Step to the next line with `next`. Resume regular code execution or tests with
`continue`.
