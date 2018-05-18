require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all
Follow.destroy_all
Comment.destroy_all

User.create!(
  username: 'guest',
  password: 'password',
  avatar: URI.parse("https://picsum.photos/200/?random"),
  about_you: Faker::Overwatch.quote,
  cover_photo_id: 1
)

10.times do |i|
  User.create!(
    username: Faker::RickAndMorty.character,
    password: 'password',
    avatar: URI.parse("https://picsum.photos/200/?random"),
    about_you: Faker::Overwatch.quote,
    cover_photo_id: 1
  )
end

200.times do |i|
  Photo.create!(
    user_id: User.all.sample.id,
    title: Faker::Simpsons.location,
    body: Faker::Simpsons.quote,
    image: URI.parse("https://picsum.photos/1920/1080/?random")
  )
end

20.times do |i|
  user_id = User.all.sample.id
  followee_id = User.all.sample.id

  while(followee_id == user_id)
    followee_id = User.all.sample.id
  end

  Follow.create!(
    user_id: user_id,
    followee_id: followee_id,
  )
end


100.times do |i|
  Comment.create!(
    photo_id: Photo.all.sample.id,
    body: Faker::RickAndMorty.quote
  )
end
