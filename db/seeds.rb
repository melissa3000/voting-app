# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Create a sample user
User.create!(email: "test@example.com",
             zipcode: 12345,
             password:              "fakepass",
             password_confirmation: "fakepass")

User.create!(email: "another@example.com",
             zipcode: 12345,
             password:              "fakepass",
             password_confirmation: "fakepass")

# Create some sample candidates
Candidate.create!(name: "beyonce", votes: 2)

Candidate.create!(name: "The Muppet Band", votes: 4)

Candidate.create!(name: "The Flaming Potatoes", votes: 1)
